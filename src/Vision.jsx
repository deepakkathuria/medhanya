import React from "react";

const Vision = () => {
  return (
    <section className="bg-gradient-to-r from-cyan-200 to-blue-500">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl text-black font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">
            Vision And Mission
          </h1>
          <p className="max-w-2xl mb-8 font-light text-black lg:mb-5 md:text-lg lg:text-l">
          <strong style={{ fontWeight: 'bold' }}>Vision:</strong>
            <br></br>
            To have positive impacton the lives of our customers and our team.    

            <br></br>
            <br></br>


            <strong style={{ fontWeight: 'bold' }}>Mission:</strong>
            <br></br>

         To help every customer have a positive memorable experience.


          <br></br>
          <br></br>

            <strong style={{ fontWeight: 'bold' }}>Goal:</strong>
            <br></br>

To be open ,honest and fair ... whatever we do, we do it right,and we do it together.
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
          <br></br>
          <img className="rounded-xl"
            // style={{ height: "410px" }}
            src="https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690975795/Vision_Mission_kwmh4t.jpg"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
};

export default Vision;
