export const UploadCerti = () => {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <div className="max-w-md mb-8 mx-auto">
            <span className="text-sm text-blueGray-400">Contact Us</span>
            <h2 className="mt-2 text-4xl font-bold font-heading">
              We will be glad to hear from you!
            </h2>
          </div>
          <div>
            <form>
              <div className="mb-4 text-sm">
                <span className="mr-4 font-semibold">Departament:</span>
                <label className="mr-4">
                  <input
                    className="mr-1"
                    type="radio"
                    name="department"
                    value="1"
                    checked
                  />
                  <span>Support</span>
                </label>
                <label>
                  <input
                    className="mr-1"
                    type="radio"
                    name="department"
                    value="2"
                  />
                  <span>Sales</span>
                </label>
              </div>
              <div className="mb-4">
                <input
                  className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                  type="text"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-4">
                <input
                  className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="mb-4">
                <input
                  className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                  type="email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-blueGray-50 rounded outline-none"
                  placeholder="Message..."
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="flex px-2 bg-blueGray-50 rounded">
                  <input
                    className="hidden"
                    type="file"
                    placeholder="Choose file.."
                    name="Choose file"
                  />
                  <div className="my-1 ml-auto px-4 py-3 text-xs text-white font-semibold leading-none bg-blueGray-500 hover:bg-blueGray-600 rounded cursor-pointer">
                    Browse
                  </div>
                </label>
              </div>
              <div className="flex justify-between items-center">
                <label>
                  <input
                    className="mr-1"
                    type="checkbox"
                    name="terms"
                    value="1"
                  />
                  <span className="text-sm font-semibold">
                    I agree to terms and conditions.
                  </span>
                </label>
                <button
                  className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
