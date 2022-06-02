import type { NextPage } from "next";
import { Footer } from "../../components/Footer/Footer";
import { Navigation } from "../../components/Navigation/Navigation";
import NewPassword from "../../components/ResetPassword/NewPassword";

const ResetNewPassword: NextPage = () => {
  return (
    <>
      <Navigation />
      <NewPassword />
      <Footer />
    </>
  );
};
export default ResetNewPassword;
