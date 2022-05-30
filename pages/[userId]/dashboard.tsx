import type { NextPage } from "next";
import Head from "next/head";

import { Navigation } from "../../components/Navigation/Navigation";
import { Footer } from "../../components/Footer/Footer";
import { Dashboard } from "../../components/Dashboard/Dashboard";

const ContactPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>eCert - Electronic Certification</title>
        <meta name="description" content="Electronic Certification" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default ContactPage;
