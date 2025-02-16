import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import {thunk} from "redux-thunk";
//Reducers
import { FaqReducer } from '../reducers/faqReducer';
import { MessageReducer } from '../reducers/messageReducer';
import { HeaderReducer } from '../reducers/headerReducer';
import { ReviewReducer } from '../reducers/reviewReducer';
import { DreamReducer } from '../reducers/dreamReducer';
import { InfoReducer } from '../reducers/infoReducer';
import { authReducer } from '../reducers/authReducer';
import { ImgReducer } from '../reducers/imgReducer';

// const store = createStore(counterReducer);

const store = createStore(
    combineReducers({
        auth: authReducer,
        dream: DreamReducer,
        header: HeaderReducer,
        img: ImgReducer,
        info: InfoReducer,
        faq: FaqReducer,
        message: MessageReducer,
        review: ReviewReducer,
    }),
    applyMiddleware(thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;



