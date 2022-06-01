import type { NextPage } from "next";
import Head from "next/head";

import { Company } from "../components/Company/Company";
import { Navigation } from "../components/Navigation/Navigation";
import { Footer } from "../components/Footer/Footer";

const CompanyPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>eCert - Electronic Certification </title>
        <meta name="description" content="Electronic Certification" />
        <link rel="icon" href="/favicon2.ico" />
      </Head>

      <Navigation />
      <Company />
      <Footer />
    </div>
  );
};

export default CompanyPage;
