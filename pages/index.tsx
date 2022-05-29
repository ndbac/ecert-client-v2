import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>eCert - Electronic Certification</title>
        <meta name="description" content="Electronic Certification" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold underline">
          eCert - Electronic Certification
        </h1>
      </main>
    </div>
  );
};

export default Home;
