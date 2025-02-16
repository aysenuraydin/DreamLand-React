import { database } from '../firebase/firebaseConfig';
import { getDatabase, ref, set, get, update, remove,push, child } from "firebase/database";

export const addDream = (data) => ({ type: "ADD_DREAM", payload: data });

export const addDreamToDatabase = (data = {}) => {
    return (dispatch) => {
        const dataRef = ref(database, "dreams");
        return push( dataRef,  data)
            .then((newRef) => {
                dispatch(addDream({
                    id: newRef.key, 
                    ...data 
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
    console.log("editDreamFromDatabase")
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
