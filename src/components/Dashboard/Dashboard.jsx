import { Helmet } from "react-helmet";
import { GiTeacher } from "react-icons/gi";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Dashboard() {
  const students = useSelector((state) => state.allstudents.students); // get all students info
  const teachers = useSelector((state) => state.allteachers.teachers); // get all students info
  const notices = useSelector((state) => state.allnotices.notices); // get all notice info
  const noticeData = [...notices];
  return (
    <div className="">
      <Helmet>
        <title>Dashboard || Admin Panel</title>
      </Helmet>
      <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-5 p-5">
        <div className="bg-blue-400 rounded-lg">
          <div className="m-3 flex flex-col items-center">
            <PiStudentFill className="text-4xl" />
            <h1 className=" font-bold">Total Students</h1>
            <p className="text-xl font-bold">
              {students?.length ? students.length : "0"}
            </p>
          </div>
        </div>
        <div className="bg-red-200 rounded-lg">
          <div className="m-3 flex flex-col items-center">
            <GiTeacher className="text-4xl" />
            <h1 className=" font-bold">Total Teachers</h1>
            <p className=" text-xl font-bold">
              {teachers?.length ? teachers.length : "0"}
            </p>
          </div>
        </div>
        <div className="bg-blue-300 rounded-lg">
          <div className="m-3 flex flex-col items-center">
            <IoNotifications className="text-4xl" />
            <h1 className=" font-bold">Total Notice</h1>
            <p className="text-xl font-bold">
              {notices?.length ? notices.length : "0"}
            </p>
          </div>
        </div>
        <div className="bg-red-300 rounded-lg">
          <div className="m-3 flex flex-col items-center">
            <MdOutlineSlowMotionVideo className="text-4xl" />
            <h1 className=" font-bold">Total Videos</h1>
            <p className="text-xl font-bold">45</p>
          </div>
        </div>
      </div>
      <div className="bg-white py-6  mx-5 rounded-2xl">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Recent Annoucement</h1>
        </div>
        <div>
          {" "}
          {noticeData
            .sort((a, b) => b.noticeTimeString - a.noticeTimeString)
            .map((notice) => (
              <div key={notice.id} className="mt-5">
                <div className=" bg-blue-200 md:mx-10 rounded-xl py-3 flex items-center justify-between mx-5 px-5">
                  <div className="">
                    <h1 className=" w-36 md:w-full font-bold">
                      {notice.title}
                    </h1>
                    <p className="text-sm text-gray-700">
                      Published date: {notice.noticeTimeStamp}
                    </p>
                  </div>
                  <div className="">
                    <a
                      target="_blank"
                      href={notice.pdf}
                      className=" mr-5 px-2 py-1 border-2 border-pink-600 rounded-2xl hover:bg-pink-600 hover:text-white"
                    >
                      PDF
                    </a>

                    <NavLink>
                      <button className=" px-2 py-1 border-2 border-pink-600 rounded-2xl hover:bg-pink-600 hover:text-white">
                        View Details
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
