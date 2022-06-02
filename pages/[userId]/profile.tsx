import type { NextPage } from "next";
import Head from "next/head";

import { Profile } from "../../components/Profile/Profile";
import { Navigation } from "../../components/Navigation/Navigation";
import { Footer } from "../../components/Footer/Footer";

const SignUpPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>eCert - Electronic Certification</title>
        <meta name="description" content="Electronic Certification" />
        <link rel="icon" href="/favicon2.ico" />
      </Head>
      <Navigation />
      <Profile />
      <Footer />
    </div>
  );
};

export default SignUpPage;
