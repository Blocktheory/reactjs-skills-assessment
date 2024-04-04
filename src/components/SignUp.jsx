import React, { useState } from "react";
import logo from "../Assets/logo.png";

const SignUp = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    country: "",
    email: "",
    gender: "",
    profilePic: "",
    termsAgreement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onSubmit();
  };

  return (
    <div className="container mx-auto mt-10 items-center justify-center flex flex-col lg:flex-row gap-10">
   <img
    src={logo}
    alt="Coral Image"
    className="rounded-lg lg:w-1/3 h-auto mb-10 lg:mb-0"
  />

  <div className="w-full lg:w-96 p-6">
    <h2 className="text-3xl font-semibold mb-4 text-center">
      Create an account
    </h2>
    <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="What should we call you?"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="bio" className="block mb-1">
              About yourself
            </label>
            <input
              type="text"
              name="bio"
              id="bio"
              placeholder="Describe in brief"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={formData.bio}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="country" className="block mb-1">
              Select Country
            </label>
            <select
              name="country"
              id="country"
              className="w-full bg-white px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="">Country</option>
              <option value="India">India</option>
              <option value="US">United States</option>
              <option value="Germany">Germany</option>
              <option value="Australia">Australia</option>
            </select>
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@domain.com"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-1">Gender</label>
            <div className="flex items-center gap-4">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                className="form-check-input"
                onChange={handleChange}
                required
              />
              <label htmlFor="male" className="form-check-label inline-block text-gray-800">
                Male
              </label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                className="form-check-input"
                onChange={handleChange}
                required
              />
              <label htmlFor="female" className="form-check-label inline-block text-gray-800">
                Female
              </label>
            </div>
          </div>
          <div className="flex flex-col items-start w-64">
            <label htmlFor="profilePic" className="block mb-1">
              Profile Pic
            </label>
            <div className="relative border text-blue-500 border-gray-200 rounded-lg overflow-hidden w-20 h-20">
              <div className="absolute inset-0 flex items-center justify-center bg-black">
                <label
                  htmlFor="profilePic"
                  className="flex flex-col items-center justify-center w-full h-full cursor-pointer bg-white"
                >
                  <span>+</span>
                  <span className="block mt-2 text-sm leading-normal font-normal text-dark">
                    Upload Pic
                  </span>
                </label>
              </div>
            </div>
            <input
              type="file"
              name="profilePic"
              id="profilePic"
              className="sr-only"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="terms-conditions"
              className="form-check-input"
              name="termsAgreement"
              checked={formData.termsAgreement}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="terms-conditions"
              className="form-check-label inline-block text-gray-800 select-none cursor-pointer"
            >
              I agree to terms and conditions
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition duration-200"
          >
            Create account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
