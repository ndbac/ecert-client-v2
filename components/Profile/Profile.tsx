import Image from "next/image";
import { useRouter } from "next/router";
import {
  AppDispatch,
  RootState,
} from "../../redux/modules/common/common.interface";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { IAccountState } from "../../redux/modules/account/interface/account.interface";
import { getUserDetail } from "../../redux/modules/account/slices/account.slice";
import { getItemFromLocalStorage } from "../../utils/helpers";
import Link from "next/link";

import WorkFromAirPortPhoto from "../../public/assets/illustrations/working-from-airport.png";

export const Profile = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const account = useSelector<RootState>(
    (state) => state.accountReducer
  ) as IAccountState;

  const { loading, serverErr, user } = account;
  const { userId } = router.query;

  const localUserId = getItemFromLocalStorage("id");

  useEffect(() => {
    if (userId) {
      dispatch(getUserDetail(userId as string));
    }
  }, [userId, dispatch]);

  const handleReload = () => {
    router.reload();
  };

  return (
    <>
      {loading ? (
        <h1></h1>
      ) : serverErr ? (
        <div className="container px-4 mx-auto text-center">
          <span className="text-4xl text-blue-600 font-bold font-heading">
            Error happened
          </span>
          <h2 className="mb-2 text-4xl font-bold font-heading">
            Something went wrong!
          </h2>
          <p className="mb-6 text-blueGray-400">
            Sorry, but we are unable to open this page.
          </p>
          <div>
            <Link href="/">
              <a
                className="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
                href="#"
              >
                Go back to Homepage
              </a>
            </Link>
            <Link href="/">
              <button
                className="block sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-800 text-center font-semibold leading-none bg-blueGray-50 hover:bg-blueGray-100 rounded"
                onClick={handleReload}
              >
                Try Again
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <section className="relative">
          <div className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-blueGray-50 z-0"></div>
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap items-center -mx-3">
              <div className="w-full lg:w-1/2 px-3">
                <div className="py-12">
                  <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left">
                    <h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading">
                      <span>Welcome to </span>
                      <span className="text-blue-600">eCert</span>
                      <span> - digital certification platform</span>
                    </h2>
                    <div className="flex">
                      <h1 className="font-semibold mr-2">Name: </h1>
                      <p className="text-blueGray-400 leading-relaxed">
                        {user?.name}
                      </p>
                    </div>

                    <div className="flex">
                      <h1 className="font-semibold mr-2">Email: </h1>
                      <p className="text-blueGray-400 leading-relaxed">
                        {user?.email}
                      </p>
                    </div>

                    <div className="flex">
                      <h1 className="font-semibold mr-2">Bio: </h1>
                      <p className="text-blueGray-400 leading-relaxed">
                        {user?.bio
                          ? user.bio
                          : "eCert - digital certification platform"}
                      </p>
                    </div>
                  </div>
                  <div className="text-center lg:text-left">
                    {user?.verify === false && localUserId === userId && (
                      <Link href="/verify-account">
                        <button className="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded">
                          Verify account now
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-3 lg:bg-blueGray-50 mb-12 lg:mb-0">
                <div className="flex items-center justify-center">
                  <Image
                    className="lg:max-w-lg"
                    src={WorkFromAirPortPhoto}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
