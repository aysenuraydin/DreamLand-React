import { database } from '../firebase/firebaseConfig';
import { getDatabase, ref, set, get, update, remove,push, child } from "firebase/database";

export const addReview = (data) => ({ type: "ADD_REVİEW", payload: data });

export const addReviewToDatabase = (data = {}) => {
    return (dispatch) => {
        const dataRef = ref(database, "reviews");
                    return push( dataRef,  {...data, isConfirm: false,})
            .then((newRef) => {
                dispatch(addReview({
                    id: newRef.key, 
                    ...data 
                }));
            })
            .catch((error) => {
                console.error("Error adding REVİEW:", error);
            });
    };
};

export const editReview = (updates) => ({
    type: "EDIT_REVİEW",
    payload: { ...updates }
});

export const editReviewFromDatabase = (updates) => {
    return (dispatch) => {
        const { id } = updates; 
        const dataRef = ref(database, `reviews/${id}`);
        
        return get(dataRef)
            .then((snapshot) => {
                const data = snapshot.val();
                data.isConfirm = !data.isConfirm

                return update(dataRef, data)
                    .then(() => {
                        dispatch(editReview(updates)); 
                    })
            })
            .catch((error) => {
                console.error("Error updating REVİEW:", error);
            });
    };
};

export const deleteReview = (updates) => ({
    type: "DELETE_REVİEW",
    payload: { ...updates }
});

export const deleteReviewFromDatabase = (updates) => {
    return (dispatch) => {
        const { id } = updates; 
        const dataRef = ref(database, `reviews/${id}`);

        return remove(dataRef)
            .then(() => {
                dispatch(deleteReview(updates)); 
            })
            .catch((error) => {
                console.error("Error updating REVİEW:", error);
            });
        };
};

export const setReviews = (updates) => ({
    type: "SET_REVİEWS",
    payload: updates
});
export const getReviewsFromDatabase = () => {
    return async (dispatch, getState) => {
        try {
            const snapshot = await get(ref(database, "reviews"));
            const reviews = [];

            if (snapshot.exists()) {
                snapshot.forEach((faq) => {
                    const data = faq.val();
                    reviews.push({
                        id: faq.key,
                        ...data
                    });
                });
            }

            dispatch(setReviews(reviews)); 
        } catch (error) {
            console.error("Reviews verisi alınırken hata oluştu:", error);
        }
    };
};