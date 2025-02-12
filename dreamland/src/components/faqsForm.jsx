import React,  { useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare ,faAdd ,faCancel} from "@fortawesome/free-solid-svg-icons";

export const FaqsForm = ({faq, faqDispatch}) => {
    const formRef = useRef(null); 
    const add = (event) => {
        event.preventDefault(); 
        const question = event.target.elements.question.value;
        const answer = event.target.elements.answer.value;
        if(question && answer){
            if(faq?.id){
                console.log("EDIT_FAQ")
                faqDispatch({ 
                    type: "EDIT_FAQ",
                    payload: {id: faq?.id, question:question, answer:answer} 
                });
            } else {
                console.log("ADD_FAQ")
                faqDispatch({ 
                    type: "ADD_FAQ",
                    payload: {question:question, answer:answer}
                });
            }
            formRef.current.reset();
        }
    }
    const reset = () => {
        formRef.current.reset();
        faqDispatch({ 
            type: "CLEAR_FAQ",
        });
    }
    return(
        <form onSubmit={add} ref={formRef}>
            <h1 className="text-2xl p-5 pt-0 text-center">Faqs</h1>
            <div className="bg-white rounded-2xl">
                <input type="text" name="question" id="question" className="w-full border border-gray-300 p-2 my-1 mb-2 rounded-md" placeholder="Question" defaultValue={faq?.question}/>
                <textarea name="answer" id="answer" className="w-full border border-gray-300 p-2 my-1 rounded-lg" placeholder="Answer" rows="4" defaultValue={faq?.answer}></textarea>
            </div>
            <div className="flex mt-3">
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
                
                <button onClick={reset} className="px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded-md text-center w-full mx-1 p-1 cursor-pointer hover:text-white hover:bg-gray-700">
                    Cancel Question
                    <FontAwesomeIcon icon={faCancel} className="text-md ml-2"/>
                </button>
            </div>
        </form>
)
}