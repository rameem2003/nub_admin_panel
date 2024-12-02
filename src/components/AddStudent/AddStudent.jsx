import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddStudent() {
  const navigate = useNavigate();
  const [studentName, setStudentName] = useState("");
  const [status, setStatus] = useState(true);
  const [isCr, setCR] = useState(false);
  const [gender, setGender] = useState("male");
  const [department, setDepartment] = useState("");
  const [program, setProgram] = useState("");
  const [id, setID] = useState("");
  const [studentImage, setstudentImage] = useState(null);
  const [fathersName, setFathersName] = useState("");
  const [mothersName, setMothersName] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [facebook, setFacebook] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errr, setError] = useState(false);

  console.log(studentImage);

  const addstudent = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const formData = new FormData();

      formData.append("studentName", studentName);
      formData.append("status", status);
      formData.append("isCR", isCr);
      formData.append("gender", gender);
      formData.append("department", "CSE");
      formData.append("program", "ECSE");
      formData.append("id", id);
      formData.append("studentImage", studentImage);
      formData.append("fathersName", fathersName);
      formData.append("mothersName", mothersName);
      formData.append("bloodGroup", bloodGroup);
      formData.append("phone", phone);
      formData.append("address", address);
      formData.append("facebook", facebook);
      formData.append("dob", dob);
      formData.append("email", email);

      let res = await axios.post(
        `${import.meta.env.VITE_API_URL}students`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(res);

      setLoading(false);
      navigate("/");
    } catch (error) {
      console.log(error);

      setLoading(false);
      setError(true);
    }
  };

  return (
    <div>
      <div className="text-2xl font-bold text-center my-5">
        <h1>Add Student</h1>
      </div>
      <div className="card bg-base-100  w-11/12 md:w-6/12 mx-auto shrink-0 shadow-2xl mb-5   ">
        <form className="card-body" onSubmit={addstudent}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Students Id</span>
            </label>
            <input
              onChange={(e) => setID(parseInt(e.target.value))}
              value={id}
              type="text"
              placeholder="Student Id"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Students is CR?</span>
            </label>

            <select
              name=""
              id=""
              onChange={(e) => setCR(e.target.value)}
              className="input input-bordered"
              required
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Students Name</span>
            </label>
            <input
              onChange={(e) => setStudentName(e.target.value)}
              value={studentName}
              type="text"
              placeholder="Student Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Gender</span>
            </label>
            <select
              name=""
              id=""
              onChange={(e) => setGender(e.target.value)}
              className="input input-bordered"
              required
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Fathers Name</span>
            </label>
            <input
              type="text"
              onChange={(e) => setFathersName(e.target.value)}
              value={fathersName}
              placeholder="Fathers Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Mothers Name</span>
            </label>
            <input
              type="text"
              onChange={(e) => setMothersName(e.target.value)}
              value={mothersName}
              placeholder="Mothers Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date of Birth</span>
            </label>
            <input
              onChange={(e) => setDob(e.target.value)}
              value={dob}
              type="date"
              placeholder="Date of Birth"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Blood Group</span>
            </label>
            <input
              onChange={(e) => setBloodGroup(e.target.value)}
              value={bloodGroup}
              type="text"
              placeholder="Blood Group"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Present Address</span>
            </label>
            <input
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              type="text"
              placeholder="Present Address"
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
              value={phone}
              type="text"
              placeholder="Phone Number"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Facebook Profile</span>
            </label>
            <input
              onChange={(e) => setFacebook(e.target.value)}
              value={facebook}
              type="text"
              placeholder="Facebook Profile URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Profile Photo</span>
            </label>
            <input
              onChange={(e) => setstudentImage(e.target.files[0])}
              type="file"
              id="photo-upload"
              name="studentImage"
              accept="image/jpg"
            />
          </div>
          <div className="form-control mt-6">
            {loading ? (
              <button className="btn  bg-gray-500 pointer-events-none ">
                Add Student
              </button>
            ) : (
              <button className="btn btn-primary ">Add Student</button>
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
