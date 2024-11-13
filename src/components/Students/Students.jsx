import { NavLink, useLoaderData } from "react-router-dom";
import { MdPersonAddAlt1 } from "react-icons/md";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

export default function Students() {
  const students = useSelector((state) => state.allstudents.students); // get all students info
  const studentData = [...students];
  return (
    <div>
      <Helmet>
        <title>Student Info || Admin Panel</title>
      </Helmet>
      <div className="">
        <div className="flex items-center justify-between navbar bg-base-100 px-4 py-2 md:px-5 md:py-3">
          <div className="">
            <h1 className="text-xl font-bold">Students Info</h1>
          </div>
          <label className="input input-bordered input-secondary flex items-center gap-2 mx-2 text-sm">
            <input type="text" className="grow" placeholder="Search By Id" />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </label>
          <div>
            <NavLink className="flex flex-col items-center gap-1 border-2 border-pink-500 py-1 px-4 rounded-xl">
              <MdPersonAddAlt1 className="text-xl" />
              <button className="text-xs font-bold">Add Student</button>
            </NavLink>
          </div>
        </div>

        <div className="mt-5 h-[60vh] overflow-y-auto">
          {studentData
            .sort((a, b) => a.id - b.id)
            .map((student) => (
              <div key={student.id} className="mt-5">
                <div className="bg-blue-200 mx-4 sm:mx-6 md:mx-10 rounded-xl py-3 flex flex-col sm:flex-row items-center justify-between px-4 sm:px-5">
                  <div>
                    <img
                      className="rounded-full w-12 h-12 sm:w-10 sm:h-10"
                      alt="Student Avatar"
                      src={student.studentImage}
                    />
                  </div>
                  <div className="text-center sm:text-left mt-3 sm:mt-0">
                    <h1 className="font-bold">{student.studentName}</h1>
                    <p className="text-sm text-gray-700">
                      Std ID: {student.id}
                    </p>
                  </div>
                  <div>
                    <NavLink to={`/stddetails/${student.id}`}>
                      <button className="px-2 py-1 border-2 border-pink-600 rounded-2xl hover:bg-pink-600 hover:text-white mt-3 sm:mt-0">
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
