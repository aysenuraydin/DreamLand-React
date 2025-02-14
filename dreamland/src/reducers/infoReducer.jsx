import { AboutData, ContactData, SocialMediasData } from '../data/dreams';

const initialState = { 
    about: AboutData,
    contact: ContactData,
    socialMedias: SocialMediasData,
};

export const InfoReducer = (state= initialState, action) => {
    switch (action.type) {
        case "EDİT_ABOUT":
            return {
                ...state,
                about:  action.payload
            }
        case "EDİT_CONTACT":
            return {
                ...state,
                contact: { ...action.payload }
            }
        case "EDİT_SOCİALMEDİA":
            return {
                ...state,
                socialMedias: { ...action.payload }
            }
        default:
            return state;
    }
};