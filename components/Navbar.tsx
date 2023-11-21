"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAVIGATIONS } from "@/constants";
const Navbar = () => {
  useEffect(() => {
    require("preline");
  }, []);

  const currentRoute = usePathname();
  const activeStyle = "text-[#FBB03B]";
  const nonActiveStyle = "text-white";

  return (
    <>
      {/* <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-gradient-to-r from-[#1B2D5F]  to-[#83143C]  text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700 sticky top-0"> */}
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-[#322979]  text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700 sticky top-0">
        <nav
          className="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 "
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <a
              className="uppercase flex-none text-xl font-semibold dark:text-white"
              href="/"
              aria-label="Brand"
            >
              <Image
                className="rounded-xl"
                src="/header logo white.png"
                width={250}
                height={100}
                alt="about"
              />
            </a>
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div className="uppercase flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
              {/* <a
                className="font-medium text-blue-600 sm:py-6 dark:text-blue-500"
                href="#"
                aria-current="page"
              >
                Home
              </a> */}

              <Link
                href="/"
                className={`${
                  currentRoute === "/" ? activeStyle : nonActiveStyle
                } font-medium sm:py-6 dark:text-blue-500`}
                aria-current="page"
              >
                Home
              </Link>

              <Link
                href="/schedule"
                className={`${
                  currentRoute === "/schedule" ? activeStyle : nonActiveStyle
                } flex items-center gap-x-2 font-medium hover:text-[#FBB03B] sm:border-l sm:my-6 sm:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500`}
                aria-current="page"
              >
                Schedule
              </Link>

              <Link
                href="/speakers"
                className={`${
                  currentRoute === "/speakers" ? activeStyle : nonActiveStyle
                } flex items-center gap-x-2 font-medium hover:text-[#FBB03B] sm:border-l sm:my-6 sm:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500`}
                aria-current="page"
              >
                Speakers
              </Link>

              <Link
                href="/topics"
                className={`${
                  currentRoute === "/topics" ? activeStyle : nonActiveStyle
                } flex items-center gap-x-2 font-medium hover:text-[#FBB03B] sm:border-l sm:my-6 sm:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500`}
                aria-current="page"
              >
                Topics
              </Link>

              <Link
                href="/register"
                className={`${
                  currentRoute === "/register" ? activeStyle : nonActiveStyle
                } flex items-center gap-x-2 font-medium hover:text-[#FBB03B] sm:border-l sm:my-6 sm:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500`}
                aria-current="page"
              >
                Register
              </Link>

              {/* <a
                className="flex items-center gap-x-2 font-medium text-white hover:text-[#FBB03B ] sm:border-l sm:border-gray-300 sm:my-6 sm:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500"
                href="#"
              >
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                </svg>
                Log in
              </a> */}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
