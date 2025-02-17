import { nanoid } from 'nanoid';

const messageInitialState = {
    messages: [ ],
    message: {},
}

export const MessageReducer = (state= messageInitialState, action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return {
        ...state,
        messages : [
          ...state.messages,
          {
            ...action.payload
          }
        ],
        message: {}
      }

      case "EDIT_MESSAGE":
        return {
          ...state,
          messages: [
            ...state.messages.map( h => 
              h.id === action.payload.id
              ?{
                ...h, 
                isArchive: !h.isArchive
              }
              :h
            )
          ],
          message: {}
        }
      case "DELETE_MESSAGE":
        return {
          ...state,
          messages:  state.messages.filter(f => f.id !== action.payload.id),
          message: {}
        }
      case "GET_MESSAGE":
        return {
          ...state,
          message: {...action.payload}
        }
      case "SET_MESSAGES":
        return {
            ...state,
            messages: action.payload
        }
      case "CLEAR_MESSAGE":
        return {
          ...state,
          message: {}
        }
      default:
          return state;
  }
};