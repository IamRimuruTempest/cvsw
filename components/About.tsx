import Image from "next/image";
import { OBJECTIVES } from "@/constants";
const About = () => {
  return (
    <div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          <div>
            {/* <img className="rounded-xl" src="https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=900&q=80" alt="Image Description"> */}
            <Image
              className="rounded-xl"
              src="/sample v1.jpeg"
              width={1000}
              height={1000}
              alt="about"
            />
          </div>
          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                  Cagayan Valley Startup Week
                </h2>
              </div>
              <p className="text-gray-500">
                Cagayan Valley Startup Week is a regional event created to
                promote and support the growth of the startup ecosystem in the
                Cagayan Valley Region. The event is designed to bring together
                various stakeholders, including entreprenuers, researchers,
                government agencies, and investors, to address challenges and
                gaps within the region startup ecosystem.
              </p>

              <ul role="list" className="space-y-2 sm:space-y-4">
                {OBJECTIVES.map((objective, index) => (
                  <li className="flex space-x-3">
                    <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg
                        className="flex-shrink-0 h-3.5 w-3.5"
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
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>

                    <span className="text-sm sm:text-base text-gray-500">
                      {objective}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
