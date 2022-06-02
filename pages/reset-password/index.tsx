import type { NextPage } from "next";
import { Footer } from "../../components/Footer/Footer";
import { Navigation } from "../../components/Navigation/Navigation";
import ResetPassword from "../../components/ResetPassword/ResetPassword";

const Reset: NextPage = () => {
  return (
    <>
      <Navigation />
      <ResetPassword />
      <Footer />
    </>
  );
};

export default Reset;
