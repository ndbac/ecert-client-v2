import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  AppDispatch,
  RootState,
} from "../../redux/modules/common/common.interface";
import * as Yup from "yup";
import {
  DEFAULT_EMAIL_ADDRESS,
  DEFAULT_EMAIL_CONTACT,
} from "../../utils/defaultValues";
import {
  NotificationState,
  EEmailOption,
  EEmailType,
} from "../../redux/modules/notification/interfaces/notification.interface";
import { userSendEmail } from "../../redux/modules/notification/slices/notification.slice";

const formSchema = Yup.object({
  firstName: Yup.string()
    .max(20, "Your first name must be lower than 30 characters")
    .required("Please enter your first name"),
  lastName: Yup.string()
    .max(20, "Your last name must be lower than 30 characters")
    .required("Please enter your last name"),
  from: Yup.string()
    .email("Your email is not valid")
    .required("Please enter your email address"),
  text: Yup.string().required("Please enter your message"),
});

export const Contact = () => {
  const dispatch = useDispatch<AppDispatch>();
  const store = useSelector<RootState>(
    (state) => state.notiReducer
  ) as NotificationState;
  const { loading, serverErr } = store;

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      from: "",
      text: "",
    },
    onSubmit: (values) => {
      const message = `Name: ${values.firstName} ${values.lastName}\nEmail: ${values.from}\nInfo: ${values.text}`;
      const data = {
        from: values.from,
        to: DEFAULT_EMAIL_ADDRESS,
        subject: DEFAULT_EMAIL_CONTACT,
        text: message,
        option: EEmailOption.TEXT,
        type: EEmailType.NOTIFICATION,
      };
      dispatch(userSendEmail(data));
      formik.resetForm();
    },
    validationSchema: formSchema,
  });

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl lg:max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold font-heading">Get in touch!</h2>
            <p className="text-blueGray-400">
              We will be glad to hear from you
            </p>
          </div>
          <div className="flex flex-wrap -mx-3 text-center">
            <div className="w-1/2 lg:w-1/3 px-3 mb-12">
              <svg
                className="mb-6 h-8 w-8 mx-auto text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              <div className="leading-relaxed">
                <span className="text-sm text-blueGray-400">Phone</span>
                <p>+ 84 886-449-565</p>
              </div>
            </div>
            <div className="w-1/2 lg:w-1/3 px-3 mb-12">
              <svg
                className="mb-6 h-8 w-8 mx-auto text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              <div className="leading-relaxed">
                <span className="text-sm text-blueGray-400">E-mail</span>
                <p>helper@ecert.com</p>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-3 mb-12">
              <svg
                className="mb-6 h-8 w-8 mx-auto text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              <div className="leading-relaxed">
                <span className="text-sm text-blueGray-400">Address</span>
                <p>Room 205 - B1, School of ICT</p>
                <p>Hanoi University of Science and Technology</p>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-4 text-sm">
                <span className="mr-4 font-semibold">Contact Form:</span>
                {serverErr && (
                  <div className="text-red-500 font-semibold text-xl text-center pb-2">
                    Something wrong happened. Please try again!
                  </div>
                )}
              </div>
              <div className="flex flex-wrap mb-4 -mx-3">
                <div className="w-full h-full lg:w-1/2 px-3 mb-4 lg:mb-0">
                  <div className="mb-4">
                    <input
                      className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                      type="text"
                      placeholder="First Name"
                      id="firstName"
                      name="firstName"
                      onChange={formik.handleChange("firstName")}
                      value={formik.values.firstName}
                      onBlur={formik.handleBlur("firstName")}
                    />
                    <p className="mb-2 ml-6 text-red-500 font-semibold">
                      {" "}
                      {formik.touched.firstName && formik.errors.firstName}{" "}
                    </p>
                  </div>
                  <div className="mb-4">
                    <input
                      className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                      type="text"
                      placeholder="Last Name"
                      id="lastName"
                      name="lastName"
                      onChange={formik.handleChange("lastName")}
                      value={formik.values.lastName}
                      onBlur={formik.handleBlur("lastName")}
                    />
                    <p className="mb-2 ml-6 text-red-500 font-semibold">
                      {" "}
                      {formik.touched.lastName && formik.errors.lastName}{" "}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <input
                      className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                      type="email"
                      placeholder="name@example.com"
                      id="from"
                      name="from"
                      onChange={formik.handleChange("from")}
                      value={formik.values.from}
                      onBlur={formik.handleBlur("from")}
                    />
                    <p className="mb-2 ml-6 text-red-500 font-semibold">
                      {" "}
                      {formik.touched.from && formik.errors.from}
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 px-3">
                  <textarea
                    className="w-full h-full p-4 text-xs font-semibold leading-none resize-none bg-blueGray-50 rounded outline-none"
                    placeholder="Message..."
                    id="text"
                    name="text"
                    onChange={formik.handleChange("text")}
                    value={formik.values.text}
                    onBlur={formik.handleBlur("text")}
                  ></textarea>
                  <p className="mb-2 ml-6 text-red-500 font-semibold">
                    {" "}
                    {formik.touched.text && formik.errors.text}{" "}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <button
                  className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
                  type="submit"
                >
                  <span className="mr-2">
                    {loading ? "Sending" : "Send message"}
                  </span>
                </button>
              </div>
            </form>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14896.937378123648!2d105.8302404!3d21.0233073!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab7bcf10bcfb%3A0x1e1c60e2910f9d1e!2seCert%20-%20Electronic%20Certification!5e0!3m2!1svi!2s!4v1654752525271!5m2!1svi!2s"
            width="600"
            height="450"
            className="w-full pt-8"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
