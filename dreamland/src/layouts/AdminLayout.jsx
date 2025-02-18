import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from '../components/Footer';
import { AdminSidebar } from '../components/AdminSidebar';
import { ScrollTop } from "../components/scroll-top";

export const AdminLayout = ({ children }) => {
    return ( 
        <div className="pt-14 bg-[url('https://www.svgrepo.com/show/390315/stars.svg')] bg-[length:40px_40px] bg-white/[97%] bg-blend-overlay" >
            <Navbar />
            <div className='lg:max-w-[70rem] w-full mx-auto px-10 flex flex-col lg:flex-row pb-14'>
                <div className="lg:max-w-72 w-full py-7"><AdminSidebar/></div>
                <div className="w-full">{ <Outlet/> }</div>
            </div>
            <Footer />
            <ScrollTop />
        </div> 
    );
}