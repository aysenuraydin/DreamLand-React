import { database } from '../firebase/firebaseConfig';
import { getDatabase, ref, set, get, update, remove,push, child, query, orderByChild, startAfter, limitToFirst, limitToLast, startAt, endBefore } from "firebase/database";

export const addDream = (data) => ({ type: "ADD_DREAM", payload: data });

export const addDreamToDatabase = (data = {}) => {
    return (dispatch) => {
        const dataRef = ref(database, "dreams");
        const newdata = {
            ...data,
            date: Date.now()+ Math.floor(Math.random() * 1000)
        }
        return push( dataRef, newdata)
            .then((newRef) => {
                dispatch(addDream({
                    id: newRef.key, 
                    ...newdata 
                }));
            })
            .catch((error) => {
                console.error("Error adding DREAM:", error);
            });
    };
};

export const editDream = (updates) => ({
    type: "EDIT_DREAM",
    payload: { ...updates }
});

export const editDreamFromDatabase = (updates) => {
    return (dispatch) => {
        const { id, ...updatesWithoutId } = updates; 
        const dataRef = ref(database, `dreams/${id}`);

        return update(dataRef, updatesWithoutId)
            .then(() => {
                dispatch(editDream(updates)); 
            })
            .catch((error) => {
                console.error("Error updating DREAM:", error);
            });
    };
};

export const deleteDream = (updates) => ({
    type: "DELETE_DREAM",
    payload: { ...updates }
});

export const deleteDreamFromDatabase = (updates) => {
    return (dispatch) => {
        const { id } = updates; 
        const dataRef = ref(database, `dreams/${id}`);

        return remove(dataRef)
            .then(() => {
                dispatch(deleteDream(updates)); 
            })
            .catch((error) => {
                console.error("Error updating DREAM:", error);
            });
        };
};

export const setDreams = (updates) => ({
    type: "SET_DREAMS",
    payload: updates
});
export const getDreamsFromDatabase = () => {
    return async (dispatch, getState) => {
        try {
            const snapshot = await get(ref(database, "dreams"));
            const dreams = [];

            if (snapshot.exists()) {
                snapshot.forEach((dream) => {
                    const data = dream.val();
                    dreams.push({
                        id: dream.key,
                        ...data
                    });
                });
            }

            dispatch(setDreams(dreams));
        } catch (error) {
            console.error("Dreams verisi alınırken hata oluştu:", error);
        }
    };
};
export const setPageDream = (dream) => ({
    type: "GET_PAGE_DREAM",
    payload: dream
});
export const fetchDreamFromDatabase = (id) => {
    return async (dispatch) => {
        try { // await dedik boş dönmemesi için
            const snapshot = await get(ref(database, `dreams/${id}`));
            if (snapshot.exists()) {
                const dreamData = snapshot.val();
                dispatch(setPageDream({ id, ...dreamData }));
            } 
        } catch (error) {
            console.error("❌ Firebase Hatası:", error);
        }
    };
};

export const setDreamsByPageNumber = (updates) => ({
    type: "SET_DREAMS_BY_PAGENUMBER",
    payload: updates
});

export const getPaginatedDreamsFromDatabase = ({ pageSize, pageNumber }) => {
    return async (dispatch) => { 
        const dreamsRef = ref(database, "dreams");
        dispatch({ type: "LOADING_DREAMS", payload: true });

        const count = pageSize * (pageNumber - 1);
        let dreams = [];
        let lastDate = null;

        if (count > 0) {
            const firstQuery = query(dreamsRef, orderByChild("date"), limitToFirst(count));
            const firstSnapshot = await get(firstQuery);
            
            firstSnapshot.forEach((snap) => {
                lastDate = snap.val().date; 
            });
        }

        let dreamsQuery;
        if (lastDate) {
            dreamsQuery = query(dreamsRef, orderByChild("date"), startAfter(lastDate), limitToFirst(pageSize));
        } else {
            dreamsQuery = query(dreamsRef, orderByChild("date"), limitToFirst(pageSize));
        }

        const dreamsSnapshot = await get(dreamsQuery);
        let allDreams = [];

        dreamsSnapshot.forEach((snap) => {
            allDreams.push({
                id: snap.key,
                ...snap.val(),
            });
        });

        dreams = allDreams;
        dispatch(setDreamsByPageNumber(dreams));
        dispatch({ type: "LOADING_DREAMS", payload: false });
    };
};



































export const getPaginatedDreamsFromDatabase2 = ({ pageSize, pageNumber }) => {
    return async (dispatch) => { 
        const dreamsRef = ref(database, "dreams");
        let dreams = [];

        dispatch({ type: "LOADING_DREAMS", payload: true });

        const count = pageSize * (pageNumber - 1);

        const dreamsQuery = query(dreamsRef, limitToFirst(count + pageSize));
        const dreamsSnapshot = await get(dreamsQuery);

        let allDreams = [];
        dreamsSnapshot.forEach((snap) => {
            allDreams.push({
                id: snap.key,
                ...snap.val(),
            });
        });

        dreams = allDreams.slice(count, count + pageSize);
        
        dispatch(setDreamsByPageNumber(dreams));
        dispatch({ type: "LOADING_DREAMS", payload: false });
    };
};











