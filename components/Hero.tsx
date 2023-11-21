import Image from "next/image";
const Hero = () => {
  return (
    <div>
      <div className="h-screen bg-hero bg-cover bg-center grid content-center">
        <div className="relative overflow-hidden ">
          <div className="relative z-10">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
              <div className="max-w-2xl  ">
                <div className="mt-5 max-w-2xl">
                  <h1 className="block font-extrabold uppercase text-[#FBB03B] text-4xl md:text-5xl lg:text-7xl dark:text-gray-200">
                    Cagayan Valley Startup Week 2023
                  </h1>
                </div>

                <div className="mt-5 max-w-3xl">
                  <p className="text-2xl font-bold text-white dark:text-gray-400">
                    Beyond Boundaries: Acceleration through Innovation and
                    Collaboration
                  </p>
                </div>

                <div className="mt-5 max-w-3xl">
                  <p className="text-lg uppercase font-bold text-white dark:text-gray-400">
                    December 14-15, 2023
                  </p>
                </div>

                <div className="mt-8 gap-3">
                  <a
                    className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="/register"
                  >
                    Register Now!
                    <svg
                      className="flex-shrink-0 w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
