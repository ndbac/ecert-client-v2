import Image from "next/image";
import Link from "next/link";
import Router from "next/router";

import Error404 from "../../public/assets/illustrations/error2.png";

export const NotFound = () => {
  const handleReload = () => {
    Router.reload();
  };

  return (
    <section className="pb-20">
      <div className="container px-4 mx-auto text-center">
        <Image className="mb-4 mx-auto md:max-w-md" src={Error404} alt="" />
        <span className="text-4xl text-blue-600 font-bold font-heading">
          Error 404
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
    </section>
  );
};
