import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function LogIn() {
  const [show, setShow] = useState(false);






  return (
    <div>
      <div
        className="min-h-screen flex items-center justify-center my-3"
        data-aos="fade-up"
      >
        <div
          className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10"
          data-aos="zoom-in"
        >
          <h2
            className="text-2xl font-semibold text-center"
            data-aos="fade-down"
          >
            Login To Admin Panel!
          </h2>
          <form
            
            className="card-body"
            data-aos="fade-right"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                data-aos="fade-up"
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type={show ? "text" : "password"}
                placeholder="password"
                className="input input-bordered"
                required
                data-aos="fade-up"
                data-aos-delay="200"
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="btn btn-xs absolute right-2 top-12 bg-blue-100"
              >
                {show ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-blue-500 text-gray-200 hover:bg-blue-700"
              >
                Login
              </button>
            </div>
          </form>
         
        </div>
      </div>
     
    </div>
  );
}
