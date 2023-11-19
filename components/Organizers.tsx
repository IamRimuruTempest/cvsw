import Image from "next/image";
import { ORGANIZERS } from "@/constants";

const Organizers = () => {
  return (
    <div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6 md:mb-12">
          <h2 className="text-xl font-semibold md:text-2xl md:leading-tight text-gray-800 dark:text-gray-200">
            Our dedicated organizers from the SINAG Cagayan Valley Consortium
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3 lg:gap-6 ">
          {ORGANIZERS.map((organizer, index) => (
            <div
              key={index}
              className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800 grid content-center"
            >
              <Image
                className="h-auto  mx-auto text-gray-800 dark:text-gray-200"
                src={organizer.logo}
                width={50}
                height={50}
                alt={organizer.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Organizers;
