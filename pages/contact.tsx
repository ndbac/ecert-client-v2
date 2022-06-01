import type { NextPage } from "next";
import Head from "next/head";

import { Navigation } from "../components/Navigation/Navigation";
import { Contact } from "../components/Contact/Contact";
import { Footer } from "../components/Footer/Footer";

const ContactPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>eCert - Electronic Certification</title>
        <meta name="description" content="Electronic Certification" />
        <link rel="icon" href="/favicon2.ico" />
      </Head>

      <Navigation />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
