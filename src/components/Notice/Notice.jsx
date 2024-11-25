import axios from "axios";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { MdOutlineNotificationAdd } from "react-icons/md";
import { useSelector } from "react-redux";
import { NavLink, useLoaderData } from "react-router-dom";

export default function Notice() {
  const notices = useSelector((state) => state.allnotices.notices); // get all notice info
  const noticeData = [...notices];
  const [loading, setLoading] = useState(false);
  const [errr, setError] = useState(false);

  // function fot delete notice
  const deleteNotice = async (id) => {
    setLoading(true);
    setError(false);
    try {
      let res = await axios.delete(
        `${import.meta.env.VITE_API_URL}notices/${id}`
      );

      console.log(res);

      setLoading(false);
    } catch (error) {
      console.log(error);

      setLoading(false);
      setError(true);
    }
  };
  return (
    <div>
      <Helmet>
        <title>Notice || Admin Panel</title>
      </Helmet>
      <div className="flex items-center justify-between navbar bg-base-100 px-4 py-2 md:px-5 md:py-3">
        <div className="">
          <h1 className="text-xl font-bold">All Notice</h1>
        </div>
        <label className="input input-bordered input-secondary flex items-center gap-2 mx-2 text-sm">
          <input type="text" className="grow" placeholder="Search Notice" />
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
          <NavLink
            to={"/notice/addNotice"}
            className="flex flex-col items-center gap-1 border-2 border-pink-500 py-1 px-4 rounded-xl hover:bg-pink-500"
          >
            <MdOutlineNotificationAdd className="text-xl" />
            <button className="text-xs font-bold">Add Notice</button>
          </NavLink>
        </div>
      </div>
      <div className="mt-5 h-[60vh] overflow-y-auto">
        {noticeData
          .sort((a, b) => b.noticeTimeString - a.noticeTimeString)
          .map((notice) => (
            <div key={notice.id} className="mt-5">
              <div className=" bg-blue-200 md:mx-10 rounded-xl py-3 flex items-center justify-between mx-5 px-5">
                <div className="">
                  <h1 className=" w-36 md:w-full font-bold">{notice.title}</h1>
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
                  {loading ? (
                    <button className=" mr-5 px-2 py-1 border-2  rounded-2xl bg-gray-500 hover:text-white">
                      Delete
                    </button>
                  ) : (
                    <button
                      onClick={() => deleteNotice(notice.id)}
                      className=" mr-5 px-2 py-1 border-2 border-pink-600 rounded-2xl hover:bg-pink-600 hover:text-white"
                    >
                      Delete
                    </button>
                  )}
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
  );
}
