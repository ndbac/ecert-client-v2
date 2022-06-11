import type { NextPage } from "next";
import { Navigation } from "../components/Navigation/Navigation";
import Discovery from "../components/Discovery/Discovery";
import { Footer } from "../components/Footer/Footer";

const DiscoveryPage: NextPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navigation />
      <Discovery />
      <Footer />
    </div>
  );
};

export default DiscoveryPage;
