import Title from "@/components/Title";
import { DAY1 } from "@/constants";
const page = () => {
  return (
    <div>
      <Title />
      <div className="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav
            className="-mb-0.5 flex justify-center space-x-6"
            aria-label="Tabs"
            role="tablist"
          >
            <button
              type="button"
              className="uppercase hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 active"
              id="horizontal-alignment-item-1"
              data-hs-tab="#horizontal-alignment-1"
              aria-controls="horizontal-alignment-1"
              role="tab"
            >
              December 13
            </button>
            <button
              type="button"
              className="uppercase hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
              id="horizontal-alignment-item-2"
              data-hs-tab="#horizontal-alignment-2"
              aria-controls="horizontal-alignment-2"
              role="tab"
            >
              December 14
            </button>
            <button
              type="button"
              className="uppercase hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
              id="horizontal-alignment-item-3"
              data-hs-tab="#horizontal-alignment-3"
              aria-controls="horizontal-alignment-3"
              role="tab"
            >
              December 15
            </button>
          </nav>
        </div>

        <div className="mt-10">
          <div
            id="horizontal-alignment-1"
            role="tabpanel"
            aria-labelledby="horizontal-alignment-item-1"
          >
            <h2 className="text-3xl  text-gray-700 font-bold lg:text-4xl dark:text-white uppercase">
              December 13 | Friday
            </h2>

            <div className="my-10">
              {DAY1.map((one, index) => (
                <div
                  key={index}
                  className="group mb-3 flex flex-col rounded-md bg-white border-2 border-[#000] shadow-sm  hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  <div className="">
                    <div className="px-4  md:px-5">
                      <h1 className="my-3">{one.time} </h1>
                    </div>
                    <div className={`bg-gray-900 max-w-full p-4  md:p-5`}>
                      <div className="">
                        {one.title.map((title, index) => (
                          <h3 key={index} className="group-hover:text-[#F36F1B] font-semibold text-white dark:group-hover:text-gray-400 dark:text-gray-200 ">
                            {title}
                          </h3>
                        ))}
                        {one.speakers.map((speaker, index) => (
                          <p key={index} className="text-sm text-white">
                            {speaker}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            id="horizontal-alignment-2"
            className="hidden"
            role="tabpanel"
            aria-labelledby="horizontal-alignment-item-2"
          >
            <p className="text-gray-500 dark:text-gray-400">
              This is the{" "}
              <em className="font-semibold text-gray-800 dark:text-gray-200">
                second
              </em>{" "}
              item's tab body.
            </p>
          </div>
          <div
            id="horizontal-alignment-3"
            className="hidden"
            role="tabpanel"
            aria-labelledby="horizontal-alignment-item-3"
          >
            <p className="text-gray-500 dark:text-gray-400">
              This is the{" "}
              <em className="font-semibold text-gray-800 dark:text-gray-200">
                third
              </em>{" "}
              item's tab body.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
