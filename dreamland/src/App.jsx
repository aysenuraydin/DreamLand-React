import React from 'react';
import './App.css'
import { AppRouter } from './routers/AppRouter'
import { DreamProvider } from './contexts/DreamContext';

function App() {
  return (
    <DreamProvider>
      <AppRouter />
    </DreamProvider>
  )
}
export default App

/*
import { useState, useMemo, useEffect, useReducer } from 'react'
import './App.css'
import { AppRouter } from './routers/AppRouter'
import { DreamsData, AboutValue, ContactValue, FaqsValue, SocialMedias, Revievs, Messages, Headers} from './data/dreams'
//Reducers
import { FaqReducer } from './reducers/faqReducer';
import { MessageReducer } from './reducers/messageReducer';
import { HeaderReducer } from './reducers/headerReducer';
import { ReviewReducer } from './reducers/reviewReducer';
import { DreamReducer } from './reducers/dreamReducer';
import { InfoReducer } from './reducers/infoReducer';

function App() {
  const InfosInitialState = { 
    about: AboutValue,
    contact: ContactValue,
    socialMedias: SocialMedias,
  };
  const [infoState, infoDispatch] = useReducer(InfoReducer, InfosInitialState);

  const FaqInitialState = { 
    faqs: [...FaqsValue],
    faq: {},
  };
  const [faqState, faqDispatch] = useReducer(FaqReducer, FaqInitialState);

  const headerInitialState = {
    headers: [...Headers],
    header: {},
  }
  const [headerState , headerDispatch ] = useReducer(HeaderReducer, headerInitialState)

  const reviewInitialState = {
    reviews: [...Revievs],
    reviewsByDreamId: [],
    review: {},
  }
  const [reviewState , reviewDispatch ] = useReducer(ReviewReducer, reviewInitialState)

  const messageInitialState = {
    messages: [...Messages],
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
    <AppRouter 
      headers={headerState.headers}   
      header={headerState.header} 
      headerDispatch={headerDispatch}  

      about={infoState.about} 
      contact={infoState.contact} 
      socialMedias={infoState.socialMedias} 
      infoDispatch={ infoDispatch }

      faqs={faqState.faqs} 
      faq={faqState.faq} 
      faqDispatch={ faqDispatch }

      reviews={reviewState.reviews} 
      review={reviewState.review} 
      reviewsByDreamId={reviewState.reviewsByDreamId} 
      reviewDispatch={reviewDispatch} 

      messages={messageState.messages} 
      message={messageState.message} 
      messageDispatch={ messageDispatch }

      titles={ dreamState.dreamsTitle}
      dreams={ dreamState.cardDreams} 
      allDreams={dreamState.dreams}  
      dream={dreamState.dream} 
      dreamDispatch={dreamDispatch} 
    />
  )
}
export default App

*/