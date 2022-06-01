/* eslint-disable @next/next/no-img-element */
export const AboutUs = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto mb-12 text-center">
          <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl">
            Digital Certification Platform
          </span>
          <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading">
            eCert - Electronic Certification
          </h2>
          <p className="text-blueGray-400 leading-loose">
            The electronic certificates provided by eCert are applied blockchain
            technology, to encrypt the certificate to ensure integrity.
            Blockchain is a technology used in many fields of banking,
            auditing,...
          </p>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap lg:items-center max-w-lg lg:max-w-full mx-auto">
          <div className="w-full lg:w-1/4 p-3">
            <img
              className="rounded object-cover mx-auto"
              src="https://images.unsplash.com/photo-1464655646192-3cb2ace7a67e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
              alt=""
            />
          </div>
          <div className="w-full lg:w-2/4 flex flex-col">
            <div className="flex items-end">
              <div className="w-2/3 p-3">
                <img
                  className="rounded object-cover"
                  src="https://images.unsplash.com/photo-1529513342590-3b342bb7dd67?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                  alt=""
                />
              </div>
              <div className="w-1/3 p-3">
                <img
                  className="h-48 lg:h-32 rounded object-cover"
                  src="https://images.unsplash.com/photo-1489058535093-8f530d789c3b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                  alt=""
                />
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-1/3 p-3">
                <img
                  className="h-48 lg:h-32 rounded object-cover"
                  src="https://images.unsplash.com/photo-1602883440931-c268da6122b0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                  alt=""
                />
              </div>
              <div className="w-2/3 p-3">
                <img
                  className="rounded object-cover"
                  src="https://images.unsplash.com/photo-1464655646192-3cb2ace7a67e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/4 p-3">
            <img
              className="rounded object-cover mx-auto"
              src="https://images.unsplash.com/photo-1596003428876-436e282a94cd?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
