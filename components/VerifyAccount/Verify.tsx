/* eslint-disable react/no-unescaped-entities */
import {
  AppDispatch,
  RootState,
} from "../../redux/modules/common/common.interface";
import { createVerifyAccountToken } from "../../redux/modules/verify/slices/verify.slice";
import { useDispatch, useSelector } from "react-redux";
import { IVerifyAccountState } from "../../redux/modules/verify/interface/verify.interface";
import { useState, useEffect } from "react";
import { getItemFromLocalStorage } from "../../utils/helpers";
import Image from "next/image";
import peoplePhoto from "../../public/assets/illustrations/people.png";
import jobPhoto from "../../public/assets/illustrations/job-interview.png";
import { getUserDetail } from "../../redux/modules/account/slices/account.slice";
import { IAccountState } from "../../redux/modules/account/interface/account.interface";
import { useRouter } from "next/router";

function EmailVerify() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const store = useSelector<RootState>(
    (state) => state.verifyReducer
  ) as IVerifyAccountState;
  const account = useSelector<RootState>(
    (state) => state.accountReducer
  ) as IAccountState;
  const { loading } = store;
  useEffect(() => {
    const userId = getItemFromLocalStorage("id");
    if (userId) {
      dispatch(getUserDetail(userId));
    }
    if (account.user?.verify === true) {
      router.push("/404");
    }
  });

  const [alert, setAlert] = useState(false);
  const handleVerify = () => {
    setAlert(true);
    const token = getItemFromLocalStorage("token");
    if (token) {
      dispatch(createVerifyAccountToken(token));
    }
  };

  let message;
  if (store.serverErr == "Rejected") {
    message = (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Error: </strong>
        <span className="block sm:inline">
          Something seriously bad happened.
        </span>
      </div>
    );
  } else {
    message = (
      <div
        className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Success: </strong>
        <span className="block sm:inline">Check your email.</span>
      </div>
    );
  }
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="hidden lg:block absolute lg:bottom-1/2 bottom-20h-64 -mb-24 clip-path ">
        <div className="w-64 transform object-cover ml-20">
          <Image src={peoplePhoto} alt="" />
        </div>
      </div>
      <div className="flex items-center justify-center p-5 min-w-screen md:mt-40">
        <div className="max-w-xl p-8 text-center text-gray-800 bg-white shadow-xl lg:max-w-3xl rounded-3xl lg:p-12">
          <h3 className="text-4xl pb-7 font-bold">
            Thanks for signing up for eCert!
          </h3>
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <p className="text-blueGray-400">
            We're happy you are here. Let's get your email address verified:
          </p>
          <div className="mt-4 mb-3">
            <button
              className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
              onClick={handleVerify}
            >
              {loading ? "Sending" : "Click to Verify Email"}
            </button>
          </div>
          {alert && !store.loading && message}
        </div>
      </div>
      <div className="hidden lg:block absolute bottom-0 right-0 h-64 mr-20">
        <div className="w-64 transform object-cover">
          <Image src={jobPhoto} alt="" />
        </div>
      </div>
    </section>
  );
}

export default EmailVerify;
