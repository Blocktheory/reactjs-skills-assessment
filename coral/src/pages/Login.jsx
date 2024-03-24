import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { useNavigate } from "react-router-dom";
import Toaster from "../components/Toaster";
import "./styles/RegistrationForm.css";

const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),

    onSubmit: async (values) => {
      try {
        const users = JSON.parse(localStorage.getItem("FormData")) || [];
        const findUser = users.find((user) => user.email === values.email);

        if (findUser) {
          Toaster.success("User logged in successfully");
          formik.resetForm();
          await new Promise((resolve) => setTimeout(resolve, 2000));
          navigate("/home");
        } else {
          Toaster.error("Invalid email.");
        }
      } catch (error) {
        console.error("Error:", error);
        Toaster.error("User failed to login");
      }
    },
  });
  return (
    <div className="reg-container">
      <div className="main">
        <div className="image-cont"></div>
        <div className="form-cont">
          <div className="header-cont">
            <h2>Login</h2>
            <form className="form" onSubmit={formik.handleSubmit}>
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

              <button className="fullWidthBtn" type="submit">
                Login
              </button>
              <div className="text-center">
                <p>
                  Not Registered?{" "}
                  <a
                    href="#!"
                    className="text-decoration-none"
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Signup
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

export default Login;
