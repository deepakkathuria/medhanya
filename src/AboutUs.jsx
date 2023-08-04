import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-gradient-to-r from-cyan-200 to-blue-500">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
        <h1 className="max-w-2xl mb-4 text-4xl text-black font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          About Us
          </h1>        

          <p className="max-w-2xl mb-8 font-light text-black lg:mb-5 md:text-lg lg:text-xl">
            With pleasure we introduce ourselves, <b>MEDHANYA ENTERPRISES</b> , a
            trading company in the industry. We are specialized in indenting and
            trading of quality Bulk Drugs, Chemicals, Excipients, Food Additives
            & Sweeteners. API's and are poised to achieve excellence on strength
            of its skilled and motivated and enthusiastic team, concern for
            safety, health, environment and commitment to do business with
            ethics. Value creation for our customers is at the core of what we
            do. We achieve this through partnership with our customers and
            supporting them in meeting their goals in terms of quality, time,
            costs & after sales. We have made our presence felt in the highly
            competitive field of APIs, Food Additives and Sweeteners by offering
            customers the highest quality, cost- competitive products with a
            short development time.
          </p>
          {/* <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a> */}
          {/* <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Speak to Sales
          </a> */}
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img className="rounded-xl"
            src="https://res.cloudinary.com/dqdaz8ni5/image/upload/v1691114227/WhatsApp_Image_2023-08-03_at_23.58.01_ocnkxu.jpg"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
