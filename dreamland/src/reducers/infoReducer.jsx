import { AboutData, ContactData, SocialMediasData } from '../data/dreams';

const initialState = { 
    about: AboutData,
    contact: ContactData,
    socialMedias: SocialMediasData,
};

export const InfoReducer = (state= initialState, action) => {
    switch (action.type) {
        case "EDIT_ABOUT":
            return {
                ...state,
                about:  action.payload
            }
        case "EDIT_CONTACT":
            return {
                ...state,
                contact: { ...action.payload }
            }
        case "EDIT_SOCİALMEDİA":
            return {
                ...state,
                socialMedias: { ...action.payload }
            }
        case "SET_İNFOS":
            return {
                ...state,
                about:  action.payload.about,
                contact: { ...action.payload.contact },
                socialMedias: { ...action.payload.socialMedias }
            }
        default:
            return state;
    }
};