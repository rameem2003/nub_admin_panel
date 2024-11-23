
export default function AddStudent() {
  return (
    <div>
      <div className="text-2xl font-bold text-center my-5">
        <h1>Add Student</h1>
       </div>
       <div className="card bg-base-100  w-11/12 md:w-6/12 mx-auto shrink-0 shadow-2xl mb-5   ">
       
      <form className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Students Id</span>
          </label>
          <input type="text" placeholder="Student Id" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Students Name</span>
          </label>
          <input type="text" placeholder="Student Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Fathers Name</span>
          </label>
          <input type="text" placeholder="Fathers Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Mothers Name</span>
          </label>
          <input type="text" placeholder="Mothers Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date of Birth</span>
          </label>
          <input type="text" placeholder="Date of Birth" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Blood Group</span>
          </label>
          <input type="text" placeholder="Blood Group" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Present Address</span>
          </label>
          <input type="text" placeholder="Present Address" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Permanent Address</span>
          </label>
          <input type="text" placeholder="Permanent Address" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input type="text" placeholder="Phone Number" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email Address</span>
          </label>
          <input type="text" placeholder="Email" className="input input-bordered" required />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Facebook Profile</span>
          </label>
          <input type="text" placeholder="Facebook Profile URL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Profile Photo</span>
          </label>
          <input type="file" id="photo-upload" name="photo" accept="image/*"/>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary ">Add Student</button>
        </div>
      </form>
    </div>
    </div>
  )
}
