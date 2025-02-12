import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from '../components/Footer';
import { ScrollTop } from "../components/Scroll-top";

export const OtherLayout = ({ children }) => {
    return (
        <>
            <div className="pt-20 bg-[url('https://www.svgrepo.com/show/390315/stars.svg')] bg-[length:40px_40px] bg-white/[97%] bg-blend-overlay min-h-screen max-w-[70rem] mx-auto px-10">
                <Navbar />
                <div className='w-[60rem] mx-auto px-10'>
                { <Outlet/>}
                </div>
                <Footer />
                <ScrollTop />
            </div>
        </>
    );
}