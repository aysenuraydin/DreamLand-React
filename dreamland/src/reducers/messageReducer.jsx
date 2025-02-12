export const MessageReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return {
        ...state,
        messages : [
          ...state.messages,
          {
            id: (state.messages?.length == 0) 
              ? 1  
              : state.messages[state.messages?.length - 1]?.id  + 1,
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