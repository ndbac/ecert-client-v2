import type { NextPage } from "next";
import Head from "next/head";

import { UploadCerti } from "../components/UploadCerti/UploadCerti";
import { NavigationForGuest } from "../components/Navigation/NavigationForGuest";
import { Footer } from "../components/Footer/Footer";

const UploadCertiPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>eCert - Electronic Certification</title>
        <meta name="description" content="Electronic Certification" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavigationForGuest />
      <UploadCerti />
      <Footer />
    </div>
  );
};

export default UploadCertiPage;
