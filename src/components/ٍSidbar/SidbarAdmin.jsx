import { NavLink } from "react-router-dom";

const SidbarAdmin = () => {
  return (
    <>
    
    <div className="d-none col-3  overflow-hidden d-lg-block">
    <div className=" sidbarAdmin">
    <div
    className="col-11 mx-auto pt-2 text-white"
    style={{ backgroundColor: "#0062FF", borderRadius: "0 0 15px 15px" }}
      >
      <h1 className="fs-2 py-5 ms-4 mb-3">Dashboard</h1>

      <div className="mt-2 mb-3 d-flex flex-column ms-4">
      <h1 className="my-1  fs-2">
      <h2  className="my-1 text-decoration-none text-white">
      users
      </h2>
      </h1>
          <NavLink to="/admin" className="text-decoration-none  text-white">
          all users
          </NavLink>
          <NavLink to="/Admin/addUser" className="text-decoration-none text-white">
            add new
          </NavLink>

          <h2 className="my-1  fs-2 mt-2">
            <h2  className=" my-1 text-decoration-none text-white">
            blogs
            </h2>
            </h2>
          <NavLink to="/admin/Allblog" className="text-decoration-none text-white">
            all blogs
            </NavLink>
          <NavLink to="/admin/addBlog" className="text-decoration-none text-white">
            add new
          </NavLink>
          <h2 className="my-1 fs-3">
            <h2  className="my-1 text-decoration-none text-white">
              services
            </h2>
          </h2>
          <NavLink to="/admin/unread" className="text-decoration-none text-white">
            unread
          </NavLink>
          <NavLink to="/admin/ongoing" className="text-decoration-none text-white">
            ongoing
          </NavLink>
          <NavLink to="/admin/Allservices" className="text-decoration-none text-white">
            all services
            </NavLink>

          <h2 className="my-1 fs-3 mt-2">
            <NavLink to="/setting" className="text-decoration-none text-white">
              settings
            </NavLink>
          </h2>
        </div>

        <div>
        <button className="btn btn-dark col-12 py-3 fs-4 mt-3" >Logout</button>
        </div>
      </div>
      </div>
      </div>
      <div className="col-12 d-block d-lg-none">
      <ul className="nav nav-tabs">
  <li className="nav-item">
    <NavLink className="nav-link " aria-current="page" to="/admin">Admin</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link " aria-current="page" to="/admin/user">AllUser</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link " to="/admin/Adduser">ِAdd user</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link " to="/admin/AllServices">Services</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to="/admin/AllBlog">Blogs</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to="/admin/addBlog">Add Blog</NavLink>
  </li>
</ul>
      </div>
      </>
      );
    };
    
    export default SidbarAdmin;
    