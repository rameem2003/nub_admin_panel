import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function AddTeacher() {
  const navigate = useNavigate();
  // all states
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [department, setDepartment] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errr, setError] = useState(false);

  // function for add teacher
  const addTeacher = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    let newTeacher = {
      id: uuidv4(),
      name,
      designation,
      image,
      department,
      email,
      phone,
      createTimeStamp: new Date().toLocaleString(),
      createTimeString: Date.now(),
    };
    try {
      let res = await axios.post(
        `${import.meta.env.VITE_API_URL}teachers`,
        newTeacher,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
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

  return (
    <div>
      <div className="text-2xl font-bold text-center my-5">
        <h1>Add Teacher</h1>
      </div>
      <div className="card bg-base-100  w-11/12 md:w-6/12 mx-auto shrink-0 shadow-2xl mb-5   ">
        <form className="card-body" onSubmit={addTeacher}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Teachers Name</span>
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Teachers Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Designation</span>
            </label>
            <input
              onChange={(e) => setDesignation(e.target.value)}
              type="text"
              placeholder="Designation"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Department Name</span>
            </label>
            <input
              onChange={(e) => setDepartment(e.target.value)}
              type="text"
              placeholder="Department Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              placeholder="Phone Number"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Profile Photo Link</span>
            </label>
            <input
              onChange={(e) => setImage(e.target.value)}
              type="text"
              placeholder="Profile Photo Link"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control mt-6">
            {loading ? (
              <button className="btn bg-gray-400 pointer-events-none">
                Add Teacher
              </button>
            ) : (
              <button className="btn btn-primary">Add Teacher</button>
            )}

            {errr && (
              <p className=" text-xl text-red-500 font-bold">
                Something Went Wrong
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTeacher;
