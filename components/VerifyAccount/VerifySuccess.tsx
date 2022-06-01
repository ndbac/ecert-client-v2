import { useRouter } from "next/router";
import {
  AppDispatch,
  RootState,
} from "../../redux/modules/common/common.interface";
import { useDispatch, useSelector } from "react-redux";
import { IVerifyAccountState } from "../../redux/modules/verify/interface/verify.interface";
import { verifyToken } from "../../redux/modules/verify/slices/verify.slice";
import { getItemFromLocalStorage } from "../../utils/helpers";
import Image from "next/image";
import peoplePhoto from "../../public/assets/illustrations/people.png";
import jobPhoto from "../../public/assets/illustrations/job-interview.png";
import { useEffect } from "react";

function VerifySuccess() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const store = useSelector<RootState>(
    (state) => state.verifyReducer
  ) as IVerifyAccountState;
  const { loading, serverErr } = store;

  useEffect(() => {
    const tokenId = router.query.tokenId;
    const loginToken = getItemFromLocalStorage("token");
    if (tokenId && loginToken) {
      dispatch(verifyToken({ tokenId, loginToken }));
    }
  }, [dispatch, router.query.tokenId]);

  return (
    <>
      {loading ? (
        <h1></h1>
      ) : serverErr ? (
        <div className="container px-4 mx-auto text-center">
          <span className="text-4xl text-blue-600 font-bold font-heading">
            Error 404
          </span>
          <h2 className="mb-2 text-4xl font-bold font-heading">
            Your token is invalid
          </h2>
          <p className="mb-6 text-blueGray-400">
            Sorry, but we are unable to verify your account. Please try to
            resend token again!
          </p>
          <div></div>
        </div>
      ) : (
        <section className="py-16 md:py-44 bg-white h-full relative overflow-hidden">
          <div className="hidden lg:block absolute bottom-1/2 left-0 h-64 ml-40 -mb-24 clip-path transform rotate-45">
            <div className="w-64 transform -rotate-45 object-cover">
              <Image src={peoplePhoto} alt="" />
            </div>
          </div>
          <div className="hidden lg:block absolute bottom-1/2 right-0 h-64 ml-40 -mb-24 clip-path transform ">
            <div className="w-64 transform object-cover mr-20">
              <Image src={jobPhoto} alt="" />
            </div>
          </div>
          <div className="flex items-center justify-center p-5 min-w-screen">
            <div className="max-w-xl p-8 text-center text-gray-800 bg-white shadow-xl lg:max-w-3xl rounded-3xl lg:p-12">
              <h3 className="text-4xl pb-7 font-bold">Account Activated</h3>
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-30"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p>Hello!</p>
              <p className="mt-4 text-sm">
                Thank you your email has been verified. Your account is now
                active.
              </p>
              <div className="mt-4"></div>
              <p className="text-sm mt-3">Thank you for choosing us!</p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default VerifySuccess;
