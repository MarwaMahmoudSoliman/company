
function AddUsers() {

  return (
    <div className="bg-white   me-3 mt-4 pt-5 pb-5 shadow-sm conform ">
    <h4>add new user</h4>
  <hr  className="text-secondary opacity-25 shadow-sm"/>
  <div className=" col-lg-7 p-4 border  form shadow-sm  col-sm-12 ">
    <label  className="form-label">user email</label>
    
      <input type="email" className="form-control  mb-3 shadow-sm" placeholder="example@email.com"/>
    
    <label  className="form-label">user name</label>
    <input type="text" className="form-control shadow-sm" placeholder="type unique username" required=""/>
    <div className="d-flex justify-content-between  mb-4  mt-3">
      <div className="col-5 ">
        <label  className="form-label ">password</label>
        <input type="password" className="form-control shadow-sm " placeholder="***********"/> 
      </div>
      <div className="col-5 ">
        <label  className="form-label">repeat password</label>
        <input type="password" className="form-control shadow-sm " placeholder="***********" />
      </div>
    </div>
    <button type="button" className=" px-5 bt">create user</button>
  </div>

  </div>  )
}

export default AddUsers