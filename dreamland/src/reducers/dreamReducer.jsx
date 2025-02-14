import { nanoid } from 'nanoid';
import { DreamsData } from '../data/dreams';

const dreamInitialState = {
    dreams: [...DreamsData],
    dream: {},  
    dreamPage: {},  
    dreamsTitle: DreamsData.map((d)=> ({id: d.id, title: d.title} ))
}

export const DreamReducer = (state=dreamInitialState, action) => {
    switch (action.type) {
        case "ADD_DREAM":
            const newId = nanoid();
        return {
            ...state,
            dreams : [
                ...state.dreams,
                {
                    id:newId,
                    date: new Date().toISOString().replace("T", " ").substring(0, 19),
                    ...action.payload
                }
            ],
            dreamsTitle: [
                ...state.dreamsTitle, 
                {
                    id:newId,
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
            console.log({...action.payload})
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