import { nanoid } from 'nanoid';

const UserInitialState = { 
    users: [ ],
    user: null
};

export const UserReducer = (state=UserInitialState, action) => {

  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [
          ...state.users, 
          { 
            id:  nanoid(),
            ...action.payload 
          }
        ],
        user: {}
      };
    case "EDIT_USER":
      return {
        ...state,
        users: [
          ...state.users.map(f=>
            f.id === action.payload.id
            ? { ...action.payload }
            : f
          )
        ],
        user: {}
      };
    case "CLEAR_USER":
        return { ...state, user:{} };  
    case "DELETE_USER":
      return { 
        ...state,
        users:  state.users.filter(f => f.id !== action.payload.id),
        user: {}
      };
    case "GET_USER":
      return { 
        ...state, 
        user: { ...action.payload } 
      };
    case "SET_USERS":
      return {
          ...state,
          users: action.payload
      }  
      case "SET_USER":
        return { ...state, user: action.payload };
    default:
        return state;
  }
};