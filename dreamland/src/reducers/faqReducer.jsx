export const FaqReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAQ":
      return {
        ...state,
        faqs: [
          ...state.faqs, 
          { 
            id: (state.faqs?.length == 0) 
              ? 1  
              : state.faqs[state.faqs?.length - 1]?.id  + 1, 
            ...action.payload 
          }
        ],
        faq: {}
      };
    case "EDIT_FAQ":
      return {
        ...state,
        faqs: [
          ...state.faqs.map(f=>
            f.id === action.payload.id
            ? { ...action.payload }
            : f
          )
        ],
        faq: {}
      };
    case "CLEAR_FAQ":
        return { ...state, faq:{} };  
    case "DELETE_FAQ":
      return { 
        ...state,
        faqs:  state.faqs.filter(f => f.id !== action.payload.id),
        faq: {}
      };
    case "GET_FAQ":
      return { 
        ...state, 
        faq: { ...action.payload } 
      };
    default:
        return state;
  }
};
const Faq = () => {
  const [faqs,setFaqs]= useState(FaqsValue);
  const [faq,setFaq]= useState({});
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
}