import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Toaster from "../components/Toaster";
import "./styles/RegistrationForm.css";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [formData, setFormData] = useState(null);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .matches(/^[a-zA-Z]+$/, "First Name should not start with a number")
        .required("First Name is required"),
      lastName: Yup.string()
        .matches(/^[a-zA-Z]+$/, "Last Name should not start with a number")
        .required("Last Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(5, "Password must be at least 5 characters")
        .required("Password is required"),
    }),

    onSubmit: async (values) => {
      try {
        const data = JSON.parse(localStorage.getItem("FormData")) || [];
        data.push(values);
        localStorage.setItem("FormData", JSON.stringify(data));
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

  return (
    <MDBContainer className="">
      <MDBRow className="overflowFix justify-content-center align-items-center m-5 m-md-2 m-sm-0">
        <MDBCard className="background regContainer">
          <MDBCardBody className="px-4">
            <h3
              style={{ color: "#0468aa" }}
              className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5 text-center   "
            >
              Registration Form
            </h3>

            <form onSubmit={formik.handleSubmit}>
              <MDBRow>
                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="First Name"
                    size="lg"
                    id="firstName"
                    type="text"
                    {...formik.getFieldProps("firstName")}
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="error-text">{formik.errors.firstName}</div>
                  ) : null}
                </MDBCol>
                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Last Name"
                    size="lg"
                    id="lastName"
                    type="text"
                    {...formik.getFieldProps("lastName")}
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <div className="error-text">{formik.errors.lastName}</div>
                  ) : null}
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email"
                    size="lg"
                    id="email"
                    type="email"
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="error-text">{formik.errors.email}</div>
                  ) : null}
                </MDBCol>
                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    size="lg"
                    id="password"
                    type="password"
                    {...formik.getFieldProps("password")}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="error-text">{formik.errors.password}</div>
                  ) : null}
                </MDBCol>
              </MDBRow>
              <MDBBtn className="mb-4 fullWidthBtn" size="lg" type="submit">
                Submit
              </MDBBtn>
            </form>
          </MDBCardBody>
          <div className="text-center">
            <p>
              Already Registered?{" "}
              <a
                href="#!"
                className="text-decoration-none"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </a>
            </p>
          </div>
        </MDBCard>
      </MDBRow>
      <Toaster />
    </MDBContainer>
  );
};

export default RegistrationForm;
