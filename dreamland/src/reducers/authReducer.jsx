export const authReducer = (state, action) => {
    switch (action.type) {
        case "CLEAR_NOTES":
            return { ...state, notes: []  };
        case "CLEAR_NOTE":
            return { ...state, note: {} };    
        case "ADD_NOTE":
            return {
                ...state,
                notes: [
                ...state.notes, 
                { id: state.notes[state.notes?.length - 1]?.id  + 1, ...action.payload }
                ],
                note: {}
            };
        case "EDIT_NOTE":
            return {
                ...state,
                notes: state.notes.map((n) =>
                        n.id === action.payload.id 
                        ? { ...action.payload } 
                        : n
                    ),
                note: {  } 
            }; 
        case "DELETE_NOTE":
            return { notes:  state.notes?.filter(n => n.id !== action.payload.id)};
        case "GET_NOTE":
            return {
                ...state,
                note:  { ...action.payload }
            };
        default:
            return state;
    }
};