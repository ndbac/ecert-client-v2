import type { NextPage } from "next";
import Head from "next/head";

import { Navigation } from "../components/Navigation/Navigation";
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
        <link rel="icon" href="/favicon2.ico" />

        <meta
          name="description"
          content="Verifying with eCert make things easier and safer"
        />
        <meta name="keywords" content="" />

        <meta name="author" content="eCert" />
        <meta name="copyright" content="eCert" />
        <meta
          name="application-name"
          content="eCert - Electronic Certification"
        />

        <meta property="og:title" content="eCert - Electronic Certification" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/home.png" />
        <meta
          property="og:description"
          content="Verifying with eCert make things easier and safer"
        />

        <meta
          name="twitter:card"
          content="Verifying with eCert make things easier and safer"
        />
        <meta name="twitter:title" content="eCert - Electronic Certification" />
        <meta
          name="twitter:description"
          content="Verifying with eCert make things easier and safer"
        />
        <meta name="twitter:image" content="/home.png" />
      </Head>

      <Navigation />
      <Header />
      <HowItWork />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;
