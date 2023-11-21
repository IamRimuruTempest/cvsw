import Image from "next/image";
import Title from "@/components/Title";
import { SPEAKERS } from "@/constants";
const page = () => {
  return (
    <div>
      <Title
        title="Speakers"
        subtitle="Get ready for a week filled with inspiration, knowledge sharing, and opportunities to propel your startup journey to new heights at Cagayan Valley Startup Week 2023!"
      />
      <div className="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Our team
          </h2>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Creative people
          </p>
        </div> */}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
          {SPEAKERS.map((speaker) => (
            <div className="text-center">
              <Image
                className="rounded-full w-24 h-24 mx-auto"
                src={speaker.profile}
                width={1000}
                height={1000}
                alt="Image Description"
              />
              <div className="mt-2 sm:mt-4">
                <h3 className="font-medium text-gray-800 dark:text-gray-200">
                  {speaker.speaker}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {speaker.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
