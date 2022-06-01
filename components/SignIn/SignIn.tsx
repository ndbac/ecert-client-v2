import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../../redux/modules/auth/slices/auth.slice";
import {
  AppDispatch,
  RootState,
} from "../../redux/modules/common/common.interface";
import { AuthState } from "../../redux/modules/auth/interfaces/auth.interface";

import WalkDogPhoto from "../../public/assets/illustrations/walk-dog.png";
import FacebookSign from "../../public/assets/logo/facebook-sign.svg";
import GoogleSign from "../../public/assets/logo/google-sign.svg";
import EcertLogo from "../../public/assets/logo/metis.svg";

const formSchema = Yup.object({
  email: Yup.string()
    .email("Email is not valid")
    .required("Please enter a valid email address"),
  password: Yup.string().required("Please enter your password"),
});

export const SignIn = () => {
  const dispatch = useDispatch<AppDispatch>();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(loginUserAction(values));
    },
    validationSchema: formSchema,
  });
  const store = useSelector<RootState>(
    (state) => state.authReducer
  ) as AuthState;
  const { userAuth, loading, serverErr } = store;

  const router = useRouter();
  if (userAuth) {
    router.push(`/user/${userAuth.id}`);
  }

  return (
    <section className="relative pb-20 mt-12">
      <div className="hidden lg:block absolute inset-0 w-1/2 ml-auto">
        <div className="flex items-center h-full">
          <Image className="lg:max-w-lg mx-auto" src={WalkDogPhoto} alt="" />
        </div>
      </div>
      <div className="container px-4 mx-auto">
        <div className="relative flex flex-wrap">
          <div className="lg:flex lg:flex-col w-full lg:w-1/2 py-6 lg:pr-20">
            <div className="flex justify-between items-center w-full mb-12 lg:mb-20">
              <Link href="/">
                <a className="text-3xl font-semibold leading-none" href="#">
                  <Image className="h-10" src={EcertLogo} alt="" />
                </a>
              </Link>
              <Link href="/signup">
                <a
                  className="inline-block px-4 py-3 text-xs text-blue-600 hover:text-blue-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded"
                  href="#"
                >
                  Sign Up
                </a>
              </Link>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="w-full max-w-lg mx-auto lg:mx-0 my-auto">
                <span className="text-sm text-blueGray-400">Sign In</span>
                <h4 className="mb-6 text-3xl">Join our innovation</h4>

                <div className="flex mb-4 px-4 bg-blueGray-50 rounded">
                  <input
                    value={formik.values.email}
                    onChange={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                    className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
                    type="email"
                    placeholder="name@email.com"
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
                <div className="flex mb-6 px-4 bg-blueGray-50 rounded">
                  <input
                    value={formik.values.password}
                    onChange={formik.handleChange("password")}
                    onBlur={formik.handleBlur("password")}
                    className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
                    type="password"
                    placeholder="Enter your password"
                  />
                  <button className="ml-4" type="button">
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
                  className={
                    loading
                      ? "block w-full p-4 text-center text-xs text-white font-semibold leading-none bg-blue-700 rounded"
                      : "block w-full p-4 text-center text-xs text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
                  }
                >
                  {loading ? "Loading" : "Sign In"}
                </button>
                {serverErr && (
                  <span className="text-sm text-red-400">
                    Invalid email or password
                  </span>
                )}
                <p className="my-6 text-xs text-blueGray-400 text-center">
                  or continue with
                </p>
                <button className="flex items-center w-full px-4 py-3 mb-2 text-xs text-blueGray-500 font-semibold leading-none border hover:bg-blueGray-50 rounded">
                  <Image className="h-6 pr-10" alt="" src={FacebookSign} />
                  <span>Sign In with Facebook</span>
                </button>
                <button className="flex items-center px-4 py-3 w-full text-xs text-blueGray-500 font-semibold leading-none border hover:bg-blueGray-50 rounded">
                  <Image className="h-6 pr-10" alt="" src={GoogleSign} />
                  <span>Sign In with Google</span>
                </button>
              </div>
              <div>
                <p className="mt-8 text-xs text-blueGray-400 text-center lg:text-left">
                  <a className="underline hover:text-blueGray-500" href="#">
                    Police privacy
                  </a>{" "}
                  and{" "}
                  <a className="underline hover:text-blueGray-500" href="#">
                    Terms of Use
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
