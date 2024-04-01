import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";

function signup() {
  const router = useRouter();

  return (
    <div className="flex flex-row m-1 ">
      <div className="layout-logo ">
        <div className="flex-1 signup-image-block ">
          <div className="w-full">
            <div className="flex  justify-center py-10">
              <img className="logo" src={"/logo.png"} alt="image" />
            </div>
          </div>

          <div className="mb-5">
            <div>
              <h1 className="text-white text-center font-bold text-5xl mb-13">
                Explore the world
              </h1>
            </div>

            <div>
              <p className="text-white text-center px-64 py-6 mb-6">
                Our versatile tool provides an extensive array of components,
                igniting creativity and enhancing efficiency to streamline
                workflows for designers.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="max-w-md mx-auto mt-8">
          <h2 className="text-2xl font-bold mb-4 text-center font-italic text-3xl">
            Create an account
          </h2>
          <div>
            <Formik
              initialValues={{
                name: "",
                about: "",
                country: "",
                email: "",
                gender: "",
                termsAccepted: false,
               
              }}
              validate={(values) => {
                const errors: any = {};
                if (!values.name) {
                  errors.name = "This is required field";
                }
                if (!values.about) {
                  errors.name = "This is required field";
                }
                if (!values.email) {
                  errors.about = "This is required field";
                }
                if (!values.country) {
                  errors.country = "This is required field";
                }
                if (!values.gender) {
                  errors.gender = "This is required field";
                }
                if (!values.termsAccepted) {
                  errors.termsAccepted = "This is required filed";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                router.push("/products");
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-bold font-medium text-black-700"
                    >
                      Name
                    </label>
                    <Field
                      type="text"
                      name="name"
                      id="name"
                      className="h-12 mt-1 focus:ring-indigo-500 focus:border-indigo-500 border block w-full shadow-sm sm:text-sm border-gray-100 rounded-md px-4 py-1"
                      placeholder="What should we call you?"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="about"
                      className="block text-bold font-medium text-black-700"
                    >
                      About yourself
                    </label>
                    <Field
                      type="about"
                      name="about"
                      id="about"
                      className="h-12 mt-1 focus:ring-indigo-500 focus:border-indigo-500 border block w-full shadow-sm sm:text-sm border-gray-100 rounded-md px-4 py-1"
                      placeholder="Describe in brief"
                    />
                    <ErrorMessage
                      name="about"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="country"
                      className="block text-bold font-medium text-black-700"
                    >
                      Country
                    </label>
                    <Field
                      as="select"
                      name="country"
                      id="country"
                      className="h-12 mt-1 focus:ring-indigo-500 focus:border-indigo-500 border block w-full shadow-sm sm:text-sm border-gray-100 rounded-md px-4 py-1"
                      placeholder="Select a country"
                    >
                      <option value="">Select Country</option>
                      <option value="India">India</option>
                      <option value="US">US</option>
                    </Field>
                    <ErrorMessage
                      name="country"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-bold font-medium text-black-700 text-lg"
                    >
                      Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className="h-12 mt-1 focus:ring-indigo-500 focus:border-indigo-500 border block w-full shadow-sm sm:text-sm border-gray-100 rounded-md px-4 py-1"
                      placeholder="you@domain.com"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-bold font-medium text-black-700">
                      Gender
                    </label>
                    <div className="mt-1 flex">
                      <label
                        htmlFor="male"
                        className="inline-flex items-center mr-6 border-2 border-gray-100 rounded-xl px-7 py-4"
                      >
                        <Field
                          type="radio"
                          name="gender"
                          id="male"
                          value="male"
                          className="form-checkbox h-5 w-5 text-indigo-600 border-gray-100"
                        />
                        <span className="ml-2">Male</span>
                      </label>
                      <label
                        htmlFor="female"
                        className="inline-flex items-center mr-6 border-2 border-gray-100 rounded-xl px-5 py-4"
                      >
                        <Field
                          type="radio"
                          name="gender"
                          id="female"
                          value="female"
                          className="form-checkbox h-5 w-5 text-indigo-600 rounded-xl"
                        />
                        <span className="ml-2">Female</span>
                      </label>
                    </div>
                    <ErrorMessage
                      name="gender"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="picture"
                      className="block text-bold font-medium text-black-700"
                    >
                      Profile Pic{" "}
                    </label>
                    <div className="relative">
                      <input type="file" className="hidden" id="picture" />
                      <label
                        htmlFor="picture"
                        className="cursor-pointer inline-block px-4 py-2  text-white rounded-md shadow-sm "
                      >
                        <div className="h-full w-fit p-2 flex flex-col relative items-center border-2 border-gray-100 rounded-xl text-sky-500">
                          <p>+</p>
                          <p>Upload Pic</p>
                        </div>
                      </label>
                      <span
                        id="fileName"
                        className="absolute top-0 right-0 mt-2 mr-2 text-sm text-gray-500"
                      ></span>
                    </div>
                    <ErrorMessage
                      name="picture"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    /> 
                  </div>

                  <div className="mb-4">
                    <label className="flex items-center space-x-2 text-sm font">
                      <Field
                        type="checkbox"
                        name="termsAccepted"
                        className="form-checkbox h-5 w-5 text-indigo-600"
                      />
                      <span>
                        I agree to{" "}
                        <a href="#" className="hover:underline">
                          terms and conditions
                        </a>
                      </span>
                    </label>
                    <ErrorMessage
                      name="termsAccepted"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-600 text-white py-2 px-4 rounded-md font-semibold disabled:bg-gray-400"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Create an account"}
                  </button>

                  <p className="mt-2 text-sm text-gray-600 text-center text-lg">
                    Already a member?{" "}
                    <a href="#" className="text-orange-600 hover:underline">
                      Login
                    </a>
                  </p>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default signup;
