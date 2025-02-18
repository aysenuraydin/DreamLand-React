const headerInitialState = {
    headers: [ ],
    header: {},
    headerActive: {},
    headersByPageNumber: [ ],
    loading: false
}

export const HeaderReducer = (state=headerInitialState, action) => {
  switch (action.type) {
    case "ADD_HEADER":
      return {
          ...state,
          headers: [
              ...state.headers.map(h =>
                  action.payload.isActive ? { ...h, isActive: false } : h
              ), 
              {
                  ...action.payload
              }
          ],
          header: { }
      };
      case "EDIT_HEADER":
        return {
          ...state,
          headers: state.headers.map((h) =>
            h.id == action.payload.id
              ? { ...h, ...action.payload }
              : action.payload.isActive
              ? { ...h, isActive: false }
              : h
          ),
          header: {},
        };
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
    case "SET_HEADERS":
      return {
          ...state,
          headers: action.payload,
          headerActive : action.payload.find(header => header.isActive)  
                          ?? {}
      }
    case "SET_HEADERS_BY_PAGENUMBER":
      return {
          ...state,
          headersByPageNumber: action.payload,
      } 
    case "LOADING_HEADERS":
        return { ...state, loading: action.payload };
    case "GET_ACTİVE_HEADER":
      return {
        ...state,
        headerActive: state.headers.find(header => header.isActive) 
        ?? {...action.payload}
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

