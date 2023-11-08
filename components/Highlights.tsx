import Image from "next/image";

const Highlights = () => {
  return (
    <div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="text-center">
          <div className="grid lg:grid-cols-2 gap-3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <figure className="relative w-full h-60">
                <Image
                  className="w-full h-full absolute top-0 start-0 object-cover rounded-xl"
                  src="/sample v1.jpeg"
                  width={1000}
                  height={1000}
                  alt="about"
                />
              </figure>
              <figure className="relative w-full h-60">
                <Image
                  className="w-full h-full absolute top-0 start-0 object-cover rounded-xl"
                  src="/sample v1.jpeg"
                  width={1000}
                  height={1000}
                  alt="about"
                />
              </figure>
              <figure className="relative w-full h-60">
                <Image
                  className="w-full h-full absolute top-0 start-0 object-cover rounded-xl"
                  src="/sample v1.jpeg"
                  width={1000}
                  height={1000}
                  alt="about"
                />
              </figure>
              <figure className="relative w-full h-60">
                <Image
                  className="w-full h-full absolute top-0 start-0 object-cover rounded-xl"
                  src="/sample v1.jpeg"
                  width={1000}
                  height={1000}
                  alt="about"
                />
              </figure>
            </div>
            <figure className="relative w-full h-72 sm:h-96 lg:h-full">
              {/* <img className="w-full h-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1671726203394-491c8b574a0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80" alt="Image Description"> */}
              <Image
                className="w-full h-full absolute top-0 start-0 object-cover rounded-xl"
                src="/sample v1.jpeg"
                width={1000}
                height={1000}
                alt="about"
              />
            </figure>
          </div>

          <span className="mt-3 block text-sm text-center text-gray-500">
            Working process
          </span>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
