import type { NextPage } from "next";
import Head from "next/head";

import { SignIn } from "../components/SignIn/SignIn";

const SignInPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>eCert - Electronic Certification</title>
        <meta name="description" content="Electronic Certification" />
        <link rel="icon" href="/favicon2.ico" />
      </Head>

      <SignIn />
    </div>
  );
};

export default SignInPage;
