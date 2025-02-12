export const InfoReducer = (state, action) => {
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