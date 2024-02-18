import { useRef, useState } from "react";
import img from "../assets/upload.png";
import { useDispatch } from "react-redux";
import { createBlog } from "../redux/slice/blogSlice";
import { useNavigate } from "react-router-dom";
function AddBlog() {
  const [formData, setFormData] = useState({
    title: "",
    tags: "",
    categories: "",
    description: "",
    image: null,
  });

  const inputImg = useRef();
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleCreateBlog = async () => {
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("tags", formData.tags);
    formDataToSend.append("categories", formData.categories);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("image", formData.image);
    dispatch(createBlog(formDataToSend))
      .unwrap()
      .then(navigation("/admin/AllBlog"));
  };

  return (
    <div className="bg-white  px-3 me-3 mt-4 pt-5 pb-5 shadow-sm conform ">
      <h4 className="text-center mb-5">Create a new Blog</h4>
      {/* <hr className="text-secondary opacity-25 shadow-sm mb-5" /> */}
      <div className=" col-lg-7 p-4 border form shadow-sm col-sm-12">
        <div className="d-flex justify-content-between  mb-4  mt-3">
          <div className="col-6 ">
            <label className="form-label ">title</label>
            <input
              type="text"
              className="form-control shadow-sm "
              placeholder="your blog title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-5 ">
            <label className="form-label">Tags</label>
            <input
              type="text"
              className="form-control shadow-sm "
              placeholder="enter tags"
              name="tags"
              value={formData.tags}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="d-flex justify-content-between  mb-4  mt-3">
          <div className="col-6  ">
            <label className="form-label ">Upload</label>
            <input
              type="file"
              className="form-control shadow-sm d-none "
              ref={inputImg}
              placeholder=""
              onChange={handleImageChange}
            />
            <div
              className="border rounded text-center w-100"
              style={{ cursor: "pointer" }}
              onClick={() => inputImg.current.click()}
            >
              <img src={img} className="w-50 " alt="..." />
            </div>
          </div>
          <div className="col-5 ">
            <label className="form-label">Categories</label>
            <input
              type="text"
              className="form-control shadow-sm "
              placeholder="enter categories"
              name="categories"
              value={formData.categories}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <label className="form-label">Write down your blog</label>
        <textarea
          className="form-control mb-3  shadow-sm"
          rows={6}
          placeholder="write your blog description..."
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
        <div className=" text-end">
          <button type="button" className="px-5 bt" onClick={handleCreateBlog}>
            create user
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddBlog;
