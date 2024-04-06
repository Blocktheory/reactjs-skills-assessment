import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const AccDetails = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("*Name is required"),
    about: Yup.string().min(20, "*Too Short!").max(200,"*Too Long!").required("*Required"),
    country: Yup.string().required("*country is required"),
    email: Yup.string().email("*Invalid email address").required("*Email is required"),
    gender: Yup.string().required("*Gender is required"),
    picture: Yup.mixed().required("*Profile is required"),
    agree: Yup.boolean().oneOf([true], "*You must agree to the terms and conditions"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      about: "",
      country: "",
      email: "",
      gender: "",
      picture: null,
      agree: false
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
      alert("Form submitted successfully!");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className=" pl-44 ">
      <div className="max-w-sm grid">
      <div className="   mt-5 ">
        <label className="font-semibold text-3xl ml-11"> Create an account</label>
      </div>
      {/* -----------------------------------------Name---------------------------------------- */}
      <div>
        <label htmlFor="name" className="flex text-sm  font-semibold">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="What should we call you?"
   
          className=" appearance-none shadow-md border  w-96 h-10 text-black bg-purple-20 pl-4 mt-0 rounded-xl" 
        />
        {formik.errors.name && formik.touched.name && (
          <div className="text-red-500  text-xs mb-0">{formik.errors.name}</div>
        )}
      </div>
       {/* ------------------------------------------------About------------------------------------ */}
      <div className="  mt-1.5">
        <label htmlFor="about" className="flex text-sm  font-semibold">
          About yourself
        </label>
        <input
          id="about"
          type="text"
          value={formik.values.about}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Describe in brief"
          className="appearance-none shadow-md border w-96 h-10 text-black bg-purple-20 pl-4 mt-0 rounded-xl"
        />
         {formik.errors.about && formik.touched.about && (
          <div className="text-red-500 text-xs">{formik.errors.about}</div>
        )}
      </div>
      {/* ------------------------------------------------------country------------------------------------------- */}
      <div className="mt-2">
        <label htmlFor="country" className="flex text-sm  font-semibold">
          Country
        </label>
        <input
          id="country"
          type="text"
          value={formik.values.country}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Select country"
          className="appearance-none shadow-md border w-96 h-10 text-black bg-purple-20 pl-4 mt-0 rounded-xl"
        />
          {formik.errors.country && formik.touched.country && (
          <div className="text-red-500 text-xs">{formik.errors.country}</div>
        )}
      </div>
      {/* ----------------------------------------------------------Email-------------------------------------- */}
      <div className="mt-2">
        <label htmlFor="email" className="flex text-sm  font-semibold">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="you@domain.com"

          className= "appearance-none shadow-md border w-96 h-10 text-black bg-purple-20 pl-4 mt-0 rounded-xl" 
        />
        {formik.errors.email && formik.touched.email && (
          <div className="text-red-500 text-xs">{formik.errors.email}</div>
        )}
      </div>

      {/* -----------------------------------------------------Gender--------------------------------------------- */}
      <div className="mt-2">
        <label className="flex text-sm  font-semibold">Gender</label>
        <div className="mt-2 flex items-center space-x-4">
          <div className="flex items-center appearance-none shadow-md border  w-24 h-9 text-black  p-3   rounded-xl">
            <input
              id="male"
              type="radio"
              name="gender"
              value="male"
              checked={formik.values.gender === "male"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-radio h-3 w-3 text-blue-500 "
            />
            <label htmlFor="male" className="ml-2">Male</label>
          </div>
          <div className="flex items-center appearance-none shadow-md border  w-24 h-9 text-black  p-3   rounded-xl">
            <input
              id="female"
              type="radio"
              name="gender"
              value="female"
              checked={formik.values.gender === "female"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-radio h-3 w-3 text-blue-500"
            />
            <label htmlFor="female" className="ml-2">Female</label>
          </div>
        </div>
        {formik.errors.gender && formik.touched.gender && (
          <div className="text-red-500">{formik.errors.gender}</div>
        )}
      </div>
      {/* ------------------------------------------------------------ProfilePic-------------------------------------- */}
      <div className=" mt-2">
        <label htmlFor="picture" className=" flex text-sm  font-semibold">
          Profile Pic
        </label>
        <div className=" grid mt-1">
          <input
            id="picture"
            type="file"
            
            onChange={(event) => formik.setFieldValue("picture", event.target.files[0])}
            onBlur={formik.handleBlur}
             className="appearance-none shadow-md border w-20 h-16 text-black bg-purple-20 pl-4 mt-0 rounded-xl"
         
          />
        </div>
        {formik.errors.picture && formik.touched.picture && (
          <div className="text-red-500">{formik.errors.picture}</div>
        )}
      </div>

      {/* --------------------------------------------------Terms and conditions---------------------------------- */}
      <div className="mt-2">
        <label htmlFor="agree" className="flex text-sm  font-semibold">
          <input
            id="agree"
            type="checkbox"
            checked={formik.values.agree}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
         
             className="form-checkbox h-3 w-3 mt-1  text-black" 
              
          />
          <span className="ml-2">I agree to terms and conditions</span>
        </label>
        {formik.errors.agree && formik.touched.agree && (
          <div className="text-red-500 mb-0">{formik.errors.agree}</div>
        )}
      </div>
      {/* ---------------------------------------------Button create account------------------------------------ */}
      <button type="submit" className=" bg-orange-600 text-white px-4 py-2 mt-2 rounded w-96 h-10">
        Create Account
      </button>
      <div className="mt-2 flex place-content-center">
        <span className=" text-sm  font-semibold">
          Already a member? <a href="/login" className="text-orange-600">Login</a>
        </span>
      </div> 
      </div>
    </form>
  );
};

export default AccDetails;
