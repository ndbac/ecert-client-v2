import type { NextPage } from "next";
import Head from "next/head";

import { AboutUs } from "../components/AboutUs/AboutUs";
import { Navigation } from "../components/Navigation/Navigation";
import { Footer } from "../components/Footer/Footer";

const AboutUsPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>eCert - Electronic Certification</title>
        <meta name="description" content="Electronic Certification" />
        <link rel="icon" href="/favicon2.ico" />
      </Head>

      <Navigation />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
