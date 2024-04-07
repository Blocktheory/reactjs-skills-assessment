import React, { FormEvent, useRef } from "react";
import classes from "./Form.module.scss";
import { useFormik } from "formik";
import { userSchema } from "../../schema";
import { useNavigate } from "react-router-dom";

interface InitialValues {
  name: string;
  description: string;
  email: string;
  gender: string;
  country: string;
  image: File | null;
  consent: boolean | null;
}
const initialValues: InitialValues = {
  name: "",
  description: "",
  email: "",
  gender: "",
  country: "",
  image: null,
  consent: null,
};

const Form: React.FC = () => {
  const imgRef = useRef(null);
  const navigate=useNavigate()

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: userSchema,
    validateOnBlur:false,
    validateOnChange:true,
    onSubmit: (values): any => {
      console.log(values);
      navigate('/products')
    },
  });

  const imageClick = () => {
    imgRef.current.click();
  };

  const handleImageChange = (event: FormEvent) => {
    const file = event.target;

    values.image = file.files[0];
  };

  return (
    <div className={`col-md-6 ${classes.right}`}>
      <form onSubmit={handleSubmit}>
        <h2 className={classes.heading}>Craete an account</h2>

        <div className="mb-1">
          <label htmlFor="name" className={classes["input-label"]}>
            Name
          </label>
          <input
            type="text"
            className={`form-control ${classes.input}`}
            placeholder="What should we call you?"
            id="name"
            name="name"
            autoComplete="off"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {errors.name && <p className={classes.error}>{errors.name}</p>}
        </div>
        <div className="mb-1">
          <label htmlFor="description" className={classes["input-label"]}>
            About yourself
          </label>
          <input
            type="text"
            className={`form-control ${classes.input}`}
            placeholder="Describe in brief"
            id="description"
            name="description"
            autoComplete="off"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="mb-1">
          <label htmlFor="country" className={classes["input-label"]}>
            Country
          </label>
          <br />
          <select
            className={`form-control ${classes.input}`}
            onChange={handleChange}
            onBlur={handleBlur}
            name="country"
            value={values.country}
          >
            <option value="">Select country</option>
            <option value="india">India</option>
            <option value="nepal">Nepal</option>
            <option value="bhutan">Bhutan</option>
          </select>
          {errors.country && <p className={classes.error}>{errors.country}</p>}
        </div>
        <div className="mb-1">
          <label htmlFor="email" className={classes["input-label"]}>
            Email
          </label>
          <input
            type="email"
            className={`form-control ${classes.input}`}
            id="email"
            placeholder="you@domain.com"
            name="email"
            autoComplete="off"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && <p className={classes.error}>{errors.email}</p>}
        </div>
        <div className="mb-1">
          <label htmlFor="gender" className={classes["input-label"]}>
            Gender
          </label>
          <div className={classes["radio-input-section"]}>
            <div className={classes["radio-input"]}>
              <input
                type="radio"
                className="form-check-input"
                id="male"
                value="male"
                name="gender"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label className={classes["radio-label"]} htmlFor="male">
                Male
              </label>
            </div>
            <div className={classes["radio-input"]}>
              <input
                type="radio"
                className="form-check-input"
                id="female"
                value="female"
                name="gender"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label className={classes["radio-label"]} htmlFor="female">
                Female
              </label>
            </div>
          </div>
          {errors.gender && <p className={classes.error}>{errors.gender}</p>}
        </div>

        <div className="mb-1">
          <label htmlFor="profile-image" className={classes["input-label"]}>
            Profile Pic
          </label>
          <div className={classes["image-container"]} onClick={imageClick}>
            {values.image && (
              <img
                src={URL.createObjectURL(values.image)}
                alt="image"
                className={classes.pic}
              />
            )}
            {!values.image && (
              <p>
                +<br /> Upload Pic
              </p>
            )}
            <input
              type="file"
              ref={imgRef}
              name="image"
              onChange={handleImageChange}
              onBlur={handleBlur}
            />
          </div>
        </div>

        <div className="mb-1">
          <input
            className="form-check-input me-2"
            name="consent"
            type="checkbox"
            value="true"
            id="flexCheckDefault"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label className={classes["input-label"]} htmlFor="flexCheckDefault">
            I agree to terms and conditions
          </label>
          {errors.consent && <p className={classes.error}>{errors.consent}</p>}
        </div>

        <div className="mb-1">
          <button type="submit" className={classes.btn}>
            Create account
          </button>
        </div>
        <div>
          <span className={`text-center ${classes["input-label"]}`}>
            Already an member? <span>Log in</span>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Form;
