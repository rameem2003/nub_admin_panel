import { useEffect, useState } from "react";
import logo from "../../assets/images.jfif";
import { AiOutlineMenuFold } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { MdOutlineSlowMotionVideo, MdSpaceDashboard } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { IoNotifications } from "react-icons/io5";
import { RxBarChart } from "react-icons/rx";
import axios from "axios";
import { useDispatch } from "react-redux";
import { student } from "../../redux/feature/StudentsSlice";

export default function Navbar() {
  const dispatch = useDispatch(); // dispatch instance
  const [open, setOpen] = useState(false);

  /**
   * Fetch all students data
   */

  const fetchStudents = async () => {
    let res = await axios.get(`${import.meta.env.VITE_API_URL}students`);
    dispatch(student(res.data));
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between text-xl font-bold px-8 py-5 bg-gray-300 ">
        <h1>Welcome To NUBian!</h1>
        <h1 className="hidden md:flex">Dashboard</h1>

        <div
          className="text-2xl md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <CgClose /> : <AiOutlineMenuFold />}
        </div>

        <div
          className={`absolute right-0   bg-white text-gray-400 px-6 shadow-lg mt-2 duration-500 md:hidden ${
            open ? "top-12" : "-top-[600px]"
          }`}
        >
          <div className="py-5 flex flex-col items-center">
            <img
              src={logo}
              alt="NUB Logo"
              className=" w-10 h-10 md:h-24 mb-4 "
            />
            <hr className="w-full mb-5" />

            <NavLink
              to="/user"
              className="flex items-center gap-2 border-2 p-2 rounded-2xl mb-4"
            >
              <img
                className="rounded-full w-8"
                alt="Admin Avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
              <span className="font-bold">Admin</span>
            </NavLink>

            {/* Navigation Links */}
            <nav className="text-xl flex flex-col gap-5 w-full">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-pink-500 text-white" : "text-gray-600"
                  } flex gap-2 items-center justify-start px-2 py-1 rounded-lg`
                }
              >
                <MdSpaceDashboard />
                Dashboard
              </NavLink>
              <NavLink
                to="/students"
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-pink-500 text-white" : "text-gray-600"
                  } flex gap-2 items-center justify-start px-2 py-1 rounded-lg`
                }
              >
                <PiStudentFill />
                Students
              </NavLink>
              <NavLink
                to="/teachers"
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-pink-500 text-white" : "text-gray-600"
                  } flex gap-2 items-center justify-start px-2 py-1 rounded-lg`
                }
              >
                <GiTeacher />
                Teachers
              </NavLink>
              <NavLink
                to="/notice"
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-pink-500 text-white" : "text-gray-600"
                  } flex gap-2 items-center justify-start px-2 py-1 rounded-lg`
                }
              >
                <IoNotifications />
                Notice
              </NavLink>
              <NavLink
                to="/result"
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-pink-500 text-white" : "text-gray-600"
                  } flex gap-2 items-center justify-start px-2 py-1 rounded-lg`
                }
              >
                <RxBarChart />
                Result
              </NavLink>
              <NavLink
                to="/videos"
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-pink-500 text-white" : "text-gray-600"
                  } flex gap-2 items-center justify-start px-2 py-1 rounded-lg`
                }
              >
                <MdOutlineSlowMotionVideo />
                Videos
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
