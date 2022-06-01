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
              <span className="text-blue-600"> life easier </span>
              <span>for verifying and storing certifications</span>
            </h2>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-16">
            <p className="text-blueGray-400 leading-loose">
              We are confident to be the pioneer in providing eCert, an
              electronic certification encrypted by blockchain. To solve the
              problems related to certifications issued by enterprises, eCert
              provides a simple and convenient certification management tool,
              saving time and money through charts, reports, and certification
              search engines.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 -mb-6 text-center">
          <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
            <div className="p-12 bg-white shadow rounded">
              <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                1
              </div>
              <div className="h-48 mx-auto my-4">
                <Image src={WorkTVPhoto} alt="" />
              </div>
              <h3 className="mb-2 font-bold font-heading">Organization</h3>
              <p className="text-sm text-blueGray-400 leading-relaxed">
                Create authorized ceritifications for users.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
            <div className="p-12 bg-white shadow rounded">
              <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                2
              </div>
              <div className="h-48 mx-auto my-4">
                <Image
                  src={PeopleWatchingPhoto}
                  alt=""
                />
              </div>
              <h3 className="mb-2 font-bold font-heading">Company</h3>
              <p className="text-sm text-blueGray-400 leading-relaxed">
                Verify whether provided certifications are valid.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 px-3 mb-6">
            <div className="p-12 bg-white shadow rounded">
              <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                3
              </div>
              <div className="h-48 mx-auto my-4">
                <Image src={FinancialReportPhoto} alt="" />
              </div>

              <h3 className="mb-2 font-bold font-heading">Individual user</h3>
              <p className="text-sm text-blueGray-400 leading-relaxed">
                Store and send copy of certifications to companies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
