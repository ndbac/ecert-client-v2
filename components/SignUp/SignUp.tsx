import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import {
  AppDispatch,
  RootState,
} from "../../redux/modules/common/common.interface";
import { registerUserAction } from "../../redux/modules/auth/slices/auth.slice";
import { IamNamespace } from "../../redux/modules/common/common.interface";
import { AuthState } from "../../redux/modules/auth/interfaces/auth.interface";

import WalkDogPhoto from "../../public/assets/illustrations/walk-dog.png";

const formSchema = Yup.object({
  name: Yup.string()
    .max(30, "Your last name must be lower than 30 characters")
    .required("Please enter your name"),
  email: Yup.string()
    .email("Your email is not valid")
    .required("Please enter your email address"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
      message:
        "Password must contain uppercase letters and numbers or special characters",
    })
    .required("Please enter your password"),
  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password"), null],
      "Confirm password is not equal to your password"
    )
    .required("Please enter your password again"),
});

export const SignUp = () => {
  const dispatch = useDispatch<AppDispatch>();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      namespace: IamNamespace.PROJECT,
    },
    onSubmit: (values) => {
      dispatch(registerUserAction(values));
    },
    validationSchema: formSchema,
  });

  const storeData = useSelector<RootState>(
    (store) => store.authReducer
  ) as AuthState;
  const { loading, serverErr, registered } = storeData;

  const router = useRouter();
  if (registered) {
    router.push(`/signin`);
  }

  return (
    <section className="relative pb-20 lg:mx-80">
      <div className="hidden lg:block absolute inset-0 w-1/2 ml-auto">
        <div className="flex items-center h-full">
          <div className="lg:max-w-xl mx-auto">
            <Image src={WalkDogPhoto} alt="" />
          </div>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="container px-4 mx-auto">
          <div className="relative flex flex-wrap">
            <div className="lg:flex lg:flex-col w-full lg:w-1/2 py-6 lg:pr-20">
              <div className="w-full max-w-lg mx-auto lg:mx-0 my-auto">
                <span className="text-sm text-blueGray-400">Sign Up</span>
                <h4 className="mb-6 text-3xl">Create an account</h4>
                <p className="mb-2 font-semibold text-red-500 text-sm ml-4">
                  {formik.touched.name && formik.errors.name}
                </p>
                <div className="flex mb-4 px-4 bg-blueGray-50 rounded">
                  <input
                    className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
                    type="text"
                    placeholder="Enter name"
                    value={formik.values.name}
                    onChange={formik.handleChange("name")}
                    onBlur={formik.handleBlur("name")}
                  />
                </div>
                <p className="mb-2 font-semibold text-red-500 text-sm ml-4">
                  {formik.touched.email && formik.errors.email}
                </p>
                <div className="flex mb-4 px-4 bg-blueGray-50 rounded">
                  <input
                    className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
                    type="email"
                    placeholder="name@email.com"
                    value={formik.values.email}
                    onChange={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                  />
                  <svg
                    className="h-6 w-6 ml-4 my-auto text-blueGray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    ></path>
                  </svg>
                </div>
                <p className="mb-2 font-semibold text-red-500 text-sm ml-4">
                  {formik.touched.password && formik.errors.password}
                </p>
                <div className="flex mb-6 px-4 bg-blueGray-50 rounded">
                  <input
                    className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
                    type="password"
                    placeholder="Enter your password"
                    value={formik.values.password}
                    onChange={formik.handleChange("password")}
                    onBlur={formik.handleBlur("password")}
                  />
                  <button className="ml-4">
                    <svg
                      className="h-6 w-6 my-auto text-blueGray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <p className="mb-2 font-semibold text-red-500 text-sm ml-4">
                  {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword}
                </p>
                <div className="flex mb-6 px-4 bg-blueGray-50 rounded">
                  <input
                    className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
                    type="password"
                    placeholder="Confirm your password"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange("confirmPassword")}
                    onBlur={formik.handleBlur("confirmPassword")}
                  />
                  <button className="ml-4">
                    <svg
                      className="h-6 w-6 my-auto text-blueGray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <button
                  type="submit"
                  className={
                    loading
                      ? "block w-full p-4 text-center text-xs text-white font-semibold leading-none bg-blue-700 rounded"
                      : "block w-full p-4 text-center text-xs text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
                  }
                >
                  {loading ? "Loading" : "Sign Up"}
                </button>
                {serverErr && (
                  <span className="text-sm text-red-400">
                    Cannot register new account!
                  </span>
                )}
              </div>
              <div>
                <p className="mt-8 text-xs text-blueGray-400 text-center lg:text-left">
                  <a className="underline hover:text-blueGray-500" href="#">
                    Police privacy
                  </a>
                  &nbsp;and&nbsp;
                  <a className="underline hover:text-blueGray-500" href="#">
                    Terms of Use
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};
