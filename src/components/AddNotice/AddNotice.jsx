
export default function AddNotice() {
  return (
    <div>
    <div className="text-2xl font-bold text-center my-5">
      <h1>Add Notice</h1>
     </div>
     <div className="card bg-base-100  w-11/12 md:w-6/12 mx-auto shrink-0 shadow-2xl mb-5   ">
     
    <form className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Title</span>
        </label>
        <input type="text" placeholder="Title" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Subject</span>
        </label>
        <input type="text" placeholder="Subject" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Teachers Name</span>
        </label>
        <input type="text" placeholder="Teachers Name" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Published Date</span>
        </label>
        <input type="text" placeholder="Published Date" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Due Date</span>
        </label>
        <input type="text" placeholder="Due Date" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <textarea className="textarea textarea-bordered h-24" placeholder="Description"></textarea>
      </div>
      
      <div className="form-control mt-6">
        <button className="btn btn-primary ">Add Notice</button>
      </div>
    </form>
  </div>
  </div>
  )
}
