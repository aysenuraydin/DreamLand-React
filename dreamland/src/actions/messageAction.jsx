import { database } from '../firebase/firebaseConfig';
import { getDatabase, ref, set, get, update, remove,push, child } from "firebase/database";

export const addMessage = (data) => ({ type: "ADD_MESSAGE", payload: data });

export const addMessageToDatabase = (data = {}) => {
    return (dispatch) => {
        const dataRef = ref(database, "messages");
        return push( dataRef,  {...data, isArchive:false,})
            .then((newRef) => {
                dispatch(addMessage({
                    id: newRef.key, 
                    ...data 
                }));
            })
            .catch((error) => {
                console.error("Error adding MESSAGE:", error);
            });
    };
};

export const editMessage = (updates) => ({
    type: "EDIT_MESSAGE",
    payload: { ...updates }
});

export const editMessageFromDatabase = (updates) => {
    return (dispatch) => {
        const { id } = updates; 
        const dataRef = ref(database, `messages/${id}`);
        
        return get(dataRef)
            .then((snapshot) => {
                const data = snapshot.val();
                data.isArchive = !data.isArchive

                return update(dataRef, data)
                    .then(() => {
                        dispatch(editMessage(updates)); 
                    })
            })
            .catch((error) => {
                console.error("Error updating MESSAGE:", error);
            });
    };
};

export const deleteMessage = (updates) => ({
    type: "DELETE_MESSAGE",
    payload: { ...updates }
});

export const deleteMessageFromDatabase = (updates) => {
    return (dispatch) => {
        const { id } = updates; 
        const dataRef = ref(database, `messages/${id}`);

        return remove(dataRef)
            .then(() => {
                dispatch(deleteMessage(updates)); 
            })
            .catch((error) => {
                console.error("Error updating MESSAGE:", error);
            });
        };
};

export const setMessages = (updates) => ({
    type: "SET_MESSAGES",
    payload: updates
});
export const getMessagesFromDatabase = () => {
    return async (dispatch, getState) => {
        try {
            const snapshot = await get(ref(database, "messages"));
            const messages = [];

            if (snapshot.exists()) {
                snapshot.forEach((faq) => {
                    const data = faq.val();
                    messages.push({
                        id: faq.key,
                        ...data
                    });
                });
            }

            dispatch(setMessages(messages)); 
        } catch (error) {
            console.error("Messages verisi alınırken hata oluştu:", error);
        }
    };
};