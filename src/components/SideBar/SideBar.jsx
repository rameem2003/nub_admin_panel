import { NavLink } from "react-router-dom";
import logo from "../../assets/logo_nub.png";
import { MdSpaceDashboard, MdOutlineSlowMotionVideo } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { IoNotifications } from "react-icons/io5";
import { RxBarChart } from "react-icons/rx";

export default function SideBar() {
  return (
    <div>
      <div className="bg-white shadow-xl h-screen px-4 ">
        <div className="py-5">
          <img src={logo} alt="NOB Logo" />
        </div>
        <hr className="mb-5"></hr>
        <div>
          <NavLink to={"/user"}>
            <div className="flex items-center gap-2 border-2 p-2 rounded-2xl">
              <div className="w-8 ">
                <img
                  className="rounded-full"
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>

              <div>
                <h1 className="font-bold">Admin</h1>
              </div>
            </div>
          </NavLink>
        </div>
        <nav className="text-xl  flex flex-col gap-5 mt-5">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `${
                isActive ? "bg-pink-500 text-white" : "text-gray-600"
              } flex gap-2 items-center justify-start px-2 rounded-lg`
            }
          >
            <MdSpaceDashboard />
            Dashbord
          </NavLink>
          <NavLink
            to={"/students"}
            className={({ isActive }) =>
              `${
                isActive ? "bg-pink-500 text-white" : "text-gray-600"
              } flex gap-2 items-center justify-start px-2 rounded-lg`
            }
          >
            <PiStudentFill />
            Students
          </NavLink>
          <NavLink
            to={"/teachers"}
            className={({ isActive }) =>
              `${
                isActive ? "bg-pink-500 text-white" : "text-gray-600"
              } flex gap-2 items-center justify-start px-2 rounded-lg`
            }
          >
            <GiTeacher />
            Teachers
          </NavLink>
          <NavLink
            to={"/notice"}
            className={({ isActive }) =>
              `${
                isActive ? "bg-pink-500 text-white" : "text-gray-600"
              } flex gap-2 items-center justify-start px-2 rounded-lg`
            }
          >
            <IoNotifications />
            Notice
          </NavLink>
          <NavLink
            to={"/result"}
            className={({ isActive }) =>
              `${
                isActive ? "bg-pink-500 text-white" : "text-gray-600"
              } flex gap-2 items-center justify-start px-2 rounded-lg`
            }
          >
            <RxBarChart />
            Result
          </NavLink>
          <NavLink
            to={"/videos"}
            className={({ isActive }) =>
              `${
                isActive ? "bg-pink-500 text-white" : "text-gray-600"
              } flex gap-2 items-center justify-start px-2 rounded-lg`
            }
          >
            <MdOutlineSlowMotionVideo />
            Videos
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
