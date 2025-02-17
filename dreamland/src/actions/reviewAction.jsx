import { database } from '../firebase/firebaseConfig';
import { getDatabase, ref, set, get, update, remove,push, child } from "firebase/database";

export const addReview = (data) => ({ type: "ADD_REVIEW", payload: data });

export const addReviewToDatabase = (data = {}) => {
    return (dispatch) => {
        const dataRef = ref(database, "reviews");
        const newdata = {
            ...data,
            isConfirm: data.isConfirm ?? false,
            date: new Date().toISOString().replace("T", " ").substring(0, 19)
        }
        return push( dataRef, newdata)
        .then((newRef) => {
            dispatch(addReview({
                id: newRef.key, 
                ...newdata 
            }));
        })
        .catch((error) => {
            console.error("Error adding REVIEW:", error);
        });
    };
}; 
export const editReview = (updates) => ({
    type: "EDIT_REVIEW",
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
                console.error("Error updating REVIEW:", error);
            });
    };
}; 
export const deleteReview = (updates) => ({
    type: "DELETE_REVIEW",
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
                console.error("Error updating REVIEW:", error);
            });
        };
};
export const setReviews = (updates) => ({
    type: "SET_REVIEWS",
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
export const setReviewsById = (updates) => ({
    type: "SET_REVIEWS_BY_DREAMID",
    payload: updates
});
export const getReviewsByIdFromDatabase = (id) => async (dispatch) => {
    try { // await dedik boş dönmemesi için
        const snapshot = await get(ref(database, "reviews"));
        if (snapshot.exists()) {
            const dreamData = Object.values(snapshot.val()).filter(i => i.dreamId === id && i.isConfirm);
            dispatch(setReviewsById(dreamData)); 
        } else {
            dispatch(setReviewsById([])); 
        }
    } catch (error) {
        console.error("❌ Reviews verisi alınırken hata oluştu:", error);
    }
};