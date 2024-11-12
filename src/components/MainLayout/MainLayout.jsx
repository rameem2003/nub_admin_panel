import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import Footer from "../Footer/Footer";

export default function MainLayout() {
  return (
    <div className="max-w-screen-lg mx-auto bg-gray-100 h-screen">
        <div className="flex ">
            <div className="sticky top-0 z-0 w-2/12 ">
                <SideBar></SideBar>
            </div>
            <div className="w-10/12">
                <Outlet></Outlet>
            </div>
            
        </div>
        <div className="-mt-14">
              <Footer></Footer>
        </div>
        
    </div>
  )
}
