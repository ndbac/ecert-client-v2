/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  AppDispatch,
  RootState,
} from "../../redux/modules/common/common.interface";
import { getCertification } from "../../redux/modules/certification/slices/certification.slice";
import { CertState } from "../../redux/modules/certification/interfaces/certification.interface";
import reactHtmlParser from "react-html-parser";

export const Certification = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getCertification({ signature: router.query.id }));
  }, [dispatch, router.query.id]);

  const storeData = useSelector<RootState>(
    (store) => store.certiReducer
  ) as CertState;
  const { uploadCert, loading, serverErr } = storeData;

  return (
    <section className="py-12 md:pt-16 md:pb-12 mb-12 text-center">
      {loading ? (
        <div>
          <h2 className="text-3xl md:text-4xl mt-4 mb-4 font-bold font-heading">
            <span>Verifying with</span>
            <span className="text-blue-600"> eCert </span>
            <span>make things easier and safer</span>
          </h2>
          <p>Checking certification...</p>
        </div>
      ) : !serverErr ? (
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto mb-8 text-center">
            <span className="inline-block text-xs py-1 px-3 text-blue-700 font-semibold bg-blue-100 rounded-xl">
              Certificate Verification
            </span>
            <h2 className="my-3 text-3xl md:text-4xl text-blueGray-900 font-bold font-heading">
              {uploadCert?.name}
            </h2>
            <p className="text-blueGray-400 text-sm pb-8">
              Email: {uploadCert?.email}
            </p>
            <div className="relative max-w-6xl mb-5 mx-auto text-center">
              <img
                className="object-cover w-full h-full"
                src={uploadCert?.qrCode}
                alt=""
              />
            </div>
            <hr className="mt-10" />
            <div className="pl-10 mb-5 grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
              <p className="text-blueGray-700 text-sm flex">
                <p className="font-semibold">Created at: </p>
                <p className="pl-2">
                  {new Date(Date.parse(uploadCert?.createdAt)).toDateString()}
                </p>
              </p>
              <p className="text-blueGray-700 text-sm flex">
                <p className="font-semibold">Reference No: </p>
                <p className="pl-2">{router.query.id}</p>
              </p>
              <p className="text-blueGray-700 text-sm flex">
                <p className="font-semibold">Updated at: </p>
                <p className="pl-2">
                  {new Date(Date.parse(uploadCert?.updatedAt)).toString()}
                </p>
              </p>
              <p className="text-blueGray-700 text-sm flex">
                <p className="font-semibold">Organization id: </p>
                <p className="pl-2">{uploadCert?.userId}</p>
              </p>
            </div>
            <hr className="mb-10" />
            <p className="mb-5 text-blueGray-700 text-left pb-5 max-w-4xl mx-auto">
              <h1 className="-ml-6 font-semibold mb-2">Description:</h1>
              {reactHtmlParser(uploadCert?.data)}
            </p>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-3xl md:text-4xl mt-4 mb-4 font-bold font-heading">
            <span className="text-blue-600"> eCert </span>
            <span>Verifying</span>
            <p className="text-red-600 text-sm">Invalid certification</p>
          </h2>
        </div>
      )}
    </section>
  );
};
