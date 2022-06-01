import VerifyAccount from "../../components/VerifyAccount/Verify";
import { Footer } from "../../components/Footer/Footer";
import { Navigation } from "../../components/Navigation/Navigation";
import { useEffect } from "react";
import { getItemFromLocalStorage } from "../../utils/helpers";
import { useRouter } from "next/router";

function Verify() {
  const router = useRouter();
  useEffect(() => {
    if (!getItemFromLocalStorage("token")) {
      router.push("/404");
    }
  });
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navigation />
      <VerifyAccount />
      <Footer />
    </div>
  );
}

export default Verify;
