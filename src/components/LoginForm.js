import React from "react";
import { useFormik } from "formik";
import { loginSchema } from "../schema";

const LoginForm = () => {
  const onSubmit = async (values, actions) => {
    console.log("Submitted");
    await new Promise((resolve) => setTimeout((resolve, 1000)));
    actions.resetForm();
  };

  const {
    values,
    errors,
    handleBlur,
    isSubmitting,
    handleChange,
    touched,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberme: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });
  return (
    <div className="w-screen h-screen bg-[#E5E5E5] max-[299px]:w-[300px] max-[299px]:h-[700px] max-[299px] background-bottom">
      <div className="w-[300px] h-[406px] mx-auto pt-16 max-md:pt-5">
        <h1 className="text-center font-medium text-[48px] text-[#224957] pb-4">
          QCS Ghana
        </h1>
        <p className="text-[16px] text-[#224957] font-base text-center">
          Log in to access your Dashboard
        </p>
        <form
          className="w-full pt-4 max-[299px]:w-[280px] max-[299px]:mx-auto"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <input
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            className={
              errors.email && touched.email
                ? `w-full my-5 px-3 py-3 text-white bg-[#224957] font-medium text-base rounded-lg border-[#fc8181] ring-1 ring-[#fc8181]`
                : "w-full my-5 px-3 py-3 text-white bg-[#224957] font-medium text-base rounded-lg "
            }
          />
          {errors.email && touched.email && (
            <p className="text-[#fc8181] text-[0.75rem] text-left mt-1">
              {errors.email}
            </p>
          )}
          <input
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className={
              errors.password && touched.password
                ? `w-full my-5 px-3 py-3 text-white bg-[#224957] font-medium text-base rounded-lg border-[#fc8181]`
                : "w-full my-5 px-3 py-3 text-white bg-[#224957] font-medium text-base rounded-lg"
            }
          />
          {errors.password && touched.password && (
            <p className="text-[#fc8181] text-[0.75rem] text-left mt-1">
              {errors.password}
            </p>
          )}
          <div className="flex items-center justify-between">
            <span className="font-base">Not a user? <a href="/" className="underline hover:text-blue-600"> Sign in</a></span>
            <span className="font-extralight">Forgot Password?</span>
          </div>
          <button
            className="py-3 px-4 bg-[#20DF7F] text-[#224957] rounded-lg w-full mt-5 shadow-xl disabled:opacity-[0.35]"
            type="submit"
            disabled={isSubmitting}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
