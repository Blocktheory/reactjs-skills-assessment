import * as Yup from "yup";

export const userSchema = Yup.object({
  name: Yup.string().min(4).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  country: Yup.string().required("Please choose your country"),
  gender: Yup.string().required("Gender is required"),
  consent: Yup.boolean().required("Select this to create your account"),
});
