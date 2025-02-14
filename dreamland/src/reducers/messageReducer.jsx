import { nanoid } from 'nanoid';
import { MessagesData }  from '../data/dreams' 

const messageInitialState = {
    messages: [...MessagesData],
    message: {},
}

export const MessageReducer = (state= messageInitialState, action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      console.log(action.payload)
      return {
        ...state,
        messages : [
          ...state.messages,
          {
            id:nanoid(), 
            isArchive:false,
            date: new Date().toISOString().replace("T", " ").substring(0, 19),
            ...action.payload
          }
        ],
        message: {}
      }

      case "EDİT_MESSAGE":
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
      case "CLEAR_MESSAGE":
        return {
          ...state,
          message: {}
        }
      default:
          return state;
  }
};