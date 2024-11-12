import { GiTeacher } from "react-icons/gi";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";

export default function Dashboard() {
  return (
    <div className="">
      <div className="flex items-center justify-between text-xl font-bold px-8 py-5 bg-gray-300">
        <h1>Welcome To NUBian!</h1>
        <h1>Dashboard</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-5 p-5">
        <div className="bg-blue-400 rounded-lg">
          <div className="m-3 flex flex-col items-center">
          <PiStudentFill className="text-4xl"/>
            <h1 className=" font-bold">Total Students</h1>
            <p className="text-xl font-bold">45</p>
          </div>
        </div>
        <div className="bg-red-200 rounded-lg">
          <div className="m-3 flex flex-col items-center">
          <GiTeacher className="text-4xl"/>
            <h1 className=" font-bold">Total Teachers</h1>
            <p className="text-xl font-bold">45</p>
          </div>
        </div>
        <div className="bg-blue-300 rounded-lg">
        <div className="m-3 flex flex-col items-center">
          <IoNotifications className="text-4xl"/>
            <h1 className=" font-bold">Total Notice</h1>
            <p className="text-xl font-bold">45</p>
          </div> 
        </div>
        <div className="bg-red-300 rounded-lg">
        <div className="m-3 flex flex-col items-center">
          <MdOutlineSlowMotionVideo className="text-4xl"/>
            <h1 className=" font-bold">Total Videos</h1>
            <p className="text-xl font-bold">45</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}
