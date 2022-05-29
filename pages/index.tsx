import type { NextPage } from "next";
import Head from "next/head";
import { NavigationForGuest } from "../components/Navigation/NavigationForGuest";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>eCert - Electronic Certification</title>
        <meta name="description" content="Electronic Certification" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavigationForGuest />
    </div>
  );
};

export default Home;
