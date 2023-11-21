import React from "react";
import Image from "next/image";
import Title from "@/components/Title";
import { TOPICS } from "@/constants";
const page = () => {
  return (
    <div>
      <Title
        title="TOPICS"
        subtitle="Get ready for a week filled with inspiration, knowledge sharing, and opportunities to propel your startup journey to new heights at Cagayan Valley Startup Week 2023!"
      />
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid lg:grid-cols-3 gap-6">
          {TOPICS.map((topic) => (
            <div className="group relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              <div className="flex-shrink-0 relative w-full rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
                <Image
                  className="w-full h-full absolute top-0 start-0 object-cover"
                  src={topic.bg}
                  width={1000}
                  height={1000}
                  alt="Image Description"
                />
              </div>

              <div className="absolute top-0 inset-x-0 z-10">
                <div className="p-4 flex flex-col h-full sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Image
                        className="h-[2.875rem] w-[2.875rem] border-2 border-white rounded-full"
                        src={topic.profile}
                        width={1000}
                        height={1000}
                        alt="Image Description"
                      />
                    </div>
                    <div className="ms-2.5 sm:ms-4">
                      <h4 className="font-semibold text-white">
                        {topic.speaker}
                      </h4>
                      <p className="text-xs text-white/[.8]">{topic.time}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 inset-x-0 z-10">
                <div className="flex flex-col h-full p-4 sm:p-6">
                  <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
                    {topic.title}
                  </h3>
                  <p className="mt-2 text-white/[.8]">{topic.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
