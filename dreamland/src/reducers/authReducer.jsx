const initialState = {
    uid: null,
    displayName: null,
    email: null,
    isAuthenticated: false,
    passwordUpdateStatus: null,
    error: null,
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
        };

    case "LOGOUT":
        return {
            ...initialState, 
        };
    case "UPDATE_PASSWORD_SUCCESS":
        return { ...state, passwordUpdateStatus: action.payload, error: null };
    case "UPDATE_PASSWORD_ERROR":
        return { ...state, error: action.payload, passwordUpdateStatus: null };
    case "FORGOT_PASSWORD_SUCCESS":
        return { ...state, passwordResetMessage: action.payload, error: null };
    case "FORGOT_PASSWORD_ERROR":
        return { ...state, error: action.payload, passwordResetMessage: null };
    default:
    return state;
}
};