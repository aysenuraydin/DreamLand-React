export const MessageReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return {
        ...state,
        messages : [
          ...state.messages,
          {
            id: (state.messages?.length == 0) 
              ? 1  
              : state.messages[state.messages?.length - 1]?.id  + 1,
            isArchive:false,
            date: new Date().toISOString().replace("T", " ").substring(0, 19),
            ...action.payload
          }
        ],
        message: {}
      }

      case "EDİT_MESSAGE":
        console.log("çalıştı")
        console.log(action.payload)
        return {
          ...state,
          messages: [
            ...state.messages.map( h => 
              h.id === action.payload.id
              ?{
                ...h, 
                isArchive: !h.isArchive
              }
              :h
            )
          ],
          message: {}
        }
      case "DELETE_MESSAGE":
        return {
          ...state,
          messages:  state.messages.filter(f => f.id !== action.payload.id),
          message: {}
        }
      case "GET_MESSAGE":
        return {
          ...state,
          message: {...action.payload}
        }
      case "CLEAR_MESSAGE":
        return {
          ...state,
          message: {}
        }
      default:
          return state;
  }
};
const Message = () => {
  const [messages,setMessages] = useState(Messages);
  const [message,setMessage]= useState({});
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
        ...item,
        isArchive:false,
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
}