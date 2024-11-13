import { Helmet } from "react-helmet";
import { RiVideoAddFill } from "react-icons/ri";
import { NavLink, useLoaderData } from "react-router-dom";

export default function Video() {
    const videos = useLoaderData();
    
    return (
        <div>
            <Helmet>
                <title>Videos || Admin Panel</title>
            </Helmet>
            <div className="flex items-center justify-between navbar bg-base-100 px-4 py-2 md:px-5 md:py-3">
                <div>
                    <h1 className="text-xl font-bold">All Videos</h1>
                </div>
                <label className="input input-bordered input-secondary flex items-center gap-2 mx-2 text-sm">
                    <input type="text" className="grow" placeholder="Search video" />
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
                        <RiVideoAddFill className="text-xl" />
                        <button className="text-xs font-bold">Add Video</button>
                    </NavLink>
                </div>
            </div>
            
            <div className="mt-5 h-[60vh] overflow-y-auto">
                {videos.map((video) => (
                    <div key={video.id} className="mt-5">
                        <div className="bg-blue-200 mx-4 sm:mx-6 md:mx-10 rounded-xl py-2 px-4 flex flex-col sm:flex-row items-center sm:items-start sm:justify-between">
                            <div className="w-full sm:w-2/12">
                                <img
                                    className="rounded-lg w-full sm:w-20 sm:h-20"
                                    alt="Video Thumbnail"
                                    src={video.thumbnailUrl}
                                />
                            </div>
                            <div className="text-center sm:text-left mt-3 sm:mt-0 sm:ml-4 flex-grow">
                                <h1 className="font-bold">{video.title}</h1>
                                <p className="text-sm text-gray-700">{video.description}</p>
                                <p className="text-sm text-gray-700 font-bold">
                                    Published date: {video.uploadDate}
                                </p>
                            </div>
                            <div className="mt-3 sm:mt-0">
                                <NavLink>
                                    <button className="px-2 py-1 border-2 border-pink-600 rounded-2xl hover:bg-pink-600 hover:text-white">
                                        View Video
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
