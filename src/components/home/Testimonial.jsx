import React from "react";

const TestimonialSection = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-200 to-blue-400">
      <div className="backdrop-blur-sm bg-white/30  px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <figure className="max-w-screen-md mx-auto">
          {/* <svg
            className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg> */}
          <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-white dark:text-white md:text-4xl">
TESTIMONIAL          </h2>
          <blockquote>
          
            <p className="text-1xl font-medium text-gray-900 dark:text-white">
              "Medhanya is a top-notch trading company that stands out in the industry.
              Their dedicated team, commitment to ethical business practices,
              and focus on customer value creation make them a reliable partner
              for sourcing quality Bulk Drugs, Chemicals, Excipients, Food
              Additives & Sweeteners, and API's. Their quick product development
              time and competitive pricing further elevate their position in the
              market. Highly recommended!"
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            {/* <img
              className="w-6 h-6 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
              alt="profile picture"
            /> */}
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <div className="pr-3 font-medium text-gray-900 dark:text-white">
                - Anonymous
              </div>
              <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                {/* CEO at Tanwar pvt.ltd */}
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
</div>  
);
};

export default TestimonialSection;
