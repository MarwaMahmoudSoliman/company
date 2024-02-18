import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

const Address = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      streetName: "",
      streetNumber: "",
      city: "",
      country: "",
    },
    onSubmit: handleSubmit,
  });

  return (
    <div
      className="col-12 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#0062ff30", minHeight: "100vh" }}
    >
      <form
        className="col-9 overflow-hidden pb-3 mt-2"
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
            <Link
              to="/Setting"
              className="text-decoration-none h2 col-lg-6 col-12 py-2"
              style={{ color: "#223263" }}
            >
              About
            </Link>
            <h2
              className="col-lg-6 col-12 text-white py-2"
              style={{ backgroundColor: "#223263" }}
            >
              Address
            </h2>
          </div>

          <h4 className="info-text text-center py-1 h41">
            {" "}
            Are you living in a nice area ?
          </h4>

          <div
            className="col-12 d-flex justify-content-center flex-wrap mt-3"
            id="address"
          >
            <div className="col-sm-7 col-sm-offset-1">
              <div className="form-group">
                <label className="fw-bold my-2 ms-2">Street Name</label>
                <div className="px-1 position-relative">
                  <FontAwesomeIcon
                    className="fs-5 position-absolute inp-name"
                    icon={faEnvelope}
                  />
                  <input
                    type="text"
                    className="form-control py-2 ps-5  fw-bold"
                    placeholder="Street Name"
                    style={{ color: "#9098b1", border: "1px solid #9098b1" }}
                    name="streetName"
                    value={formik.values.streetName}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label className="fw-bold my-2 ms-2">Street Number</label>
                <div className="px-1 position-relative">
                  <FontAwesomeIcon
                    className="fs-5 position-absolute inp-name"
                    icon={faEnvelope}
                  />
                  <input
                    type="text"
                    className="form-control py-2 ps-5  fw-bold"
                    style={{ color: "#9098b1", border: "1px solid #9098b1" }}
                    placeholder="Street Number"
                    name="streetNumber"
                    value={formik.values.streetNumber}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-5 col-sm-offset-1">
              <div className="form-group">
                <label className="fw-bold my-2 ms-2">City</label>
                <div className="px-1 position-relative">
                  <FontAwesomeIcon
                    className="fs-5 position-absolute inp-name"
                    icon={faEnvelope}
                  />

                  <input
                    type="text"
                    className="form-control py-2 ps-5  fw-bold"
                    placeholder="City"
                    style={{ color: "#9098b1", border: "1px solid #9098b1" }}
                    name="city"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-9 col-sm-5">
              <div className="form-group">
                <label className="fw-bold my-2 ms-2">Country</label>
                <br />
                <div className="px-1 position-relative">
                  <FontAwesomeIcon
                    className="fs-5 position-absolute inp-name"
                    icon={faEnvelope}
                  />
                  <select
                    name="country"
                    className="form-control py-2 ps-5  fw-bold"
                    style={{ color: "#9098b1", border: "1px solid #9098b1" }}
                    value={formik.values.country}
                    onChange={formik.handleChange}
                  >
                    <option value="Afghanistan"> Afghanistan </option>
                    <option value="Albania"> Albania </option>
                    <option value="Algeria"> Algeria </option>
                    <option value="American Samoa"> American Samoa </option>
                    <option value="Andorra"> Andorra </option>
                    <option value="Angola"> Angola </option>
                    <option value="Anguilla"> Anguilla </option>
                    <option value="Antarctica"> Antarctica </option>
                    <option value="...">...</option>
                  </select>
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
              Finish
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Address;