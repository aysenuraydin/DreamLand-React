
export const authReducer = (state="", action) => {
    switch (action.type) {
        case "":
            return { ...state };
        default:
            return state;
    }
};