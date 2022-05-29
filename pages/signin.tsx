import type { NextPage } from "next";
import Head from "next/head";

import { SignIn } from "../components/SignIn/SignIn";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>eCert - Electronic Certification</title>
        <meta name="description" content="Electronic Certification" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SignIn />
    </div>
  );
};

export default Home;
