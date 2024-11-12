import { NavLink, useLoaderData } from "react-router-dom";
import { MdPersonAddAlt1 } from "react-icons/md";
export default function Students() {
  const studentData = useLoaderData();
  console.log(studentData);

  return (
    <div>
      <div className="">
        <div className="flex items-center justify-between navbar bg-base-100 md:px-5">
          <div className="">
            <h1 className="text-xl font-bold">Students Info</h1>
          </div>
          <label className="input input-bordered input-secondary flex items-center gap-2">
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
            <NavLink className={`flex flex-col items-center gap-1 border-2 border-pink-500 py-1 px-4 rounded-xl`}>
                <MdPersonAddAlt1 className="text-xl"></MdPersonAddAlt1>
                <button className="text-xs font-bold">Add Student</button>
            </NavLink>
          </div>
        </div>
        
        <div className="mt-5 h-[60vh] overflow-y-auto"> {/* Fixed height and scrolling */}
          {studentData.map((student) => (
            <div key={student.id} className="mt-5">
              <div className="bg-blue-200 md:mx-10 rounded-xl py-3 flex items-center justify-between px-5">
                <div>
                  <img
                    className="rounded-full w-10 h-10"
                    alt="Student Avatar"
                    src={student.image}
                  />
                </div>
                <div>
                  <h1 className="font-bold">{student.name}</h1>
                  <p className="text-sm text-gray-700">Std ID: {student.stdId}</p>
                </div>
                <div>
                  <NavLink>
                    <button className="px-2 py-1 border-2 border-pink-600 rounded-2xl hover:bg-pink-600 hover:text-white">
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
