export const DreamReducer = (state, action) => {
    switch (action.type) {
        case "ADD_DREAM":
        return {
            ...state,
            dreams : [
                ...state.dreams,
                {
                    id: (state.dreams?.length == 0) 
                    ? 1  
                    : state.dreams[state.dreams?.length - 1]?.id  + 1,
                    date: new Date().toISOString().replace("T", " ").substring(0, 19),
                    ...action.payload
                }
            ],
            dreamsTitle: [
                ...state.dreamsTitle, 
                {
                    id: (state.dreamsTitle.length == 0) 
                        ? 1  
                        : state.dreamsTitle[state.dreamsTitle?.length - 1]?.id  + 1,
                    title: action.payload.title
                }
            ],
            cardDreams: [
                ...state.cardDreams, 
                {
                    id: (state.cardDreams?.length == 0) 
                        ? 1  
                        : state.cardDreams[state.cardDreams?.length - 1]?.id  + 1,
                    title: action.payload.title?.length > 20 
                        ? `${action.payload.title?.slice(0, 20)}...` 
                        : action.payload.title,
                    content: action.payload.content?.length > 50 
                        ? `${action.payload.content.slice(0, 40)}...` 
                        : action.payload.content,
                }
            ],
            dream: {}
        }
        case "EDİT_DREAM":
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
                cardDreams: [
                    ...state.cardDreams.map( h => 
                        h.id === action.payload.id
                        ?{
                            title: action.payload.title?.length > 20 
                                ? `${action.payload.title?.slice(0, 20)}...` 
                                : action.payload.title,
                            content: action.payload.content?.length > 50 
                                ? `${action.payload.content.slice(0, 40)}...` 
                                : action.payload.content,
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
                cardDreams:  state.cardDreams.filter(f => f.id !== action.payload.id),
                dream: {}
            }
        case "GET_DREAM":
            return {
                ...state,
                dream:  state.dreams.find(dream => dream.id == action.payload.id) ?? 
                    {...action.payload}
            }   
        case "GET_DREAM_BY_ID":
            return {
                ...state,
                dream: state.dreams.find(f => f.id === action.payload.id)?? 
                    {...action.payload}
            };
        case "CLEAR_DREAM":
            return {
                ...state,
                dream: {}
            }
        default:
            return state;
    }
}; 
const Dream = () => {
    const [dreams,setDreams]= useState(DreamsData);
    const [dream,setDream]= useState({});
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
        setDream(dreams.find( d => d.id == id)?? {id:0})
    };
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


}