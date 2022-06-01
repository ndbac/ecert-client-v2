import type { NextPage } from "next";
import Head from "next/head";

import { NotFound } from "../components/404/404";

const SignUpPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>eCert - Electronic Certification</title>
        <meta name="description" content="Electronic Certification" />
        <link rel="icon" href="/favicon2.ico" />
      </Head>

      <NotFound />
    </div>
  );
};

export default SignUpPage;
