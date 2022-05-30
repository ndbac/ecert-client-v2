import Image from "next/image";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useFormik } from "formik";

import WalkDogPhoto from "../../public/assets/illustrations/walk-dog.png";
import PhoneOnlineShoppingPhoto from "../../public/assets/illustrations/phone-online-shopping.png";
import TeslaLogo from "../../public/assets/logo/brands/tesla.svg";
import FacebookLogo from "../../public/assets/logo/brands/facebook.svg";
import MarvelLogo from "../../public/assets/logo/brands/marvel.svg";
import NikeLogo from "../../public/assets/logo/brands/nike.svg";
import AirBnbLogo from "../../public/assets/logo/brands/airbnb.svg";

const formSchema = Yup.object({
  signature: Yup.string().required("Please enter signature"),
});

export const Header = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      signature: "",
    },
    onSubmit: (values) => {
      router.push(`/certification/${values.signature}`);
    },
    validationSchema: formSchema,
  });

  return (
    <div className="">
      <section className="relative overflow-x-hidden overflow-y-hidden">
        <div className="hidden md:block -z-50 absolute top-0 left-0 mt-32 -ml-32 lg:-ml-24">
          <Image className="h-64 lg:h-80" src={WalkDogPhoto} alt="" />
        </div>
        <div className="hidden md:block -z-50 absolute top-0 right-0 mt-32 -mr-32 lg:-mr-16">
          <Image
            className="h-64 lg:h-80"
            src={PhoneOnlineShoppingPhoto}
            alt=""
          />
        </div>
        <div className="container pt-4 pb-20 mx-auto">
          <div className="mt-12 mb-12">
            <div className="max-w-lg mx-auto mb-8 text-center">
              <span className="inline-block px-3 py-2 text-xs font-semibold bg-blue-50 text-blue-500 rounded-full uppercase">
                Certificate Verification
              </span>
              <h2 className="text-3xl md:text-4xl mt-4 mb-4 font-bold font-heading">
                <span>Verifying with</span>
                <span className="text-blue-600"> eCert </span>
                <span>make things easier and safer</span>
              </h2>
              <p className="text-blueGray-400 leading-relaxed">
                Checking certifications with only one click.
              </p>
            </div>
            <div className="max-w-2xl mx-auto text-center">
              <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-wrap">
                  <div className="flex flex-1 mb-4 mr-4 px-4 rounded bg-blueGray-50">
                    <svg
                      className="h-6 w-6 my-auto mr-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <input
                      className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
                      type="text"
                      placeholder="Type certification signature"
                      value={formik.values.signature}
                      onChange={formik.handleChange("signature")}
                      onBlur={formik.handleBlur("signature")}
                    />
                  </div>
                  <div className="w-full lg:w-auto">
                    <button
                      type="submit"
                      className="block w-full py-4 px-6 mb-2 lg:w-auto text-xs text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
                    >
                      Check
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center max-w-4xl mx-auto pt-8 pb-4">
            <div className="w-1/2 md:w-1/3 lg:w-1/5 px-3 mb-8">
              <Image className="mx-auto" src={TeslaLogo} alt="" />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/5 px-3 mb-8">
              <Image className="mx-auto" src={FacebookLogo} alt="" />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/5 px-3 mb-8">
              <Image className="mx-auto" src={MarvelLogo} alt="" />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/5 px-3 mb-8">
              <Image className="mx-auto" src={NikeLogo} alt="" />
            </div>
            <div className="hidden md:block w-1/2 md:w-1/3 lg:w-1/5 px-3 mb-8">
              <Image className="mx-auto" src={AirBnbLogo} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
