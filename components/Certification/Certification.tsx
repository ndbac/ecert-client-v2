import Image from "next/image";

import MetisDashboardSquarePhoto from "../../public/assets/placeholders/metis-dashboard-square.png";

export const Certification = () => {
  return (
    <section className="py-12 md:pt-16 md:pb-12 mb-12">
      <div className="container px-4 mx-auto">
        <div className="max-w-lg mx-auto mb-8 text-center">
          <span className="inline-block text-xs py-1 px-3 text-blue-700 font-semibold bg-blue-100 rounded-xl">
            Lorem Ipsum
          </span>
          <h2 className="my-3 text-3xl md:text-4xl text-blueGray-900 font-bold font-heading">
            Lorem ipsum dolor sit amet consectutar domor
          </h2>
          <p className="text-blueGray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus
            eget justo et iaculis.
          </p>
        </div>
        <div className="text-center mb-12">
          <button className="inline-block rounded-full h-2 w-2 mr-2 bg-blueGray-200"></button>
          <button className="inline-block rounded-full h-2 w-2 mr-2 bg-blueGray-200"></button>
          <button className="inline-block rounded-full h-2 w-2 mr-2 bg-blue-600"></button>
          <button className="inline-block rounded-full h-2 w-2 bg-blueGray-200"></button>
        </div>
        <div className="relative max-w-6xl mx-auto text-center">
          <Image
            className="object-cover w-full h-full"
            src={MetisDashboardSquarePhoto}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
