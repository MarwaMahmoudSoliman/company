import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteBlog } from "../redux/slice/blogSlice";

const BlogAdmin = ({ blog }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteBlog(blog._id));
    window.location.reload();
  };

  const baseURL = "http://localhost:4000/uploads";

  return (
    <div className="col-12 rounded-4 border border-primary p-4">
      <img
        src={`${baseURL}/${blog?.image}`}
        alt=""
        className="w-100 rounded-4"
      />
      <h4 className="my-3">{blog.title}</h4>
      <h6>{blog.description}</h6>
      <Link
        to={`/DetailsBlogs/${blog._id}`}
        className="text-dark h5 mt-3 d-block"
      >
        Read more
      </Link>
      <div className="text-end">
        <Link to={"/admin/Addblog"} className="btn fs-3 mx-2">
          Edit
        </Link>
        <button className="text-danger btn fs-3 mx-2" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogAdmin;
