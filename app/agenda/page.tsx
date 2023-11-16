import Image from "next/image";
import { DAY1 } from "@/constants";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const agenda = () => {
  return (
    <div className="bg-[linear-gradient(248deg,_rgba(185,_34,_46,_1)_0%,_rgba(1,_9,_79,_1)_50%,_rgba(244,_197,_66,_1)_100%)] bg-cover">
      <div className="max-w-[70rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto grid content-center">
        <div className="max-w-3xl text-center mx-auto">
          <Image
            className="rounded-xl"
            src="/logo.png"
            width={400}
            height={400}
            alt="about"
          />
        </div>

        <div className="my-10">
          <h1 className="block font-black uppercase text-center text-black text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
            Event Schedule
          </h1>
        </div>
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav
            className="-mb-0.5 flex justify-center space-x-6 "
            aria-label="Tabs"
            role="tablist"
          >
            <button
              type="button"
              className="hs-tab-active:font-semibold uppercase hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 active"
              id="horizontal-alignment-item-1"
              data-hs-tab="#horizontal-alignment-1"
              aria-controls="horizontal-alignment-1"
              role="tab"
            >
              December 13 | Wednesday
            </button>
            <button
              type="button"
              className="hs-tab-active:font-semibold uppercase hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
              id="horizontal-alignment-item-2"
              data-hs-tab="#horizontal-alignment-2"
              aria-controls="horizontal-alignment-2"
              role="tab"
            >
              December 14 | Thursday
            </button>
            <button
              type="button"
              className="hs-tab-active:font-semibold uppercase hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
              id="horizontal-alignment-item-3"
              data-hs-tab="#horizontal-alignment-3"
              aria-controls="horizontal-alignment-3"
              role="tab"
            >
              December 13 | Friday
            </button>
          </nav>
        </div>

        <div className="mt-3">
          <div
            id="horizontal-alignment-1"
            role="tabpanel"
            aria-labelledby="horizontal-alignment-item-1"
          >
            {DAY1.map((dayone,index) => (
              <div key={index} className={` group mb-3 flex flex-col bg-[#${dayone.bg}] border shadow-sm  hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}>
                <div className="p-4 md:p-5 ">
                  <div className="flex items-center h-24">
                    <div className="w-1/4">
                      <h3 className="h-max group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200 ">
                        {dayone.time}
                      </h3>
                    </div>
                    <div className="bg-gray-500 w-1 h-full mr-8"></div>
                    <div className="ps-3">
                      <p className="text-lg font-bold text-gray-500 ">
                        {dayone.title}
                      </p>

                      {dayone.speakers.map((speaker) => (
                        <p className="text-sm font-medium  text-gray-500">
                          {speaker}
                        </p>
                      ))}

                      <p className="text-sm italic text-gray-500">
                        {dayone.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            id="horizontal-alignment-2"
            className="hidden"
            role="tabpanel"
            aria-labelledby="horizontal-alignment-item-2"
          >
            <div className="group mb-3 flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              <div className="p-4 md:p-5 ">
                <div className="flex items-center h-24">
                  <div className="w-1/4">
                    <h3 className="h-max group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200 ">
                      8:30 AM - 10:00 AM
                    </h3>
                  </div>
                  <div className="bg-black w-1 h-full mr-8"></div>
                  <div className="ps-3">
                    <p className="text-lg font-bold text-gray-500 ">
                      Welcome and Inspirational Message
                    </p>
                    <p className="text-base italic text-gray-500">
                      Dr. Urdujah G. Alvarado, CSU President
                    </p>

                    <p className="text-base italic text-gray-500">
                      Hon. Maila Ting Que, Mayor, Tuguegarao City
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="group mb-3 flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              <div className="p-4 md:p-5 ">
                <div className="flex items-center h-24">
                  <div className="w-1/4">
                    <h3 className="h-max group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200 ">
                      8:30 AM - 10:00 AM
                    </h3>
                  </div>
                  <div className="bg-black w-1 h-full mr-8"></div>
                  <div className="ps-3">
                    <p className="text-lg font-bold text-gray-500 ">
                      Introduction to Overview of the Cagayan Valley Startup
                      Week 2023
                    </p>
                    <p className="text-base italic text-gray-500">
                      Dr. Urdujah G. Alvarado, CSU President
                    </p>

                    <p className="text-md italic text-gray-500">
                      Hon. Maila Ting Que, Mayor, Tuguegarao City
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="horizontal-alignment-3"
            className="hidden"
            role="tabpanel"
            aria-labelledby="horizontal-alignment-item-3"
          >
            <div className="group mb-3 flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              <div className="p-4 md:p-5 ">
                <div className="flex items-center h-24">
                  <div className="w-1/4">
                    <h3 className="h-max group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200 ">
                      8:30 AM - 10:00 AM
                    </h3>
                  </div>
                  <div className="bg-black w-1 h-full mr-8"></div>
                  <div className="ps-3">
                    <p className="text-lg font-bold text-gray-500 ">
                      Welcome and Inspirational Message
                    </p>
                    <p className="text-sm italic text-gray-500">
                      Dr. Urdujah G. Alvarado, CSU President
                    </p>

                    <p className="text-sm italic text-gray-500">
                      Hon. Maila Ting Que, Mayor, Tuguegarao City
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="group mb-3 flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              <div className="p-4 md:p-5 ">
                <div className="flex items-center h-24">
                  <div className="w-1/4">
                    <h3 className="h-max group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200 ">
                      8:30 AM - 10:00 AM
                    </h3>
                  </div>
                  <div className="bg-black w-1 h-full mr-8"></div>
                  <div className="ps-3">
                    <p className="text-lg font-bold text-gray-500 ">
                      Introduction to Overview of the Cagayan Valley Startup
                      Week 2023
                    </p>
                    <p className="text-sm italic text-gray-500">
                      Dr. Urdujah G. Alvarado, CSU President
                    </p>

                    <p className="text-sm italic text-gray-500">
                      Hon. Maila Ting Que, Mayor, Tuguegarao City
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default agenda;
