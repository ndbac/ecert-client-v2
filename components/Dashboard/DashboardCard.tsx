/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  AppDispatch,
  RootState,
} from "../../redux/modules/common/common.interface";
import { sendCertificationToEmail } from "../../redux/modules/email/slices/email.slice";
import { EmailState } from "../../redux/modules/email/interfaces/email.interface";

const formSchema = Yup.object({
  email: Yup.string()
    .email("Your email is not valid")
    .required("Please enter your email address"),
});

export const DashboardCard = (data: any) => {
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const formik = useFormik({
    initialValues: {
      email: "",
      signature: "",
    },
    onSubmit: (values) => {
      values.signature = data.data.signature;
      dispatch(sendCertificationToEmail(values));
    },
    validationSchema: formSchema,
  });
  const storeData = useSelector<RootState>(
    (store) => store.emailReducer
  ) as EmailState;

  const { loading, isSent } = storeData;

  return (
    <>
      {modal && (
        <section className="fixed top-0 left-0 right-0 bottom-0 flex items-center w-full h-full p-4 bg-coolGray-800 bg-opacity-80 overflow-y-auto">
          <div className="border rounded-xl max-w-lg w-full m-auto p-8 bg-white rounded-md">
            <div className="flex items-center justify-center w-10 h-10 mb-4 bg-green-100 rounded-md">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.4733 4.80667C12.4114 4.74418 12.3376 4.69458 12.2564 4.66074C12.1751 4.62689 12.088 4.60947 12 4.60947C11.912 4.60947 11.8249 4.62689 11.7436 4.66074C11.6624 4.69458 11.5886 4.74418 11.5267 4.80667L6.56 9.78L4.47333 7.68667C4.40899 7.62451 4.33302 7.57563 4.24979 7.54283C4.16655 7.51003 4.07767 7.49394 3.98821 7.49549C3.89876 7.49703 3.81049 7.51619 3.72844 7.55185C3.64638 7.58751 3.57216 7.63898 3.51 7.70333C3.44784 7.76768 3.39896 7.84364 3.36616 7.92688C3.33336 8.01011 3.31727 8.099 3.31882 8.18845C3.32037 8.2779 3.33952 8.36618 3.37518 8.44823C3.41084 8.53028 3.46232 8.60451 3.52667 8.66667L6.08667 11.2267C6.14864 11.2892 6.22238 11.3387 6.30362 11.3726C6.38485 11.4064 6.47199 11.4239 6.56 11.4239C6.64801 11.4239 6.73514 11.4064 6.81638 11.3726C6.89762 11.3387 6.97136 11.2892 7.03333 11.2267L12.4733 5.78667C12.541 5.72424 12.595 5.64847 12.6319 5.56414C12.6689 5.4798 12.688 5.38873 12.688 5.29667C12.688 5.2046 12.6689 5.11353 12.6319 5.02919C12.595 4.94486 12.541 4.86909 12.4733 4.80667Z"
                  fill="#2AD168"
                ></path>
              </svg>
            </div>
            <h3 className="mb-2 text-2xl font-semibold text-coolGray-900">
              Do you want to send a copy of this certification?
            </h3>
            <p className="mb-3 font-medium text-sm text-coolGray-500">
              Please enter target email:
            </p>
            <form onSubmit={formik.handleSubmit}>
              <input
                className="border rounded w-full py-3 px-5 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
                type="email"
                placeholder="Enter email"
                value={formik.values.email}
                onChange={formik.handleChange("email")}
                onBlur={formik.handleBlur("email")}
              />
              <div className="mt-5 flex flex-wrap justify-end -m-2">
                <div className="w-full md:w-1/2 p-2">
                  <button
                    onClick={() => setModal(!modal)}
                    className="rounded flex flex-wrap justify-center w-full px-4 py-2.5 bg-white font-medium text-base text-coolGray-500 hover:text-coolGray-600 border border-coolGray-200 hover:border-coolGray-300 rounded-md shadow-button"
                  >
                    <p>Cancel</p>
                  </button>
                </div>
                <div className="w-full md:w-1/2 p-2">
                  <button
                    type="submit"
                    className="rounded flex flex-wrap justify-center w-full px-4 py-2.5 bg-blue-500 hover:bg-blue-600 font-medium text-base text-white border border-blue-500 rounded-md shadow-button"
                  >
                    <p>{loading ? "Sending" : "Confirm"}</p>
                  </button>
                </div>
              </div>
              {isSent && (
                <p className="mt-5 text-center text-green-500 font-semibold">
                  A copy of certification was sent successfully!
                </p>
              )}
            </form>
          </div>
        </section>
      )}
      <tr className="border-t border-blueGray-100">
        <td>
          <Link href={`/certification/${data.data.signature}`}>
            <div className="flex px-6 py-4 text-xs cursor-pointer">
              <img className="w-8 rounded" alt="" src={data.data.qrCode}></img>
              <div className="pl-4">
                <p className="font-semibold">{data.data.name}</p>
                <p className="text-blueGray-400">{data.data.email}</p>
              </div>
            </div>
          </Link>
        </td>
        <td className="px-4 py-2 text-xs font-semibold">
          {new Date(Date.parse(data.data.createdAt)).toDateString()}
        </td>
        <td className="px-4 py-2 text-xs font-semibold">
          {new Date(Date.parse(data.data.updatedAt)).toString()}
        </td>
        <td className="px-4 py-2">
          <div className="flex">
            <h1 className="font-semibold text-xs">{data.data.signature}</h1>
          </div>
        </td>
        <td className="pr-5">
          <button
            onClick={() => setModal(!modal)}
            className="py-3 px-2 text-sm text-white font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded"
          >
            Send copy
          </button>
        </td>
      </tr>
    </>
  );
};
