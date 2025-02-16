import {  MessagesData, HeadersData, ReviewsData, DreamsData, FaqsData, SocialMediasData, AboutData, ContactData, }  from '../data/dreams'
import { useDispatch } from 'react-redux';
import { database } from '../firebase/firebaseConfig';
import { getDatabase, ref, set, get, update, remove,push, child } from "firebase/database";

import { addHeaderToDatabase } from '../actions/headerAction';
import { addDreamToDatabase } from '../actions/dreamAction';
import { addMessageToDatabase } from '../actions/messageAction';
import { addReviewToDatabase } from '../actions/reviewAction';
import { addFaqToDatabase } from '../actions/faqAction';
import { editAboutFromDatabase, editContactFromDatabase, editSocialMediaFromDatabase } from '../actions/infoAction';
import { startRegisterWithEmailPassword } from './authAction';

const addTestHeaders = async (dispatch) => {
    await Promise.all(HeadersData.map(data => dispatch(addHeaderToDatabase(data))));
}; 
const addTestDreams = async (dispatch) => {
    await Promise.all(DreamsData.map(data => dispatch(addDreamToDatabase(data))));
}; 
const addTestMessages = async (dispatch) => {
    await Promise.all(MessagesData.map(data => dispatch(addMessageToDatabase(data))));
}; 
const addTestReviews = async (dispatch) => {
    await Promise.all(ReviewsData.map(data => dispatch(addReviewToDatabase(data))));
}; 
const addTestFaqs = async (dispatch) => {
    await Promise.all(FaqsData.map(data => dispatch(addFaqToDatabase(data))));
}; 
const addTestSocialMedia = async (dispatch) => {
    await dispatch(editSocialMediaFromDatabase({...SocialMediasData}));
}; 
const addTestAbout = async (dispatch) => {
    await dispatch(editAboutFromDatabase({content:AboutData}));
}; 
const addTestContact = async (dispatch) => {
    await dispatch(editContactFromDatabase({...ContactData}));
};
const addTestAdmin = async (dispatch) => {
    await dispatch(startRegisterWithEmailPassword(
        import.meta.env.VITE_FIREBASE_ADMIN_EMAIL,
        import.meta.env.VITE_FIREBASE_ADMIN_PASSWORD));
};

export const addTests = () => {
    return async (dispatch) => {
        try {
            const snapshot = await get(ref(database));

            if (!snapshot.exists()) { // Firebase içinde veri yoksa
                console.log("Veri bulunamadı, test verileri ekleniyor...");

                await addTestHeaders(dispatch);
                await addTestDreams(dispatch);
                await addTestMessages(dispatch);
                await addTestReviews(dispatch);
                await addTestFaqs(dispatch);
                await addTestSocialMedia(dispatch);
                await addTestAbout(dispatch);
                await addTestContact(dispatch);
                await addTestAdmin(dispatch);

                console.log("✅ Tüm test verileri başarıyla eklendi.");
            } else {
                console.log("❌ Firebase içinde zaten veri var, test verileri eklenmedi.");
            }
        } catch (error) {
            console.error("🔥 Test verileri eklenirken hata oluştu:", error);
        }
    };
};