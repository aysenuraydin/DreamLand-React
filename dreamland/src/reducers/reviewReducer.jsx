import { nanoid } from 'nanoid';

const reviewInitialState = {
    reviews: [ ],
    reviewsByDreamId: [],
    review: {},
    reviewsByPageNumber: [ ],
    loading: false
}

export const ReviewReducer = (state = reviewInitialState, action) => {
    switch (action.type) {
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
        case "SET_REVIEWS_BY_PAGENUMBER":
          return {
              ...state,
              reviewsByPageNumber: action.payload,
              loading: false
          } 
        case "LOADING_REVIEWS":
            return { ...state, loading: action.payload };
        case "SET_REVIEWS":
          return {
              ...state,
              reviews: action.payload,
              loading: false
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