/* eslint-disable @next/next/no-img-element */
export const Company = () => {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-around">
          <div className="max-w-md md:mr-10 mb-10 md:mb-0">
            <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl">
              Our customers
            </span>
            <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading">
              eCert confident to be the leader in the digitalization era of
              certifications.
            </h2>
            <p className="text-blueGray-400 leading-loose">
              With 100% secure thanks to the blockchain technology
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="w-1/2 p-5">
              <img
                className="h-20 w-20 rounded-full object-cover object-top"
                src="https://i.postimg.cc/dQ5ydvWd/277765176-495035335656892-5823536176716662574-n-1.jpg"
                alt=""
              />
              <p className="mt-6 mb-2 text-xl">SOICT Innovation CLUB</p>
              <p className="text-sm text-blueGray-400">
                Hanoi University of Science and Technology
              </p>
            </div>
            <div className="w-1/2 p-5">
              <img
                className="h-20 w-20 rounded-full object-cover object-top"
                src="https://i.postimg.cc/mDzgHfh3/138930462-153566693207443-1392080068714763113-n.jpg"
                alt=""
              />
              <p className="mt-6 mb-2 text-xl">LeadMe - CVA Land</p>
              <p className="text-blueGray-400">Chu Van An High School</p>
            </div>
            <div className="w-1/2 p-5">
              <img
                className="h-20 w-20 rounded-full object-cover object-top"
                src="https://i.postimg.cc/X7D1sRvB/116433892-105393404608118-8963178335766636851-n.png"
                alt=""
              />
              <p className="mt-6 mb-2 text-xl">InfraTech</p>
              <p className="text-blueGray-400">
                Information Technology Company
              </p>
            </div>
            <div className="w-1/2 p-5">
              <img
                className="h-20 w-20 rounded-full object-cover object-top"
                src="https://i.postimg.cc/Bn9HZpYw/117661486-100223925144156-5036360913501109151-n.jpg"
                alt=""
              />
              <p className="mt-6 mb-2 text-xl">Blenda</p>
              <p className="text-blueGray-400">
                Non-Governmental Organization in Arts
              </p>
            </div>
            <div className="w-1/2 p-5">
              <img
                className="h-20 w-20 rounded-full object-cover object-top"
                src="https://i.postimg.cc/hv8zXW3y/246821232-111776621286851-4937863145830865753-n.png"
                alt=""
              />
              <p className="mt-6 mb-2 text-xl">Người nghiện Hust</p>
              <p className="text-blueGray-400">SOICT - HUST</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
