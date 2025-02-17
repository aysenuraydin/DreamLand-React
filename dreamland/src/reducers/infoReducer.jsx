
const initialState = { 
    about: "",
    contact: {},
    socialMedias: {},
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
        case "SET_INFOS":
            return {
                about:  action.payload.about,
                contact: { ...action.payload.contact },
                socialMedias: { ...action.payload.socialMedias }
            }
        default:
            return state;
    }
};