import React,  { useRef, useEffect, useState  } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare ,faAdd ,faCancel} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from 'react-redux';
import { addFaqToDatabase, editFaqFromDatabase } from "../actions/faqAction";

export const FaqsForm = () => {
    const state = useSelector((state) => state.faq);
    const dispatch = useDispatch(); 
    const faq = state.faq;

    const [error, setError] = useState("");
    const [info, setInfo] = useState("");
    const formRef = useRef(null); 

    useEffect(() => {
        setTimeout(() => {
            setError("");
            setInfo("");
        }, 3000);
    }, [error, info])

    const onSubmit = (event) => {
        event.preventDefault(); 
        const question = event.target.elements.question.value;
        const answer = event.target.elements.answer.value;
        if(question && answer){
            if(faq?.id){
                setInfo("Faq has been updated successfully");
                dispatch(editFaqFromDatabase({
                    id: faq?.id,
                    question:question, 
                    answer:answer
                }));
            } else {
                setInfo("Faq has been saved successfully.");
                dispatch(addFaqToDatabase({
                    question:question, 
                    answer:answer
                }));
            }
            formRef.current.reset();
        }else{
            if(!question) event.target.elements.question.value = faq.question || "";
            if(!answer) event.target.elements.answer.value = faq.answer || "";
            setError("Question or Answer cannot be empty");
        }
    }
    const reset = () => {
        formRef.current.reset();
        dispatch({ 
            type: "CLEAR_FAQ",
        });
    }
    return(
        <form onSubmit={onSubmit} ref={formRef}>
            <h1 className="text-2xl p-5 pt-0 text-center">Faqs</h1>
            <input type="text" name="question" id="question" className="w-full border border-gray-300 p-2 mb-2 rounded-md" placeholder="Question" defaultValue={faq?.question}/>
            <textarea name="answer" id="answer" className="w-full border border-gray-300 p-2 pb-0 rounded-lg" placeholder="Answer" rows="4" defaultValue={faq?.answer}></textarea>
            <div className='h-4 text-sm leading-2.5'> 
                {error && (<span className='text-red-500'>- {error}</span>)} 
                {info && (<span className='text-emerald-500'>- {info}</span>)} 
            </div>
            <div className="flex">
                {
                    !faq.id && (
                        <button type="submit" className="px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded-md text-center w-full mx-1 p-1 cursor-pointer hover:text-white hover:bg-gray-700">
                            Add Question
                            <FontAwesomeIcon icon={faAdd} className="text-md ml-2"/>
                        </button>
                    )
                }
                {
                    faq.id && (
                        <button type="submit" className="px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded-md text-center w-full mx-1 p-1 cursor-pointer hover:text-white hover:bg-gray-700">
                            Edit  Question
                            <FontAwesomeIcon icon={faPenToSquare} className="text-md ml-2"/>
                        </button>
                    )
                }
                
                <div onClick={reset} className="px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded-md text-center w-full mx-1 p-1 cursor-pointer hover:text-white hover:bg-gray-700">
                    Cancel Question
                    <FontAwesomeIcon icon={faCancel} className="text-md ml-2"/>
                </div>
            </div>
        </form>
)
}