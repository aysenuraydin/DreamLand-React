import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from '../components/Footer';
import { ScrollTop } from "../components/scroll-top";
import { AdminSidebar } from '../components/AdminSidebar';

export const AdminLayout = ({ children }) => {
    return (
        <>
            <div className='min-h-screen mt-20'>
                <Navbar />
                <div className='lg:max-w-[70rem] w-full mx-auto px-10 flex flex-col lg:flex-row'>
                    <div className="lg:max-w-72 w-full py-7"><AdminSidebar/></div>
                    <div className="w-full">{ <Outlet/> }</div>
                </div>
                <Footer />
                <ScrollTop />
            </div>
        </>
    );
}