import  { useRef, useState } from "react";
import defImg from "../assets/1651607711108 (5).jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

const Setting = () => {
  const imageInput = useRef();
  const [image, setImage] = useState(null);

  const handleSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      phoneNumber: "",
      email: "",
      img: "",
    },
    onSubmit: handleSubmit,
  });

  function imageUplaod() {
    imageInput.current.click();
  }

  function imageDisplay(e) {
    let file = e.target.files[0];
    setImage(file);
  }

  return (
    <div
      className="col-12 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#0062ff30", minHeight: "100vh" }}
    >
      <form
        className="col-9 overflow-hidden pb-3  my-5"
        style={{
          borderRadius: "15px",
          minHeight:"700px",
          backgroundColor: "#F7FAFC",
        }}
        onSubmit={formik.handleSubmit}
      >
        <div className="row mt-5">
          <div className="col-12 text-center my-4">
            <h1 className="fw-blod h41 ">Your Profile</h1>
            <span className="h61">
              This information will let us know more about you
            </span>
          </div>

          <div className="col-12 d-flex text-center flex-wrap">
            <h2
              className="col-lg-6 col-12 text-white py-2"
              style={{ backgroundColor: "#223263" }}
            >
              About
            </h2>
            <Link
              to="/Address"
              className="text-decoration-none h2 col-lg-6 col-12 py-2"
              style={{ color: "#223263" }}
            >
              Address
            </Link>
          </div>

          <h4 className="info-text text-center py-1 h41">
            {" "}
            Let's start with the basic information (with validation)
          </h4>

          <div className="col-12 d-flex justify-content-center flex-wrap mt-3">
            <div className="col-lg-4 col-11 col-sm-offset-1">
              <div className="d-flex flex-column align-items-center">
                <img
                  src={(image && URL.createObjectURL(image)) || defImg}
                  width="200px"
                  alt=""
                  className="border rounded-circle"
                />
                <p className="fw-bold">
                  <Button
                    for="personalPhoto"
                    id="fileLink"
                    className="text-white h41 mt-2 "
                    style={{ cursor: "pointer", backgroundColor: "#223263" }}
                    onClick={imageUplaod}
                  >
                    Change My Profile Picture
                  </Button>
                  <input
                    style={{ display: "none" }}
                    onChange={imageDisplay}
                    type="file"
                    ref={imageInput}
                    id="personalPhoto"
                  />
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-11">
              <div className="form-group">
                <label className="fw-bold my-2">
                  username <span style={{ color: "#FA0000" }}>*</span>
                </label>
                <div className="position-relative">
                  <FontAwesomeIcon
                    className="fs-5 position-absolute inp-name"
                    icon={faUser}
                  />
                  <input
                    name="username"
                    type="text"
                    className="form-control py-2 ps-5  fw-bold"
                    placeholder="username"
                    style={{ color: "#9098b1", border: "1px solid #9098b1" }}
                    value={formik.values.username}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
              <div className="form-group mt-lg-3">
                <label className="fw-bold my-2">
                  Phone Number <span style={{ color: "#FA0000" }}>*</span>
                </label>
                <div className="position-relative">
                  <FontAwesomeIcon
                    className="fs-5 position-absolute inp-name"
                    icon={faPhone}
                  />
                  <input
                    name="phoneNumber"
                    type="text"
                    className="form-control py-2 ps-5  fw-bold"
                    placeholder="phone number"
                    style={{ color: "#9098b1", border: "1px solid #9098b1" }}
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="col-11 col-sm-offset-1 m-auto">
              <div className="form-group">
                <label className="fw-bold my-2">
                  Email <span style={{ color: "#FA0000" }}>*</span>
                </label>
                <div className="position-relative">
                  <FontAwesomeIcon
                    className="fs-5 position-absolute inp-name"
                    icon={faEnvelope}
                  />
                  <input
                    name="email"
                    type="email"
                    className="form-control py-2 ps-5 fw-bold"
                    placeholder="Your Email"
                    style={{ color: "#9098b1", border: "1px solid #9098b1" }}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-3 d-flex justify-content-end">
            <button
              type="submit"
              className="border-0 text-white rounded py-2 px-4 me-4"
              style={{ backgroundColor: "#223263" }}
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Setting;