import type { NextPage } from "next";
import Head from "next/head";

import { NavigationForGuest } from "../components/Navigation/NavigationForGuest";
import { Header } from "../components/Homepage/Header";
import { HowItWork } from "../components/Homepage/HowItWork";
import { Pricing } from "../components/Homepage/Pricing";
import { Footer } from "../components/Footer/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>eCert - Electronic Certification</title>
        <meta name="description" content="Electronic Certification" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavigationForGuest />
      <Header />
      <HowItWork />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;
