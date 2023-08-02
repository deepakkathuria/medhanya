import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";

const ContactUs = () => {
  const [isFormFocused, setIsFormFocused] = useState(false);

  useEffect(() => {
    const formInputs = document.querySelectorAll(".form-input");
    formInputs.forEach((input) => {
      input.addEventListener("focus", () => setIsFormFocused(true));
      input.addEventListener("blur", () => setIsFormFocused(false));
    });
  }, []);

  return (
    <section className="bg-gradient-to-r from-cyan-200 to-blue-500 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="lg:w-1/2 md:w-2/3 bg-white rounded-lg p-8 flex flex-col md:ml-auto md:mr-auto w-full mt-10 md:mt-0 relative z-10 shadow-md border-2 border-black">
          <h2 className="text-gray-900 text-2xl mb-4 font-semibold text-center">
            Contact Us
          </h2>
          <Fade bottom cascade>
            <div className="relative mb-2">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="name"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out form-input"
              />
            </div>
            <div className="relative mb-2">
              <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
                Mobile No
              </label>
              <input
                type="phone"
                id="phone"
                name="phone"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out form-input"
              />
            </div>
            <div className="relative mb-2">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out form-input"
              />
            </div>
            <div className="relative mb-2">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-24 text-base outline-none text-gray-700 py-2 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out form-input"
              ></textarea>
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full">
              Submit
            </button>
            <p className="text-xs text-gray-500 mt-3 text-center">
              {isFormFocused ? "Form is focused!" : ""}
            </p>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
