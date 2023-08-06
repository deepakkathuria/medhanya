import React from "react";

const AboutSection = () => {
  return (
    <section
      className="bg-gradient-to-r from-cyan-200 to-blue-500"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dqdaz8ni5/image/upload/v1691136890/nasa-rTZW4f02zY8-unsplash_xu2a9t.jpg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        // paddingBottom: "0px", // Add extra padding to the bottom to prevent overlap
        marginBottom: "0.8px", // Add margin at the bottom to prevent overlap

        // backgroundSize: "cover",
    
      }}
    >
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-0 text-3xl text-black font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">
            About Us
          </h1>

          <p className="max-w-2xl  font-light text-white lg:mb-5 md:text-lg lg:text-ll">
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
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            className="rounded-xl"
            src="https://res.cloudinary.com/dqdaz8ni5/image/upload/v1691114227/WhatsApp_Image_2023-08-03_at_23.58.01_ocnkxu.jpg"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
