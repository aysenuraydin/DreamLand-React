import { nanoid } from 'nanoid';
export const HeaderReducer = (state, action) => {
  switch (action.type) {
    case "ADD_HEADER":
      return {
          ...state,
          headers: [
              ...state.headers.map(h =>
                  action.payload.isActive ? { ...h, isActive: false } : h
              ), 
              {
                id:nanoid(),
                  // id: (state.headers?.length === 0) 
                  //     ? 1  
                  //     : state.headers[state.headers?.length - 1]?.id + 1,
                  date: new Date().toISOString().replace("T", " ").substring(0, 19),
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
      console.log({...action.payload});
      return {
        ...state,
        header: {...action.payload}
      }
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

