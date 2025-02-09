import { useState, useMemo, useEffect } from 'react'
import './App.css'
import { AppRouter } from './routers/AppRouter'
import { DreamsData, AboutValue, ContactValue, FaqsValue, SocialMedias, Revievs, Messages, Headers} from './data/dreams'


function App() {
  const [dreams,setDreams]= useState(DreamsData);
  const [dream,setDream]= useState({});
  const [about,setAbout]= useState(AboutValue);
  const [contact,setContact]= useState(ContactValue);
  const [faqs,setFaqs]= useState(FaqsValue);
  const [reviews,setReviews]= useState(Revievs);
  const [messages,setMessages]= useState(Messages);
  const [headers,setHeaders]= useState(Headers);
  const [socialMedias,setSocialMedias]= useState(SocialMedias);

  const cardDreams = useMemo(() => 
    dreams.reverse().slice(0,9).map(d => ({
      ...d,
      title: d.title?.length > 20 ? `${d.title.slice(0, 20)}...` : d.title,
      content: d.content?.length > 50 ? `${d.content.slice(0, 40)}...` : d.content,
    }))
  , [dreams]);
  
  const dreamsTitle = useMemo(() => 
    dreams.map(d => ({
      id: d.id,
      title: d.title,
    })), [dreams]);

  const editDream = (id) => {
    setDream(dreams.find( d => d.id == id)?? {id:5})
  };

  return (
    <AppRouter 
      dreams={cardDreams} 
      allDreams={dreams} 
      editDream={editDream} 
      dream={dream} 
      reviews={reviews} 
      about={about} 
      faqs={faqs} 
      contact={contact} 
      socialMedias={socialMedias} 
      messages={messages} 
      headers={headers} 
      titles={dreamsTitle}
    />
  )
}
export default App
