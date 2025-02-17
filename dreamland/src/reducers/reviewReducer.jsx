import { nanoid } from 'nanoid';

const reviewInitialState = {
    reviews: [ ],
    reviewsByDreamId: [],
    review: {},
}

export const ReviewReducer = (state = reviewInitialState, action) => {
    switch (action.type) {
        case "SET_REVIEWS_BY_DREAMID3":
          return { 
            ...state,
            reviewsByDreamId : state.reviews.filter(f => f.dreamId == action.payload.id && f.isConfirm),
          };
          case "SET_REVIEWS_BY_DREAMID":
            return { 
              ...state,
              reviewsByDreamId : action.payload
            };
        case "ADD_REVIEW":
          return {
            ...state,
            reviews : [
              ...state.reviews,
              { 
                username: `${action.payload.name} ${action.payload.surname}`,
                ...action.payload
              }
            ],
            review: {}
          }
        case "EDIT_REVIEW":
          return {
            ...state,
            reviews: [
              ...state.reviews.map( h => 
                h.id === action.payload.id
                ?{...h, isConfirm: !h.isConfirm }
                :h
              )
            ],
            review: {}
          }
        case "DELETE_REVIEW":
          return {
            ...state,
            reviews:  state.reviews.filter(f => f.id !== action.payload.id),
            review: {}
          }
        case "GET_REVIEW":
          return {
            ...state,
            review: {...action.payload}
          }
        case "SET_REVIEWS":
          return {
              ...state,
              reviews: action.payload
          }
        case "CLEAR_REVIEW":
          return {
            ...state,
            review: {}
          }
        default:
          return state;
      }
}