import React from "react";

const Customers = () => {
  return (
    <>
      <section 
       className="bg-gradient-to-r from-cyan-200 to-blue-500  py-8 lg:py-20 mx-auto max-w-screen-xl px-4"
      // className="bg-white dark:bg-gray-900"
            // style={{
            //   backdropFilter: "blur(10px) !important", // Add the glass blur effect
            //   backgroundColor: "rgba(255, 255, 255, 0.3) !important", // Add transparency to create the glass effect
            //   borderRadius: "10px !important",
            // }}
      >
        <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4 backdrop-blur-sm bg-white/30">
          <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-white dark:text-white md:text-4xl">
            YOU’LL BE IN GOOD COMPANY
          </h2>
          <div className="grid-cols-4 gap-8 text-gray-500 sm:gap-12 md:grid-cols-4 lg:grid-cols-4 dark:text-gray-400  rounded-xl p-3 content-center justify-center justify-items-center items-center grid justify-items-center">
            <a href="#" className="flex justify-center items-center">
              <img
                src="https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800742/c1_slvwvo.jpg"
                alt=""
                style={{width:"200px",height:"80px"}}
              />
            </a>
            <a href="#" className="flex justify-center items-center">
              <img
                src="https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800743/c2_ux4dag.png"
                alt=""
                style={{width:"200px",height:"80px"}}

              />
            </a>
            <a href="#" className="flex justify-center items-center">
              <img
                src="https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800744/c10_wxod3a.png"
                alt=""
                style={{width:"200px",height:"80px"}}

              />
            </a>
            <a href="#" className="flex justify-center items-center">
              <img
                src="https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800743/c3_v3qgaw.png"
                alt=""
                style={{width:"200px",height:"80px"}}

              />
            </a>
            {/* Second Row */}
            <a href="#" className="flex justify-center items-center">
              <img
                src="https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800743/c5_umlsuo.png"
                alt=""
                style={{width:"200px",height:"80px"}}
                

              />
            </a>
            <a href="#" className="flex justify-center items-center">
              <img
                src="https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800742/c4_qvpwg4.png"
                alt=""
                style={{width:"200px",height:"80px"}}

              />
            </a>
            <a href="#" className="flex justify-center items-center">
              <img
                src="https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800743/c7_zwsycw.png"
                alt=""
                style={{width:"200px",height:"80px"}}

              />
            </a>
            <a href="#" className="flex justify-center items-center">
              <img
                src="https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800743/c8_dtgwmb.png"
                alt=""
                style={{width:"200px",height:"80px"}}

              />
            </a>
            <a href="#" className="flex justify-center items-center">
              <img
                src="https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800744/c9_dcg32p.png"
                alt=""
                style={{width:"200px",height:"80px"}}

              />
            </a>
            <a href="#" className="flex justify-center items-center">
              <img
                src="https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800743/c6_xwzbfl.png"
                alt=""
                style={{width:"200px",height:"80px"}}

              />
            </a>
            <a href="#" className="flex justify-center items-center">
              <img
                src="https://res.cloudinary.com/dqdaz8ni5/image/upload/v1691231262/unnamed_uzcmwd.png"
                alt=""
                style={{width:"200px",height:"80px"}}

              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Customers;
