import Image from "next/image";
import workPhoto from "../../public/assets/illustrations/work-tv.png";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  AppDispatch,
  RootState,
} from "../../redux/modules/common/common.interface";
import { useDispatch, useSelector } from "react-redux";
import { IVerifyAccountState } from "../../redux/modules/verify/interface/verify.interface";
import { createResetPasswordToken } from "../../redux/modules/verify/slices/verify.slice";

const formSchema = Yup.object({
  email: Yup.string()
    .email("Email is not valid")
    .required("Please enter a valid email address"),
});

function ResetPassword() {
  const dispatch = useDispatch<AppDispatch>();
  const store = useSelector<RootState>(
    (state) => state.verifyReducer
  ) as IVerifyAccountState;
  const { status, serverErr, loading } = store;

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (data) => {
      dispatch(createResetPasswordToken(data));
      formik.resetForm();
    },
    validationSchema: formSchema,
  });

  return (
    <div className=" bg-white relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          <div className="w-full flex">
            <div className="hidden lg:block">
              <Image src={workPhoto} alt="" />
            </div>
            <div className="w-full lg:w-1/2 bg-white p-5 md:rounded-lg lg:rounded-l-none">
              <div className="px-8 text-center">
                <h3 className="pt-4 mb-2 text-4xl font-bold">
                  Forgot Your Password?
                </h3>
                <p className="mb-4 text-sm text-gray-700">
                  We get it, stuff happens. Just enter your email address below
                  and we will send you a link to reset your password!
                </p>
              </div>
              <form
                className="px-8 pt-6 pb-8 bg-white rounded"
                onSubmit={formik.handleSubmit}
              >
                <div className="mb-4">
                  <input
                    value={formik.values.email}
                    onChange={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="Type your e-mail"
                  />
                  <p className="mb-4 text-red-600 font-semibold">
                    {" "}
                    {formik.touched.email && formik.errors.email}{" "}
                  </p>
                </div>
                {serverErr && (
                  <div className="text-center">
                    <span className="text-md text-red-500 font-semibold">
                      Something bad happened!
                    </span>
                  </div>
                )}
                {status === "email sent successfully" && (
                  <div className="text-center">
                    <p className="text-md text-green-400 font-semibold">
                      Please check your mail
                    </p>
                  </div>
                )}
                <div className="mb-6 text-center">
                  <button
                    className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
                    type="submit"
                  >
                    {loading ? "Loading" : "Reset Password"}
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <Link href="/signup">
                    <a
                      className="inline-block text-sm text-black align-baseline hover:text-gray-500"
                      href="./register.html"
                    >
                      Create an Account!
                    </a>
                  </Link>
                </div>
                <div className="text-center">
                  <Link href="/signin">
                    <a
                      className="inline-block text-sm text-black align-baseline hover:text-gray-500"
                      href="./index.html"
                    >
                      Already have an account? Login!
                    </a>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
