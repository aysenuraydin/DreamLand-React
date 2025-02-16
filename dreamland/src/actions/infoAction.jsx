import { database } from '../firebase/firebaseConfig';
import { getDatabase, ref, set, get, update, remove,push, child } from "firebase/database";


export const editAbout = (data) => (
    { type: "EDIT_ABOUT", payload: data.about });

export const editAboutFromDatabase = (updates) => {
    return (dispatch) => {
        const aboutRef = ref(database, `about`);
        return update(aboutRef, updates)
            .then(() => {
                dispatch(editAbout(updates));
            })
            .catch((error) => {
                console.error("Error updating ABOUT:", error);
            });
    };
};

export const editContact = (data) => ({ type: "EDIT_CONTACT", payload: data });

export const editContactFromDatabase = (updates) => {
    return (dispatch) => {
        const contactRef = ref(database, `contact`);
        return update(contactRef, updates)
            .then(() => {
                dispatch(editContact(updates));
            })
            .catch((error) => {
                console.error("Error updating CONTACT:", error);
            });
    };
};

export const editSocialMedia = (data) => ({ type: "EDIT_SOCİALMEDİA", payload: data });

export const editSocialMediaFromDatabase = (updates) => {
    return (dispatch) => {
        const mediasRef = ref(database, `socialMedias`);
        return update(mediasRef, updates)
            .then(() => {
                dispatch(editSocialMedia(updates));
            })
            .catch((error) => {
                console.error("Error updating SOCİALMEDİA:", error);
            });
    };
};

export const setInfos = (updates) => ({
    type: "SET_INFOS",
    payload: updates
});
export const getInfosFromDatabase = () => {
    return async (dispatch, getState) => {
        try {
            const aboutSnapshot = await get(ref(database, "about"));
            const contactSnapshot = await get(ref(database, "contact"));
            const socialMediasSnapshot = await get(ref(database, "socialMedias"));

            const aboutData = aboutSnapshot.exists() ? aboutSnapshot.val() : {};
            const contactData = contactSnapshot.exists() ? contactSnapshot.val() : {};
            const socialMediasData = socialMediasSnapshot.exists() ? socialMediasSnapshot.val() : {};

            dispatch(setInfos({
                about: aboutData,
                contact: contactData,
                socialMedias: socialMediasData
            })); 

        } catch (error) {
            console.error("Infos verisi alınırken hata oluştu:", error);
        }
    };3
};




