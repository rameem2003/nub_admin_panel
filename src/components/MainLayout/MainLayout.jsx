import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Helmet } from "react-helmet";

export default function MainLayout() {
  return (
    <div className="max-w-screen mx-auto bg-gray-100 h-screen flex flex-col">
      <Helmet>
        <title>Dashboard || Admin Panel</title>
      </Helmet>
      <div className="flex flex-grow overflow-hidden">
        <div className="sticky top-0 z-0 w-2/12 hidden md:block">
          <SideBar />
        </div>
        <div className="w-full md:w-10/12 flex flex-col">
          <div className="sticky top-0 z-10">
            <Navbar />
          </div>
          <div className="flex-grow overflow-auto">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
