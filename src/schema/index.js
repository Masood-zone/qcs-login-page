import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address...")
    .required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, {
      message:
        "Please enter a strong password - Should have at least a capital letter, and a number.",
    })
    .required("Required"),
});
