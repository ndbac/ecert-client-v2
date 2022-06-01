import type { NextPage } from "next";
import Head from "next/head";

import { Certification } from "../../components/Certification/Certification";
import { Navigation } from "../../components/Navigation/Navigation";
import { Footer } from "../../components/Footer/Footer";

const CertificationPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>eCert - Electronic Certification</title>
        <meta name="description" content="Electronic Certification" />
        <link rel="icon" href="/favicon2.ico" />
      </Head>

      <Navigation />
      <Certification />
      <Footer />
    </div>
  );
};

export default CertificationPage;
