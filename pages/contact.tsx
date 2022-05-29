import type { NextPage } from "next";
import Head from "next/head";

import { NavigationForGuest } from "../components/Navigation/NavigationForGuest";
import { Contact } from "../components/Contact/Contact";
import { Footer } from "../components/Footer/Footer";

const ContactPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>eCert - Electronic Certification</title>
        <meta name="description" content="Electronic Certification" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavigationForGuest />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
