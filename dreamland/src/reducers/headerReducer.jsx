export const HeaderReducer = (state, action) => {
  switch (action.type) {

    case "ADD_HEADER":
      return {
        ...state,
        headers : [
          ...state.headers,
          {
            id: (state.headers?.length == 0) 
              ? 1  
              : state.headers[state.headers?.length - 1]?.id  + 1,
            date: new Date().toISOString().replace("T", " ").substring(0, 19),
            ...action.payload
          }
        ],
        header: {}
      }
    case "EDİT_HEADER":
      return {
        ...state,
        headers: [
          ...state.headers.map( h => 
            h.id === action.payload.id
            ?{...h, ...action.payload}
            :h
          )
        ],
        header: {}
      }
    case "DELETE_HEADER":
      return {
        ...state,
        headers:  state.headers.filter(f => f.id !== action.payload.id),
        header: {}
      }
    case "GET_HEADER":
      return {
        ...state,
        header: {...action.payload}
      }
    case "CLEAR_HEADER":
      return {
        ...state,
        header: {}
      }
    default:
      return state;
  }
};