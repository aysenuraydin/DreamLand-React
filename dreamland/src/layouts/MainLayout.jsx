import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from '../components/Footer';
import { ScrollTop } from "../components/Scroll-top";

export const MainLayout = ({ children }) => {
    return (
        <>
            <div className='pt-20'>
                <Navbar />
                <div className='max-w-[70rem] mx-auto px-10'>
                { <Outlet/>}
                </div>
                <Footer />
                <ScrollTop />
            </div>
        </>
    );
}