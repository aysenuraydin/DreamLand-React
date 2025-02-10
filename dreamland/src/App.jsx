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
  const [faq,setFaq]= useState({});
  const [reviews,setReviews]= useState(Revievs);
  const [review,setReview]= useState({});

  // const [messages,setMessages] = useState(Messages);
  const [message,setMessage]= useState({});

  const [headers,setHeaders]= useState(Headers);
  const [socialMedias,setSocialMedias]= useState(SocialMedias);

  const cardDreams = useMemo(() => 
    dreams.reverse()?.slice(0,9).map(d => ({
      ...d,
      title: d.title?.length > 20 ? `${d.title?.slice(0, 20)}...` : d.title,
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
  const editAbout = (about) => {
    setAbout(about);
  }
  const editContact = (contact) => {
    setContact(contact);
  }
  const editSocialMedia = (socialMedia) => {
    setSocialMedias(socialMedia);
  }
  const addFaq = (item) => {
    if (faq?.id) {
      setFaqs((prev) =>
        prev.map((f) =>
          f.id === faq.id ? { ...item, id: faq.id } : f
        )
      );
    }else{
      setFaqs((prev)=> [
        ...prev,
        {
          id: prev.length > 0 ? prev[prev.length - 1].id + 1 : 1,
          question: item?.question,
          answer: item?.answer
        }
      ])
    }
    resetFaq();
  }
  const deleteFaq = (faqId) => {
    setFaqs(faqs.filter(f=> f.id !== faqId));
    resetFaq();
  }
  const getFaq = (faqId) => {
    const item = faqs.find(faq=> faq.id== faqId);
    if(item){
      setFaq(item);
    }
  };
  const resetFaq = () => setFaq({})
  

  const addDream = (item) => {
    if (dream?.id) {
      setDreams((prev) =>
        prev.map((f) =>
          f.id === dream.id ? { ...item, id: dream.id } : f
        )
      );
    }else{
      setDreams((prev)=> [
        ...prev,
        {
          id: prev.length > 0 ? prev[prev.length - 1].id + 1 : 1,
          title: item?.title,
          content: item?.content,
          date: new Date().toISOString().replace("T", " ").substring(0, 19) 
        }
      ])
    }
    resetDream();
  }
  const deleteDream = (dreamId) => {
    setDreams(dreams.filter(f=> f.id !== dreamId));
    resetDream();
  }
  const getDream = (dreamId) => {
    const item = dreams.find(dream=> dream.id== dreamId);
    if(item){
      setDream(item);
    }
  };
  const resetDream = () => setDream({})


  const addReview = (item) => {
    setReviews((prev)=> [
      ...prev,
      {
        id: prev.length > 0 ? prev[prev.length - 1].id + 1 : 1,
        dreamTitle: item?.dreamTitle,
        dreamId: item?.dreamId,
        username: item?.username,
        comment: item?.comment,
        isConfirm:false,
        date: new Date().toISOString().replace("T", " ").substring(0, 19)
      }
    ])
    resetReview();
  }
  const editReview = (id) => {
    const rev = reviews.find(r=> r.id == id)?? {}
    setReviews((prev) =>
      prev.map((f) =>
        f.id === review.id ? { ...rev, isConfirm: !f.isConfirm } : f
      )
    );
    resetReview();
  }
  const deleteReview = (reviewId) => {
    setReviews(reviews.filter(f=> f.id !== reviewId));
    resetReview();
  }
  const getReview = (reviewId) => {
    const item = reviews.find(review=> review.id== reviewId);
    if(item){
      setReview(item);
    }
  };
  const resetReview = () => setReview({})

  //  id date isArchive name surname email phone content ,company
  const [messages,setMessages] = useState(Messages);
  const  [listMessages,setListMessages] = useState(
    [...messages].reverse()
    .map(d => ({
      id: d.id,
      fullname: d.name + " " + d.surname,
      email: d.email,
      phone: d.phone,
      date: d.date,
      isArchive: d.isArchive,
    }))
  )
  useEffect(() => {
    setListMessages(
      [...messages].reverse()
        .map(d => ({
        id: d.id,
        fullname: d.name + " " + d.surname,
        email: d.email,
        phone: d.phone,
        date: d.date,
        isArchive: d.isArchive,
      })));
  }, [messages]);

  const addMessage = (item) => {
    setMessages((prev)=> [
      ...prev,
      {
        id: prev.length > 0 ? prev[prev.length - 1].id + 1 : 1,
        // dreamTitle: item?.dreamTitle,
        // dreamId: item?.dreamId,
        // username: item?.username,
        // comment: item?.comment,
        // isConfirm:false,
        date: new Date().toISOString().replace("T", " ").substring(0, 19)
      }
    ])
    resetMessage();
  }
  const editMessage = (id) => {
    setMessages((prev) =>
      prev.map((m) =>
        m.id === id ? { ...m, isArchive: !m.isArchive } : m
      ),
    );
    resetMessage();
  }
  const deleteMessage = (messageId) => {
    setMessages(prev => prev.filter(f => f.id !== messageId));
    resetMessage();
  }
  const getMessage = (messageId) => {
    const item = messages.find(message=> message.id== messageId);
    if(item){
      setMessage(item);
    }
  };
  const resetMessage = () => setMessage({})

  return (
    <AppRouter 
      dreams={cardDreams} 
      allDreams={dreams} 
      editDream={editDream} 

      dream={dream} 
      getDream={getDream} 
      resetDream={resetDream} 
      addDream={addDream} 
      deleteDream={deleteDream} 

      reviews={reviews} 
      review={review} 
      getReview={getReview} 
      addReview={addReview} 
      editReview={editReview} 
      deleteReview={deleteReview} 

      about={about} 
      editAbout={editAbout} 

      contact={contact} 
      editContact={editContact} 

      socialMedias={socialMedias} 
      editSocialMedia={editSocialMedia} 

      faqs={faqs} 
      faq={faq} 
      getFaq={getFaq} 
      resetFaq={resetFaq} 
      addFaq={addFaq} 
      deleteFaq={deleteFaq} 


      messages={listMessages} 
      message={message} 
      getMessage={getMessage} 
      addMessage={addMessage} 
      resetMessage={resetMessage} 
      editMessage={editMessage} 
      deleteMessage={deleteMessage} 
      
      
      headers={headers} 
      titles={dreamsTitle}
    />
  )
}
export default App
