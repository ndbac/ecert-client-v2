import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import {
  AppDispatch,
  RootState,
} from "../../redux/modules/common/common.interface";
import { uploadCertAction } from "../../redux/modules/certification/slices/certification.slice";
import { CertState } from "../../redux/modules/certification/interfaces/certification.interface";
import Dropzone from "react-dropzone";

const formSchema = Yup.object({
  data: Yup.string().required("Please enter data"),
  subject: Yup.string().required("Please enter subject"),
  name: Yup.string().required("Please enter name"),
  email: Yup.string().email('Email is not valid').required("Please enter email"),
  file: Yup.string().required("Please provide file"),
});

export const UploadCerti = () => {
  const dispatch = useDispatch<AppDispatch>();
  const formik = useFormik({
    initialValues: {
      data: "",
      subject: "",
      name: "",
      email: "",
      file: "",
    },
    onSubmit: (values) => {
      dispatch(uploadCertAction(values));
    },
    validationSchema: formSchema,
  });

  const storeData = useSelector<RootState>(
    (store) => store.certiReducer
  ) as CertState;
  const { isCreated, loading, serverErr } = storeData;
  const router = useRouter();
  if (isCreated) {
    router.push(`/`);
  }

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <div className="max-w-md mb-8 mx-auto">
            <span className="text-sm text-blueGray-400">Contact Us</span>
            <h2 className="mt-2 text-4xl font-bold font-heading">
              Realeasing your certification with eCert
            </h2>
          </div>
          <div>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-4 text-sm">
                <span className="mr-4 font-semibold">Type of storing:</span>
                <label className="mr-4">
                  <input
                    className="mr-1"
                    type="radio"
                    name="department"
                    value="1"
                    defaultChecked
                  />
                  <span>Standard</span>
                </label>
                <label>
                  <input
                    className="mr-1"
                    type="radio"
                    name="department"
                    value="2"
                  />
                  <span>Blockchain</span>
                </label>
              </div>
              <div className="mb-4 text-left">
                <p className="mb-2 font-semibold text-red-500 text-sm ml-4">{formik.touched.subject && formik.errors.subject}</p>
                <input
                  className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                  type="text"
                  placeholder="Title"
                  value={formik.values.subject}
                  onChange={formik.handleChange("subject")}
                  onBlur={formik.handleBlur("subject")}
                />
              </div>
              <div className="mb-4 text-left">
                <p className="mb-2 font-semibold text-red-500 text-sm ml-4">{formik.touched.name && formik.errors.name}</p>
                <input
                  className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                  type="text"
                  placeholder="Name"
                  value={formik.values.name}
                  onChange={formik.handleChange("name")}
                  onBlur={formik.handleBlur("name")}
                />
              </div>
              <div className="mb-4 text-left">
                <p className="mb-2 font-semibold text-red-500 text-sm ml-4">{formik.touched.email && formik.errors.email}</p>
                <input
                  className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                  type="email"
                  placeholder="name@example.com"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                />
              </div>
              <div className="mb-4 text-left">
                <p className="mb-2 font-semibold text-red-500 text-sm ml-4">{formik.touched.data && formik.errors.data}</p>
                <textarea
                  className="w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-blueGray-50 rounded outline-none"
                  placeholder="Other informations..."
                  value={formik.values.data}
                  onChange={formik.handleChange("data")}
                  onBlur={formik.handleBlur("data")}
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="flex px-2 bg-blueGray-50 rounded">
                  <div className="py-6">
                    <Dropzone
                      onDrop={(acceptedFiles) => {
                        formik.setFieldValue("file", acceptedFiles[0]);
                      }}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <div className="container">
                          <div
                            {...getRootProps({
                              className: "dropzone",
                              onDrop: (event) => event.stopPropagation(),
                            })}
                          >
                            <input {...getInputProps()} />
                            <p className="text-gray-400 px-2 text-xs font-semibold cursor-pointer hover:text-gray-700">
                              Upload certification
                            </p>
                          </div>
                        </div>
                      )}
                    </Dropzone>
                  </div>
                </label>
              </div>
              <div className="flex justify-between items-center">
                <label>
                  <input
                    className="mr-1"
                    type="checkbox"
                    name="terms"
                    value="1"
                    checked
                  />
                  <span className="text-sm font-semibold">
                    By submit your certification. You agree to our terms and conditions.
                  </span>
                </label>
                <button
                  className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
                  type="submit"
                >
                  {loading ? "Uploading" : "Submit"}
                </button>
              </div>
              {serverErr && (
                <span className="text-sm text-red-400">
                  Cannot upload certification. Please try again.
                </span>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
