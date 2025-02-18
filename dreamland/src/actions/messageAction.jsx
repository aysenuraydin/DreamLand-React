import { database } from '../firebase/firebaseConfig';
import { getDatabase, ref, set, get, update, remove,push, child, query, orderByChild, startAfter, limitToFirst, limitToLast, startAt, endBefore } from "firebase/database";

export const addMessage = (data) => ({ type: "ADD_MESSAGE", payload: data });
export const addMessageToDatabase = (data = {}) => {
    return (dispatch) => {
        const dataRef = ref(database, "messages");
        const newdata = {
            ...data,
            isArchive: data.isArchive ?? false,
            date: Date.now()+ Math.floor(Math.random() * 1000)
        }
        return push( dataRef, newdata)
            .then((newRef) => {
                dispatch(addMessage({
                    id: newRef.key, 
                    ...newdata 
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
export const setMessagesByPageNumber = (updates) => ({
    type: "SET_MESSAGES_BY_PAGENUMBER",
    payload: updates
});

export const getPaginatedMessagesFromDatabase = ({ pageSize, pageNumber }) => {
    return async (dispatch) => { 
        const messagesRef = ref(database, "messages");
        dispatch({ type: "LOADING_MESSAGES", payload: true });

        const count = pageSize * (pageNumber - 1);
        let messages = [];
        let lastDate = null;

        if (count > 0) {
            const firstQuery = query(messagesRef, orderByChild("date"), limitToFirst(count));
            const firstSnapshot = await get(firstQuery);
            
            firstSnapshot.forEach((snap) => {
                lastDate = snap.val().date; 
            });
        }
        let messagesQuery;
        if (lastDate) {
            messagesQuery = query(messagesRef, orderByChild("date"), startAfter(lastDate), limitToFirst(pageSize));
        } else {
            messagesQuery = query(messagesRef, orderByChild("date"), limitToFirst(pageSize));
        }

        const messagesSnapshot = await get(messagesQuery);
        let allMessages = [];

        messagesSnapshot.forEach((snap) => {
            allMessages.push({
                id: snap.key,
                ...snap.val(),
            });
        });

        messages = allMessages.reverse();

        dispatch(setMessagesByPageNumber(messages));
        dispatch({ type: "LOADING_MESSAGES", payload: false });
    };
};
