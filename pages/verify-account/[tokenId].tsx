import React from "react";
import VerifySuccess from "../../components/VerifyAccount/VerifySuccess";
import { Footer } from "../../components/Footer/Footer";
import { Navigation } from "../../components/Navigation/Navigation";
import { useEffect } from "react";
import { getItemFromLocalStorage } from "../../utils/helpers";
import { useRouter } from "next/router";
function VerifyToken() {
  const router = useRouter();
  useEffect(() => {
    if (!getItemFromLocalStorage("token")) {
      router.push("/404");
    }
  });
  return (
    <div>
      <Navigation />
      <VerifySuccess />
      <Footer />
    </div>
  );
}

export default VerifyToken;
