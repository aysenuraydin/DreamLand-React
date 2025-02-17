import { database } from '../firebase/firebaseConfig';
import { getDatabase, ref, set, get, update, remove,push, child } from "firebase/database";

export const addHeader = (data) => ({ type: "ADD_HEADER", payload: data });

export const addHeaderToDatabase = (data = {}) => {
    return (dispatch) => {
        const dataRef = ref(database, "headers");
        return get(dataRef)
            .then((datas) => {
                const headers = datas.val() || {}; 
                if(!!data.isActive){
                    Object.keys(headers).forEach(key => {
                        headers[key].isActive = false;
                    });
                }
                return set(dataRef, headers)
            })
            .then( (i) => {
                const newdata = {
                    ...data,
                    date: new Date().toISOString().replace("T", " ").substring(0, 19)
                }
                return push( dataRef,  newdata)
                .then((newRef) => {
                    dispatch(addHeader({
                        id: newRef.key, 
                        ...newdata 
                    }));
                })
            } )
            .catch((error) => {
                console.error("Error adding HEADER:", error);
            });
    };
};

export const editHeader = (updates) => ({
    type: "EDIT_HEADER",
    payload: { ...updates }
});

export const editHeaderFromDatabase = (updates) => {
    return (dispatch) => {
        const { id,isActive, ...updatesWithoutId } = updates; 
        const dataRef = ref(database, `headers/${id}`);

        return get(ref(database, `headers`))
        .then((datas) => {
            const headers = datas.val() || {}; 
            if(isActive){
                Object.keys(headers).forEach(key => {
                    headers[key].isActive = false;
                });
            }
            return set(ref(database, `headers`), headers);
        })
        .then((datas) => {
            return set(dataRef, updates)
        })
        .then( (i) => {
            return update(dataRef, updatesWithoutId)
            .then(() => {
                dispatch(editHeader(updates)); 
            })
        } )
        .catch((error) => {
            console.error("Error adding HEADER:", error);
        })
    };
};

export const deleteHeader = (updates) => ({
    type: "DELETE_HEADER",
    payload: { ...updates }
});

export const deleteHeaderFromDatabase = (updates) => {
    return (dispatch) => {
        const { id } = updates; 
        const dataRef = ref(database, `headers/${id}`);

        return remove(dataRef)
            .then(() => {
                dispatch(deleteHeader(updates)); 
            })
            .catch((error) => {
                console.error("Error updating HEADER:", error);
            });
        };
};

export const setHeaders = (updates) => ({
    type: "SET_HEADERS",
    payload: updates
});
export const getHeadersFromDatabase = () => {
    return async (dispatch, getState) => {
        try {
            const snapshot = await get(ref(database, "headers"));
            const headers = [];

            if (snapshot.exists()) {
                snapshot.forEach((faq) => {
                    const data = faq.val();
                    headers.push({
                        id: faq.key,
                        ...data
                    });
                });
            }

            dispatch(setHeaders(headers)); 
        } catch (error) {
            console.error("Headers verisi alınırken hata oluştu:", error);
        }
    };
};