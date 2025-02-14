import { nanoid } from 'nanoid';
// import { v4 as uuidv4 } from 'uuid';
import { FaqsData } from '../data/dreams';

const FaqInitialState = { 
    faqs: [...FaqsData],
    faq: {},
};

export const FaqReducer = (state=FaqInitialState, action) => {

  switch (action.type) {
    case "ADD_FAQ":
      return {
        ...state,
        faqs: [
          ...state.faqs, 
          { 
            id:  nanoid(),
              //  id: uuidv4(),  
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