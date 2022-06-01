import type { NextPage } from "next";
import Head from "next/head";

import { Profile } from "../../components/Profile/Profile";

const SignUpPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>eCert - Electronic Certification</title>
        <meta name="description" content="Electronic Certification" />
        <link rel="icon" href="/favicon2.ico" />
      </Head>

      <Profile />
    </div>
  );
};

export default SignUpPage;
