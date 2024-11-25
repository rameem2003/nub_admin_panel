import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

export default function TeachersDetails() {
  const navigate = useNavigate();
  const { id } = useParams(); // get params
  const [teacherdata, setTeacherdata] = useState({}); // store the data
  const [loading, setLoading] = useState(false);
  const [errr, setError] = useState(false);

  /**
   * Fetch single student data
   */
  const fetchSingleTeacherdata = async () => {
    let res = await axios.get(`${import.meta.env.VITE_API_URL}teachers/${id}`);
    setTeacherdata(res.data);
    console.log(res);
  };

  // fucntion for delete the teacher
  const deleteTeacher = async () => {
    setLoading(true);
    setError(false);
    try {
      let res = await axios.delete(
        `${import.meta.env.VITE_API_URL}teachers/${id}`
      );

      console.log(res);

      setLoading(false);
      navigate("/teachers");
    } catch (error) {
      console.log(error);

      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchSingleTeacherdata();
  }, []);

  const { name, designation, department, phone, image } = teacherdata;
  return (
    <div>
      <div className="bg-white flex flex-col items-center justify-center">
        <div className="my-5">
          <h1 className="text-4xl font-bold">Teacher Details</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-5 items-center justify-center bg-gray-100 p-5 rounded-2xl mb-8">
          <div className=" ">
            <img className="w-60 md:w-44 rounded-2xl" src={image} alt="" />
          </div>
          <div className="">
            <h1 className="text-xl font-bold">Name: {name}</h1>
            <p>{designation}</p>
            <p>Department of {department}</p>
            <p>Phone No:- {phone}</p>
            <hr className="my-5"></hr>
            <div className=" flex gap-5">
              <button className="btn btn-success">Edit</button>
              {loading ? (
                <button className="btn bg-gray-500 pointer-events-none">
                  Delete
                </button>
              ) : (
                <button onClick={deleteTeacher} className="btn btn-error">
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>

        {errr && (
          <p className=" text-xl text-red-500 font-bold">
            Something Went Wrong
          </p>
        )}
      </div>
    </div>
  );
}
