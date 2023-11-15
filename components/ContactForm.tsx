"use client";
import { useState } from "react";

export const ContactForm = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [error, setError] = useState([]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // console.log("First name", firstname);
    // console.log("Last name", lastname);
    // console.log("Email", lastname);
    // console.log("Phone Number", lastname);

    const res = await fetch("api/contacts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        phonenumber,
      }),
    });

    const { msg } = await res.json();
    setError(msg);
    console.log(error);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="hs-firstname-contacts-1" className="sr-only">
                First Name
              </label>
              <input
                type="text"
                name="hs-firstname-contacts-1"
                id="hs-firstname-contacts-1"
                className="py-3 px-4 block w-full border-gray-250 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="First Name"
                onChange={(e) => setFirstname(e.target.value)}
                value={firstname}
              />
            </div>

            <div>
              <label htmlFor="hs-lastname-contacts-1" className="sr-only">
                Last Name
              </label>
              <input
                type="text"
                name="hs-lastname-contacts-1"
                id="hs-lastname-contacts-1"
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="Last Name"
                onChange={(e) => setLastname(e.target.value)}
                value={lastname}
              />
            </div>
          </div>

          <div>
            <label htmlFor="hs-email-contacts-1" className="sr-only">
              Email
            </label>
            <input
              type="email"
              name="hs-email-contacts-1"
              id="hs-email-contacts-1"
              autoComplete="email"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div>
            <label htmlFor="hs-phone-number-1" className="sr-only">
              Phone Number
            </label>
            <input
              type="text"
              name="hs-phone-number-1"
              id="hs-phone-number-1"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="Phone Number"
              onChange={(e) => setPhonenumber(e.target.value)}
              value={phonenumber}
            />
          </div>

          <div>
            <label htmlFor="hs-about-contacts-1" className="sr-only">
              Details
            </label>
            <textarea
              id="hs-about-contacts-1"
              name="hs-about-contacts-1"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="Details"
            ></textarea>
          </div>
        </div>

        <div className="mt-4 grid">
          <button
            type="submit"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            Register
          </button>
        </div>

        <div className="mt-3 text-center">
          <p className="text-sm text-gray-500">
            We'll get back to you in 1-2 business days.
          </p>
        </div>
      </form>
    </div>
  );
};
