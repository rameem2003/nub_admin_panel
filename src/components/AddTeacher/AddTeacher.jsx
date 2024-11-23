
export default function AddTeacher() {
    return (
      <div>
        <div className="text-2xl font-bold text-center my-5">
          <h1>Add Teacher</h1>
         </div>
         <div className="card bg-base-100  w-11/12 md:w-6/12 mx-auto shrink-0 shadow-2xl mb-5   ">
         
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Teachers Name</span>
            </label>
            <input type="text" placeholder="Teachers Name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Sirname</span>
            </label>
            <input type="text" placeholder="Sirname" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Department Name</span>
            </label>
            <input type="text" placeholder="Department Name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input type="text" placeholder="Phone Number" className="input input-bordered" required />
          </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text">Profile Photo</span>
          </label>
          <input type="file" id="photo-upload" name="photo" accept="image/*"/>
        </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary ">Add Teacher</button>
          </div>
        </form>
      </div>
      </div>
    )
  }
  