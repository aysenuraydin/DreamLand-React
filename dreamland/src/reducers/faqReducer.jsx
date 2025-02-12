export const FaqReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAQ":
      return {
        ...state,
        faqs: [
          ...state.faqs, 
          { 
            id: (state.faqs?.length == 0) 
              ? 1  
              : state.faqs[state.faqs?.length - 1]?.id  + 1, 
            ...action.payload 
          }
        ],
        faq: {}
      };
    case "EDIT_FAQ":
      return {
        ...state,
        faqs: [
          ...state.faqs.map(f=>
            f.id === action.payload.id
            ? { ...action.payload }
            : f
          )
        ],
        faq: {}
      };
    case "CLEAR_FAQ":
        return { ...state, faq:{} };  
    case "DELETE_FAQ":
      return { 
        ...state,
        faqs:  state.faqs.filter(f => f.id !== action.payload.id),
        faq: {}
      };
    case "GET_FAQ":
      return { 
        ...state, 
        faq: { ...action.payload } 
      };
    default:
        return state;
  }
};