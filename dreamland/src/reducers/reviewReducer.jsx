export const ReviewReducer = (state, action) => {
    switch (action.type) {
        case "SET_REVİEWS_BY_DREAMID":
          return { 
            ...state,
            reviewsByDreamId : state.reviews.filter(f => f.dreamId === action.payload.id && f.isConfirm),
          };
        case "ADD_REVİEW":
          return {
            ...state,
            reviews : [
              ...state.reviews,
              {
                id: (state.reviews?.length == 0) 
                  ? 1  
                  : state.reviews[state.reviews?.length - 1]?.id  + 1,
                isConfirm:false,
                username: `${action.payload.name} ${action.payload.surname}`,
                date: new Date().toISOString().replace("T", " ").substring(0, 19),
                ...action.payload
              }
            ],
            review: {}
          }
        case "EDİT_REVİEW":
          return {
            ...state,
            reviews: [
              ...state.reviews.map( h => 
                h.id === action.payload.id
                ?{...h, isConfirm: !h.isConfirm }
                :h
              )
            ],
            review: {}
          }
        case "DELETE_REVİEW":
          return {
            ...state,
            reviews:  state.reviews.filter(f => f.id !== action.payload.id),
            review: {}
          }
        case "GET_REVİEW":
          return {
            ...state,
            review: {...action.payload}
          }
        case "CLEAR_REVİEW":
          return {
            ...state,
            review: {}
          }
        default:
          return state;
      }
}
const Review = () => {
  const [reviews,setReviews]= useState(Revievs);
  const [reviewsByDreamId,setReviewsByDreamId]= useState([]);
  const [review,setReview]= useState({});
  const addReview = (item) => {
    setReviews((prev)=> [
      ...prev,
      {
        ...item,
        id: prev.length > 0 ? prev[prev.length - 1].id + 1 : 1,
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
  const getReviewsByDreamId = (dreamId) => setReviewsByDreamId([...reviews].filter(i=>i.dreamId==dreamId && i.isConfirm))
}