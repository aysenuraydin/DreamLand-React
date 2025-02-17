import { database } from '../firebase/firebaseConfig';
import { getDatabase, ref, set, get, update, remove,push, child } from "firebase/database";

export const addFaq = (data) => ({ type: "ADD_FAQ", payload: data });

export const addFaqToDatabase = (data = {}) => {
    return (dispatch) => {
        const dataRef = ref(database, "faqs");
        return push( dataRef,  data)
            .then((newRef) => {
                dispatch(addFaq({
                    id: newRef.key, 
                    ...data 
                }));
            })
            .catch((error) => {
                console.error("Error adding FAQ:", error);
            });
    };
};

export const editFaq = (updates) => ({
    type: "EDIT_FAQ",
    payload: { ...updates }
});

export const editFaqFromDatabase = (updates) => {
    return (dispatch) => {
        const { id, ...updatesWithoutId } = updates; 
        const dataRef = ref(database, `faqs/${id}`);

        return update(dataRef, updatesWithoutId)
            .then(() => {
                dispatch(editFaq(updates)); 
            })
            .catch((error) => {
                console.error("Error updating FAQ:", error);
            });
    };
};
export const deleteFaq = (updates) => ({
    type: "DELETE_FAQ",
    payload: { ...updates }
});

export const deleteFaqFromDatabase = (updates) => {
    return (dispatch) => {
        const { id } = updates; 
        const dataRef = ref(database, `faqs/${id}`);
        return remove(dataRef)
            .then(() => {
                dispatch(deleteFaq(updates)); 
            })
            .catch((error) => {
                console.error("Error updating FAQ:", error);
            });
        };
};

export const setFaqs = (updates) => ({
    type: "SET_FAQS",
    payload: updates
});
export const getFaqsFromDatabase = () => {
    return async (dispatch, getState) => {
        try {
            const snapshot = await get(ref(database, "faqs"));
            const faqs = [];

            if (snapshot.exists()) {
                snapshot.forEach((faq) => {
                    const data = faq.val();
                    faqs.push({
                        id: faq.key,
                        ...data
                    });
                });
            }

            dispatch(setFaqs(faqs)); 
        } catch (error) {
            console.error("Faqs verisi alınırken hata oluştu:", error);
        }
    };
};