import { nanoid } from 'nanoid';
export const DreamReducer = (state, action) => {
    switch (action.type) {
        case "ADD_DREAM":
            const newId = nanoid();
        return {
            ...state,
            dreams : [
                ...state.dreams,
                {
                    id:newId,
                    // id: (state.dreams?.length == 0) 
                    // ? 1  
                    // : state.dreams[state.dreams?.length - 1]?.id  + 1,
                    date: new Date().toISOString().replace("T", " ").substring(0, 19),
                    ...action.payload
                }
            ],
            dreamsTitle: [
                ...state.dreamsTitle, 
                {
                    id:newId,
                    // id: (state.dreamsTitle.length == 0) 
                    //     ? 1  
                    //     : state.dreamsTitle[state.dreamsTitle?.length - 1]?.id  + 1,
                    title: action.payload.title
                }
            ],
            dream: {}
        }
        case "EDIT_DREAM":
            return {
                ...state,
                dreams: [
                    ...state.dreams.map( h => 
                        h.id === action.payload.id
                        ?{...h, ...action.payload}
                        :h  )
                ],
                dreamsTitle: [
                    ...state.dreamsTitle.map( h => 
                        h.id === action.payload.id
                        ?{
                            ...h, 
                            title: action.payload.title
                        }
                        :h )
                ],
                dream: {},
            }
        case "DELETE_DREAM":
        return {
                ...state,
                dreams:  state.dreams.filter(f => f.id !== action.payload.id),
                dreamsTitle:  state.dreamsTitle.filter(f => f.id !== action.payload.id),
                dream: {}
            }
        case "GET_DREAM":
            // console.log(action.payload.id ,action.payload.title, action.payload.content);
            return {
                ...state,
                dream:  {id:action.payload.id ,title:action.payload.title, content:action.payload.content}
            }   
        case "GET_PAGE_DREAM":
            return {
                ...state,
                dreamPage:  state.dreams.find(dream => dream.id == action.payload.id) 
                    ?? {...action.payload}
            }   
        case "GET_DREAM_BY_LETTER":
            return {  ...state  };
        case "CLEAR_DREAM":
            return {
                ...state,
                dream: {}
            }
        default:
            return state;
    }
}; 