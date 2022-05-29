import Image from "next/image";
import Link from "next/link";

import EcertLogo from "../../public/assets/logo/metis.svg";
import FacebookLogo from "../../public/assets/icons/facebook-blue.svg";
import TwitterLogo from "../../public/assets/icons/twitter-blue.svg";
import InstagramLogo from "../../public/assets/icons/instagram-blue.svg";

export const Footer = () => {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap mb-12 lg:mb-20 -mx-3 text-center lg:text-left">
          <div className="w-full lg:w-1/5 px-3 mb-6 lg:mb-0">
            <Link href="/">
              <a
                className="inline-block mx-auto lg:mx-0 text-3xl font-semibold leading-none"
                href="#"
              >
                <Image className="h-10" src={EcertLogo} alt="" />
              </a>
            </Link>
          </div>
          <div className="w-full lg:w-2/5 px-3 mb-8 lg:mb-0">
            <p className="max-w-md mx-auto lg:max-w-full lg:mx-0 lg:pr-32 lg:text-lg text-blueGray-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              luctus eget justo.
            </p>
          </div>
          <div className="w-full lg:w-1/5 px-3 mb-8 lg:mb-0">
            <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">
              Office
            </p>
            <p className="lg:text-lg text-blueGray-400">
              359 Hidden Valley Road, NY
            </p>
          </div>
          <div className="w-full lg:w-1/5 px-3">
            <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">
              Contacts
            </p>
            <p className="lg:text-lg text-blueGray-400">hello@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:justify-between">
          <p className="text-xs text-blueGray-400">
            © 2020. All rights reserved.
          </p>
          <div className="order-first lg:order-last -mx-2 mb-4 lg:mb-0">
            <a className="inline-block px-2" href="#">
              <Image src={FacebookLogo} alt="" />
            </a>
            <a className="inline-block px-2" href="#">
              <Image src={TwitterLogo} alt="" />
            </a>
            <a className="inline-block px-2" href="#">
              <Image src={InstagramLogo} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
