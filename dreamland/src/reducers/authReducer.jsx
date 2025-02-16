const initialState = {
    uid: null,
    displayName: null,
    email: null,
    isAuthenticated: false,
};

export const authReducer = (state = initialState, action) => {
switch (action.type) {
    case "LOGIN":
        return {
            ...state,
            uid: action.payload.uid,
            displayName: action.payload.displayName,
            email: action.payload.email,
            isAuthenticated: true,
        };
    case "REGISTER":
        return {
            ...state,
            // uid: action.payload.uid,
            // displayName: action.payload.displayName.split("@")[0] ??"...",
            // email: action.payload.email,
        };

    case "LOGOUT":
        return {
            ...initialState, 
        };

    default:
    return state;
}
};