import Image from "next/image";
const Hero = () => {
  return (
    <div>
      <div className="">
        <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-700 via-violet-800 to-zinc-100">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8 grid content-center">
            {/* <div className="flex justify-center">
              <a
                className="group inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 ps-4 rounded-full shadow-md"
                href="../figma.html"
              >
                <p className="me-2 inline-block  text-sm">
                  Cagayan Valley Startup Week 2023
                </p>
              </a>
            </div> */}

            <div className="max-w-3xl text-center mx-auto">
              <Image
                className="rounded-xl"
                src="/Logo Red v1.1.png"
                width={500}
                height={500}
                alt="about"
              />
            </div>

            {/* <div className="max-w-3xl text-center mx-auto">
              <h1 className="block font-medium  text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Cagayan Valley Startup Week 2023
              </h1>
            </div> */}

            <div className="max-w-3xl text-center mx-auto">
              <p className="text-lg ">
                Innovate to Elevate: Acceleration through Innovation and
                Collaboration
              </p>
            </div>

            <div className="text-center">
              <a
                className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
                href="#"
              >
                Get started
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
  );
};

export default Hero;
