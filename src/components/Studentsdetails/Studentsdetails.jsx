import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";

export default function Studentsdetails() {
  const { id } = useParams(); // get params
  const [stddata, setStddata] = useState({}); // store the data

  /**
   * Fetch single student data
   */
  const fetchSingleStudentdata = async () => {
    let res = await axios.get(`${import.meta.env.VITE_API_URL}students/${id}`);
    setStddata(res.data);
    console.log(res);
  };

  /**
   * Delete the student
   */

  const deleteStudent = async () => {
    Swal.fire({
      icon: "question",
      title: "Do you want to delete?",
      showCancelButton: true,
      confirmButtonText: "Yes",
      confirmButtonColor: "red",
      cancelButtonText: "Cancel",
      cancelButtonColor: "green",
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        try {
          let res = await axios.delete(
            `${import.meta.env.VITE_API_URL}students/${stddata.id}`
          );

          console.log(res);

          Swal.fire({
            icon: "success",
            title: "Delete Successful",
            // text: "Something went wrong!",
          });
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      } else {
        Swal.fire("Cancel", "", "info");
      }
    });
  };

  useEffect(() => {
    fetchSingleStudentdata();
  }, []);

  return (
    <div>
      <div className="bg-white flex flex-col items-center justify-center">
        <div className="my-5">
          <h1 className="text-4xl font-bold">Student Details</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-5 items-center justify-center bg-gray-100 p-5 rounded-2xl mb-8">
          <div className=" ">
            <img
              className="w-44 rounded-2xl"
              src={stddata.studentImage}
              alt=""
            />
          </div>
          <div className="">
            <h1 className="text-xl font-bold">Name: {stddata.studentName}</h1>
            <p>Student Id: {stddata.id}</p>
            <p>Fathers Name: {stddata.fathersName}</p>
            <p>Mothers Name: {stddata.mothersName}</p>
            <p>Date of Birth: {stddata.dob}</p>
            <p>Blood Group: {stddata.bloodGroup}</p>
            <p>Present Address: {stddata.address}</p>

            <p>Phone No: {stddata.phone}</p>
            <p>E-mail: {stddata.email}</p>
            <p className="mb-1">Reach Me:-</p>
            <Link to={stddata.facebook} target="blank">
              <button className="px-2  rounded-2xl border-2 bg-blue-600 text-gray-100 flex items-center gap-2">
                Facebook <FaFacebook />
              </button>
            </Link>
            <hr className="my-5"></hr>
            <div className=" flex gap-5">
              <button className="btn btn-success">Edit</button>
              <button onClick={deleteStudent} className="btn btn-error">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
