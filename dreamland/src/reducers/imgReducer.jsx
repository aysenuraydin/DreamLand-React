export const ImgReducer = (state="", action) => {
    switch (action.type) {
        case "CLEAR_NOTES":
            return { ...state };
        default:
            return state;
    }
};