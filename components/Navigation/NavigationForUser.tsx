import Image from "next/image";
import { useState } from "react";

import EcertLogo from "../../public/assets/logo/metis.svg";
import FacebookLogo from "../../public/assets/icons/facebook-blue.svg";
import TwitterLogo from "../../public/assets/icons/twitter-blue.svg";
import InstagramLogo from "../../public/assets/icons/instagram-blue.svg";

export const NavigationForUser = () => {
  const [mobile, setMobile] = useState(false);

  const handleResponsive = () => {
    setMobile(!mobile);
  };

  return (
    <section>
      <div className="container px-4 mx-auto">
        <nav className="flex items-center py-6">
          <a className="text-3xl font-semibold leading-none" href="#">
            <Image className="h-10" src={EcertLogo} alt="" />
          </a>
          <div className="lg:hidden ml-auto">
            <button
              onClick={handleResponsive}
              className="navbar-burger flex items-center py-2 px-3 text-blue-600 hover:text-blue-700 rounded border border-blue-200 hover:border-blue-300"
            >
              <svg
                className="fill-current h-4 w-4"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <ul className="hidden lg:flex ml-12 mr-auto space-x-12">
            <li>
              <a
                className="text-sm text-blueGray-400 hover:text-blueGray-500"
                href="#"
              >
                Product
              </a>
            </li>
            <li>
              <a
                className="text-sm text-blueGray-400 hover:text-blueGray-500"
                href="#"
              >
                Company
              </a>
            </li>
            <li>
              <a
                className="text-sm text-blueGray-400 hover:text-blueGray-500"
                href="#"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                className="text-sm text-blueGray-400 hover:text-blueGray-500"
                href="#"
              >
                Features
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={mobile ? "" : "hidden"}>
        <div className="navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
          <div
            onClick={handleResponsive}
            className="navbar-backdrop fixed inset-0 bg-blueGray-800 opacity-25"
          ></div>
          <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              <a
                className="mr-auto text-3xl font-semibold leading-none"
                href="#"
              >
                <Image className="h-10" src={EcertLogo} alt="" />
              </a>
              <button onClick={handleResponsive} className="navbar-close">
                <svg
                  className="h-6 w-6 text-blueGray-400 cursor-pointer hover:text-blueGray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600"
                    href="#"
                  >
                    Product
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600"
                    href="#"
                  >
                    Company
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600"
                    href="#"
                  >
                    About Us
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600"
                    href="#"
                  >
                    Features
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <p className="my-4 text-xs text-blueGray-400">
                <span>Get in Touch </span>
                <a
                  className="text-blue-600 hover:text-blue-600 underline"
                  href="#"
                >
                  info@example.com
                </a>
              </p>
              <a className="inline-block px-1" href="#">
                <Image src={FacebookLogo} alt="" />
              </a>
              <a className="inline-block px-1" href="#">
                <Image src={TwitterLogo} alt="" />
              </a>
              <a className="inline-block px-1" href="#">
                <Image src={InstagramLogo} alt="" />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};