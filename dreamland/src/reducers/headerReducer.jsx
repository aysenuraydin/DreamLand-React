export const HeaderReducer = (state, action) => {
  switch (action.type) {

    case "ADD_HEADER":
      return {
        ...state,
        headers : [
          ...state.headers,
          {
            id: (state.headers?.length == 0) 
              ? 1  
              : state.headers[state.headers?.length - 1]?.id  + 1,
            date: new Date().toISOString().replace("T", " ").substring(0, 19),
            ...action.payload
          }
        ],
        header: {}
      }
    case "EDİT_HEADER":
      return {
        ...state,
        headers: [
          ...state.headers.map( h => 
            h.id === action.payload.id
            ?{...h, ...action.payload}
            :h
          )
        ],
        header: {}
      }
    case "DELETE_HEADER":
      return {
        ...state,
        headers:  state.headers.filter(f => f.id !== action.payload.id),
        header: {}
      }
    case "GET_HEADER":
      return {
        ...state,
        header: {...action.payload}
      }
    case "CLEAR_HEADER":
      return {
        ...state,
        header: {}
      }
    default:
      return state;
  }
};
const Header = () => {
  const [headers,setHeaders]= useState(Headers);
  const [header,setHeader]= useState({});
  const addHeader = (item) => {
    if (header?.id) {
      setHeaders((prev) =>
        prev.map((f) =>
          f.id === header.id ? { ...item, id: header.id } : f
        )
      ); 
    }else{
      setHeaders((prev)=> [
        ...prev,
        {
          id: prev.length > 0 ? prev[prev.length - 1].id + 1 : 1,
          name: item?.name,
          isActive: item?.isActive,
          url: item?.url,
          date: new Date().toISOString().replace("T", " ").substring(0, 19)
        }
      ])
    }
    console.log(item);
    resetHeader();
  }
  const deleteHeader = (headerId) => {
    setHeaders(headers.filter(h => h.id !== headerId));
    resetHeader();
  }
  const getHeader = (headerId) => {
    const item = headers.find(header=> header.id== headerId);
    if(item){
      setHeader(item);
    }
  };
  const resetHeader = () => setHeader({id:"", name:"", isActive:"", url:"", date:""})
  
    
}