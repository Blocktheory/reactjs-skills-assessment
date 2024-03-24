import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MDBRadio, MDBCheckbox } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Toaster from "../components/Toaster";
import "./styles/RegistrationForm.css";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [formData, setFormData] = useState(null);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      country: "",
      email: "",
      gender: "",
      toc: false,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(
          /^[a-zA-Z]+( [a-zA-Z]+)*$/,
          "Name should not start with a number"
        )
        .required("First Name is required"),
      description: Yup.string()
        .min(3, "Description must be at least 3 characters long")
        .required("Description is required"),
      country: Yup.string()
        .oneOf(["USA", "India", "UK", "Germany"], "Country Not Found")
        .required("Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      gender: Yup.string(),
      toc: Yup.boolean().oneOf([true], "Please accept the terms of service"),
    }),

    onSubmit: async (values) => {
      try {
        console.log("Form values:", values);
        const data = JSON.parse(localStorage.getItem("FormData")) || [];
        data.push(values);
        localStorage.setItem("FormData", JSON.stringify(data));
        console.log("Form data stored successfully:", data);
        Toaster.success("User registered successfully.");
        formik.resetForm();
        setFormData(values);
        await new Promise((resolve) => setTimeout(resolve, 2000)); // to wait for toaster message
        navigate("/login");
      } catch (error) {
        console.error("Error:", error);
        Toaster.error("User registration failed");
      }
    },
  });
  // console.log(formData);
  return (
    <div className="reg-container">
      <div className="main">
        <div className="image-cont"></div>
        <div className="form-cont">
          <div className="header-cont">
            <h2>Create an account</h2>
            <form className="form" onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <div className="input-box">
                  <input
                  id="name"
                    type="text"
                    placeholder="What should we call you?"
                    {...formik.getFieldProps("name")}
                  />
                </div>
              </div>
              {formik.touched.name && formik.errors.name ? (
                <div className="error-text">{formik.errors.name}</div>
              ) : null}
              <div className="form-group">
                <label htmlFor="about">About yourself</label>
                <div className="input-box">
                  <input
                    id="about"
                    type="text"
                    placeholder="Describe in brief"
                    {...formik.getFieldProps("description")}
                  />
                </div>
              </div>
              {formik.touched.description && formik.errors.description ? (
                <div className="error-text">{formik.errors.description}</div>
              ) : null}
              <div className="form-group">
                <label htmlFor="country">Country</label>
                <div className="input-box">
                  <select
                    id="country"
                    name="country"
                    {...formik.getFieldProps("country")}
                  >
                    <option value="" disabled>
                      Select Country
                    </option>
                    <option value="USA">United States</option>
                    <option value="India">India</option>
                    <option value="UK">United Kingdom</option>
                    <option value="Germany">Germany</option>
                  </select>
                </div>
              </div>
              {formik.touched.country && formik.errors.country ? (
                <div className="error-text">{formik.errors.country}</div>
              ) : null}
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="input-box">
                  <input
                    id="email"
                    type="text"
                    placeholder="you@domain.com"
                    {...formik.getFieldProps("email")}
                  />
                </div>
              </div>
              {formik.touched.email && formik.errors.email ? (
                <div className="error-text">{formik.errors.email}</div>
              ) : null}
              <div className="gender-group">
                <label htmlFor="gender">Gender</label>
                <div className="gender-input-box" id="gender">
                  <div className="input-frame">
                    <MDBRadio
                      name="gender"
                      id="maleRadio"
                      value="Male"
                      label="Male"
                      inline
                      onChange={() => formik.setFieldValue("gender", "Male")}
                      checked={formik.values.gender === "Male"}
                    />
                  </div>
                  <div className="input-frame">
                    <MDBRadio
                      name="gender"
                      id="femaleRadio"
                      value="Female"
                      label="Female"
                      inline
                      onChange={() => formik.setFieldValue("gender", "Female")}
                      checked={formik.values.gender === "Female"}
                    />
                  </div>
                </div>
              </div>
              {formik.touched.gender && formik.errors.gender ? (
                <div className="error-text">{formik.errors.gender}</div>
              ) : null}
              <div className="profile-form-group">
                <label htmlFor="profile">Profile Pic</label>
                <div className="profile-input-box" id="profile">
                  <div className="profile-frame">
                    <p>
                      <span>+</span>Upload Pic
                    </p>
                  </div>
                </div>
              </div>
              <div className="checkbox">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="I agree to terms and conditions"
                  {...formik.getFieldProps("toc")}
                />
              </div>
              {formik.touched.toc && formik.errors.toc ? (
                <div className="error-text">{formik.errors.toc}</div>
              ) : null}
              <button className="fullWidthBtn" type="submit">
                Create Account
              </button>
              <div className="text-center">
                <p>
                  Already a member?{" "}
                  <a
                    href="#!"
                    className="text-decoration-none"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Log in
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster/>
    </div>
  );
};

export default RegistrationForm;
