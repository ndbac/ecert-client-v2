import type { NextPage } from "next";
import Head from "next/head";

import { SignUp } from "../components/SignUp/SignUp";
import { Footer } from "../components/Footer/Footer";
import { Navigation } from "../components/Navigation/Navigation";

const SignUpPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>eCert - Electronic Certification</title>
        <meta name="description" content="Electronic Certification" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <SignUp />
      <Footer />
    </div>
  );
};

export default SignUpPage;
