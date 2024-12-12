import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function AddNotice() {
  const navigate = useNavigate(); // navigation instance
  const teachers = useSelector((state) => state.allteachers.teachers); // get all students info
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [noticeBy, setNoticeBy] = useState("");
  const [pdf, setPdf] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errr, setError] = useState(false);

  // function for add notice
  const addNotice = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const formData = new FormData();

      formData.append("id", uuidv4());
      formData.append("title", title);
      formData.append("description", description);
      formData.append("noticeBy", noticeBy);
      formData.append("thumb", "https://convocation.nub.ac.bd/CampusImage.png");
      formData.append("pdf", pdf);
      formData.append("noticeTimeStamp", new Date().toLocaleString());
      formData.append("noticeTimeString", Date.now());
      let res = await axios.post(
        `${import.meta.env.VITE_API_URL}notices`,
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
        <h1>Add Notice</h1>
      </div>
      <div className="card bg-base-100  w-11/12 md:w-6/12 mx-auto shrink-0 shadow-2xl mb-5   ">
        <form className="card-body" onSubmit={addNotice}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Title"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              className="textarea textarea-bordered h-24"
              placeholder="Description"
            ></textarea>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Notice Provided By</span>
            </label>

            <select
              name=""
              id=""
              onChange={(e) => setNoticeBy(e.target.value)}
              className="input input-bordered"
              required
            >
              <option value="Admin">Admin</option>
              {teachers.map((t, i) => (
                <option
                  key={i}
                  value={`${t.name} (${t.designation} - ${t.department})`}
                >
                  {t.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">PDF</span>
            </label>
            <input
              onChange={(e) => setPdf(e.target.files[0])}
              type="file"
              id="photo-upload"
              name="pdf"
              accept="pdf"
            />
          </div>

          <div className="form-control mt-6">
            {loading ? (
              <button className="btn  bg-gray-500 pointer-events-none ">
                Add Notice
              </button>
            ) : (
              <button className="btn btn-primary ">Add Notice</button>
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
