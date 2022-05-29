import Image from "next/image";

import WorkTVPhoto from "../../public/assets/illustrations/work-tv.png";
import PeopleWatchingPhoto from "../../public/assets/illustrations/people-watching.png";
import FinancialReportPhoto from "../../public/assets/illustrations/financial-report.png";

export const HowItWork = () => {
  return (
    <section className="py-20 mt-32">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
          <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              <span>Make your</span>
              <span className="text-blue-600">life easier</span>
              <span>for marketing sales and customer support</span>
            </h2>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-16">
            <p className="text-blueGray-400 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              luctus eget justo et iaculis. Quisque vitae nulla malesuada,
              auctor arcu vitae, luctus nisi. Sed elementum vitae ligula id
              imperdiet.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 -mb-6 text-center">
          <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
            <div className="p-12 bg-white shadow rounded">
              <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                1
              </div>
              <Image className="h-48 mx-auto my-4" src={WorkTVPhoto} alt="" />
              <h3 className="mb-2 font-bold font-heading">Donec fermentum</h3>
              <p className="text-sm text-blueGray-400 leading-relaxed">
                Sed ac magna sit amet risus tristique interdum at vel velit. In
                hac habitasse platea dictumst.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
            <div className="p-12 bg-white shadow rounded">
              <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                2
              </div>
              <Image
                className="h-48 mx-auto my-4"
                src={PeopleWatchingPhoto}
                alt=""
              />
              <h3 className="mb-2 font-bold font-heading">Donec fermentum</h3>
              <p className="text-sm text-blueGray-400 leading-relaxed">
                Sed ac magna sit amet risus tristique interdum at vel velit. In
                hac habitasse platea dictumst.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 px-3 mb-6">
            <div className="p-12 bg-white shadow rounded">
              <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                3
              </div>
              <Image
                className="h-48 mx-auto my-4"
                src={FinancialReportPhoto}
                alt=""
              />
              <h3 className="mb-2 font-bold font-heading">Donec fermentum</h3>
              <p className="text-sm text-blueGray-400 leading-relaxed">
                Sed ac magna sit amet risus tristique interdum at vel velit. In
                hac habitasse platea dictumst.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
