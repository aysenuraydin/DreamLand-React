import { database } from '../firebase/firebaseConfig';
import { getDatabase, ref, set, get, update, remove,push, child, query, orderByChild, startAfter, limitToFirst, limitToLast, startAt, endBefore } from "firebase/database";
import { login, logout, startRegisterWithEmailPassword } from './authAction';
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const addUser = (data) => ({ type: "ADD_USER", payload: data });
export const addUserToDatabase = (data = {}) => async (dispatch) => {
    try {
        const { email } = data;
        const dataRef = ref(database, "users");

        const snapshot = await get(dataRef);
        const users = snapshot.exists() ? snapshot.val() : {};
        
        const userExists = Object.values(users).some((u) => u.email === email);
        if (userExists) {
            console.warn("⚠️ Kullanıcı zaten mevcut:", email);
            return;
        }
        const newdata = {
            ...data,
            date: Date.now()+ Math.floor(Math.random() * 1000)
        }
        const newRef = await push(dataRef, newdata);
        dispatch(
            addUser({
                id: newRef.key,
                ...newdata,
            })
        );
        await dispatch(startRegisterWithEmailPassword(email, "123456")); 
        console.log("✅ Kullanıcı başarıyla eklendi:", email);
    } catch (error) {
        console.error("❌ Kullanıcı ekleme hatası:", error);
    }
};
export const deleteUser = (updates) => ({
    type: "DELETE_USER",
    payload: { ...updates }
});
export const deleteUserFromDatabase = (updates) => async (dispatch) => {
    try {
        const { id, email } = updates;
        const dataRef = ref(database, `users/${id}`);

        await remove(dataRef).then((d) => dispatch(deleteUser({ id })))

        console.log("✅ Kullanıcı başarıyla silindi:", id, email);
    } catch (error) {
        console.error("❌ Kullanıcı silme hatası:", error);
    }
};
export const setUsers = (updates) => ({
    type: "SET_USERS",
    payload: updates
});
export const getUsersFromDatabase = () => {
    return async (dispatch, getState) => {
        try {
            const snapshot = await get(ref(database, "users"));
            const users = [];

            if (snapshot.exists()) {
                snapshot.forEach((user) => {
                    const data = user.val();
                    users.push({
                        id: user.key,
                        ...data
                    });
                });
            }

            dispatch(setUsers(users)); 
        } catch (error) {
            console.error("Users verisi alınırken hata oluştu:", error);
        }
    };
};
export const setUser = (user) => ({
    type: "SET_USER",
    payload: user
});
export const listenForAuthChanges = () => (dispatch) => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const { uid, displayName, email } = user;
            dispatch(login(uid, email.split("@")[0], email));
            dispatch(setUser({ uid: user.uid, email: user.email, displayName: email.split("@")[0] }));  
        } else {
            dispatch(setUser(null)); 
            dispatch(logout());
        }
    }); 
}
export const setUsersByPageNumber = (updates) => ({
    type: "SET_USERS_BY_PAGENUMBER",
    payload: updates
});

export const getPaginatedUsersFromDatabase = ({ pageSize, pageNumber }) => {
    return async (dispatch) => { 
        const usersRef = ref(database, "users");
        dispatch({ type: "LOADING_USERS", payload: true });

        const count = pageSize * (pageNumber - 1);
        let users = [];
        let lastDate = null;

        if (count > 0) {
            const firstQuery = query(usersRef, orderByChild("date"), limitToFirst(count));
            const firstSnapshot = await get(firstQuery);
            
            firstSnapshot.forEach((snap) => {
                lastDate = snap.val().date; 
            });
        }

        let usersQuery;
        if (lastDate) {
            usersQuery = query(usersRef, orderByChild("date"), startAfter(lastDate), limitToFirst(pageSize));
        } else {
            usersQuery = query(usersRef, orderByChild("date"), limitToFirst(pageSize));
        }

        const usersSnapshot = await get(usersQuery);
        let allUsers = [];

        usersSnapshot.forEach((snap) => {
            allUsers.push({
                id: snap.key,
                ...snap.val(),
            });
        });

        users = allUsers.reverse();

        dispatch(setUsersByPageNumber(users));
        dispatch({ type: "LOADING_USERS", payload: false });
    };
};