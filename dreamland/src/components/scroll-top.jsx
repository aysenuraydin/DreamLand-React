import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp} from "@fortawesome/free-solid-svg-icons";
export const ScrollTop = () => {
    return(
        <button class="scroll-top cursor-pointer w-15 h-15 m-7 fixed bottom-0 right-0 opacity-60 z-50 rounded-lg border border-gray-500 shadow-md">
            <div class="arrow up mt-1 inline-block">
                <FontAwesomeIcon icon={faArrowUp} className="text-xl text-gray-500"/>
            </div>
        </button>
    )
}