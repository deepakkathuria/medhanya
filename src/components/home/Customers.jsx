import React from "react";

const Customers = () => {
  return (
    <>
      <style>
        {`
          @keyframes moveLeftToRight {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .marquee-container {
            width: 100%;
            overflow: hidden;
          }

          .marquee-content {
            display: flex;
            animation: moveLeftToRight 20s linear infinite;
          }

          .moving-image {
            width: 200px;
            height: 80px;
            margin: 0 8px;
          }
        `}
      </style>
      <section className="bg-gradient-to-r from-cyan-200 to-blue-500 py-8 lg:py-20 px-4">
        <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4 backdrop-blur-sm bg-white/30">
          <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-white dark:text-white md:text-4xl">
            YOU’LL BE IN GOOD COMPANY
          </h2>
          <div className="marquee-container">
            <div className="marquee-content">
              {/* Duplicate the logos to achieve a seamless loop */}
              {[...Array(2)].map((_, index) => (
                <React.Fragment key={index}>
                  <img
                    src="https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800742/c1_slvwvo.jpg"
                    alt=""
                    className="moving-image"
                  />
                  <img
                    src="https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800743/c2_ux4dag.png"
                    alt=""
                    className="moving-image"
                  />
                  <img
                    src="https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800744/c10_wxod3a.png"
                    alt=""
                    className="moving-image"
                  />
                  <img
                    src="https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800743/c3_v3qgaw.png"
                    alt=""
                    className="moving-image"
                  />
                  <img
                    src="https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800743/c5_umlsuo.png"
                    alt=""
                    className="moving-image"
                  />
                  <img
                    src="https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800742/c4_qvpwg4.png"
                    alt=""
                    className="moving-image"
                  />
                  <img
                    src="https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800743/c7_zwsycw.png"
                    alt=""
                    className="moving-image"
                  />
                  <img
                    src="https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800743/c8_dtgwmb.png"
                    alt=""
                    className="moving-image"
                  />
                  <img
                    src="https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800744/c9_dcg32p.png"
                    alt=""
                    className="moving-image"
                  />
                  <img
                    src="https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800743/c6_xwzbfl.png"
                    alt=""
                    className="moving-image"
                  />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Customers;
