import React, { useReducer, createContext } from "react";
import {   DreamsData, AboutData, ContactData, FaqsData, SocialMediasData, MessagesData, HeadersData, ReviewsData } 
    from '../data/dreams'
//Reducers
import { FaqReducer } from '../reducers/faqReducer';
import { MessageReducer } from '../reducers/messageReducer';
import { HeaderReducer } from '../reducers/headerReducer';
import { ReviewReducer } from '../reducers/reviewReducer';
import { DreamReducer } from '../reducers/dreamReducer';
import { InfoReducer } from '../reducers/infoReducer';

export const DreamContext = createContext();

export function DreamProvider({ children }) {
    const InfosInitialState = { 
        about: AboutData,
        contact: ContactData,
        socialMedias: SocialMediasData,
    };
    const [infoState, infoDispatch] = useReducer(InfoReducer, InfosInitialState);

    const FaqInitialState = { 
        faqs: [...FaqsData],
        faq: {},
    };
    const [faqState, faqDispatch] = useReducer(FaqReducer, FaqInitialState);

    const headerInitialState = {
        headers: [...HeadersData],
        header: {},
    }
    const [headerState , headerDispatch ] = useReducer(HeaderReducer, headerInitialState)

    const reviewInitialState = {
        reviews: [...ReviewsData],
        reviewsByDreamId: [],
        review: {},
    }
    const [reviewState , reviewDispatch ] = useReducer(ReviewReducer, reviewInitialState)

    const messageInitialState = {
        messages: [...MessagesData],
        message: {},
    }
    const [messageState , messageDispatch ] = useReducer(MessageReducer, messageInitialState)

    const dreamInitialState = {
        dreams: [...DreamsData],
        dream: {},  
        dreamsTitle: DreamsData.map((d)=> ({id: d.id, title: d.title} )),
        cardDreams: DreamsData.map(d => ({
            id: d.id,
            title: d.title?.length > 20 ? `${d.title?.slice(0, 20)}...` : d.title,
            content: d.content?.length > 50 ? `${d.content.slice(0, 40)}...` : d.content,
            })
        )
    }
    const [dreamState , dreamDispatch ] = useReducer(DreamReducer, dreamInitialState)
    

    return (
        <DreamContext.Provider value={{
                infoState, infoDispatch, 
                faqState, faqDispatch, 
                headerState , headerDispatch, 
                reviewState , reviewDispatch, 
                messageState , messageDispatch, 
                dreamState , dreamDispatch
            }}>
            { children }
        </DreamContext.Provider>
    )

}


