// import React from 'react';

// const products = [

//   {
//     id: 1,
//     name: "Sweeteners",
//     href: "/products",
//     imageSrc:
//       "https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800745/Sweeteners3_awmksa.jpg",
//   },
//   {
//     id: 2,
//     name: "Excipients",
//     href: "/products",
//     imageSrc:
//       "https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690802437/Aboutus_l8hwrk.jpg",
//   },
//   {
//     id: 3,
//     name: "Acidity Regulators",
//     href: "/products",
//     imageSrc:
//       "https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800752/Acidity_Regulators1_dpfjgs.jpg",
//   },
//   {
//     id: 4,
//     name: "Others",
//     href: "/products",
//     imageSrc:
//       "https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800749/Others1_muhowi.jpg",
//   },
// ];

// export default function Products() {
//   return (
//     <div className="bg-gradient-to-r from-cyan-200 to-blue-500">
//       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 backdrop-blur-sm bg-white/30">
//         <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-white dark:text-white md:text-4xl">
//           PRODUCTS
//         </h2>
//         <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//           {products.map((product) => (
//             <div key={product.id} className="group relative">
//               <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
//                 <a href={product.href}>
//                   <img
//                     src={product.imageSrc}
//                     alt={product.name}
//                     className="h-full w-full object-cover object-center lg:h-full lg:w-full"
//                   />
//                 </a>
//               </div>
//               <div className="mt-4 flex justify-between">
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-700">
//                     <a href={product.href}>
//                       <span aria-hidden="true" className="absolute inset-0" />
//                       {product.name}
//                     </a>
//                   </h3>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }














// ---------------------------new--------------------------------------

import React from 'react';

const products = [
  {
    id: 1,
    name: "Vitamins",
    href: "/products",
    imageSrc:
      "https://res.cloudinary.com/dqdaz8ni5/image/upload/v1719557341/Vitamins_anrh4c.jpg",
  },
  {
    id: 2,
    name: "Sweeteners",
    href: "/products",
    imageSrc:
      "https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800745/Sweeteners3_awmksa.jpg",
  },
  {
    id: 3,
    name: "Nutritional Supplements",
    href: "/products",
    imageSrc:
      "https://res.cloudinary.com/dqdaz8ni5/image/upload/v1719557413/Natural_supplement_dmqnhs.webp",
  },
  
  {
    id: 4,
    name: "Acidulants",
    href: "/products",
    imageSrc:
      "https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800752/Acidity_Regulators1_dpfjgs.jpg",
  },
  {
    id: 7,
    name: "Preservatives",
    href: "/products",
    imageSrc:
      "https://res.cloudinary.com/dqdaz8ni5/image/upload/v1719660691/preservative_vd9wrb.webp",
  },
 
  {
    id: 6,
    name: "Thickeners",
    href: "/products",
    imageSrc:
      "https://res.cloudinary.com/dqdaz8ni5/image/upload/v1719574989/Thickners_3_jdb5cu.webp",
  },
  {
    id: 5,
    name: "Antioxidants",
    href: "/products",
    imageSrc:
      "https://res.cloudinary.com/dqdaz8ni5/image/upload/v1719557534/Antioxidants_cxmtmh.webp",
  },
  {
    id: 8,
    name: "Active Pharmaceutical Ingredients(API'S)",
    href: "/products",
    imageSrc:
      "https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800749/Others1_muhowi.jpg",
  },
];

export default function Products() {
  return (
    <div className="bg-gradient-to-r from-cyan-200 to-blue-500">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 backdrop-blur-sm bg-white/30">
        <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-white dark:text-white md:text-4xl">
          PRODUCTS
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80 lg:w-75">
                <a href={product.href}>
                  <img
                    src={product.imageSrc}
                    alt={product.name}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </a>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}






// -----------------------new2----------------------------------
// import React from "react";

// const Products = () => {
//   const products = [
//     {
//       id: 1,
//       name: "Vitamins",
//       href: "/products",
//       imageSrc:
//         "https://res.cloudinary.com/dqdaz8ni5/image/upload/v1719575740/Vitamins_resized_p4yzfv.jpg",
//     },
//     {
//       id: 2,
//       name: "Nutritional Supplements",
//       href: "/products",
//       imageSrc:
//         "https://res.cloudinary.com/dqdaz8ni5/image/upload/v1719557413/Natural_supplement_dmqnhs.webp",
//     },
//     {
//       id: 3,
//       name: "Sweeteners",
//       href: "/products",
//       imageSrc:
//         "https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800745/Sweeteners3_awmksa.jpg",
//     },
//     {
//       id: 4,
//       name: "Acidulants",
//       href: "/products",
//       imageSrc:
//         "https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800752/Acidity_Regulators1_dpfjgs.jpg",
//     },
//     {
//       id: 5,
//       name: "Preservatives",
//       href: "/products",
//       imageSrc:
//         "https://res.cloudinary.com/dqdaz8ni5/image/upload/v1719557484/Preservatives_h8px2v.webp",
//     },
//     {
//       id: 6,
//       name: "Antioxidants",
//       href: "/products",
//       imageSrc:
//         "https://res.cloudinary.com/dqdaz8ni5/image/upload/v1719557534/Antioxidants_cxmtmh.webp",
//     },
//     {
//       id: 7,
//       name: "Thickeners",
//       href: "/products",
//       imageSrc:
//         "https://res.cloudinary.com/dqdaz8ni5/image/upload/v1719574989/Thickners_3_jdb5cu.webp",
//     },
//     {
//       id: 8,
//       name: "Others",
//       href: "/products",
//       imageSrc:
//         "https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800749/Others1_muhowi.jpg",
//     },
//   ];

//   return (
//     <>
//       <style>
//         {`
//           @keyframes moveLeftToRight {
//             0% {
//               transform: translateX(0%);
//             }
//             100% {
//               transform: translateX(-100%);
//             }
//           }

//           .marquee-container {
//             width: 100%;
//             overflow: hidden;
//             white-space: nowrap;
//           }

//           .marquee-content {
//             display: flex;
//             animation: moveLeftToRight 20s linear infinite;
//           }

//           .moving-image {
//             width: 4px;
//             height: 400px;
//             object-fit: cover;
//             display: inline-block;
//             margin-right: 16px; /* Adding gap between images */
//           }

//           .product-name {
//             text-align: center;
//             font-size: 20px;
//             font-weight: bold;
//             color: white;
//             margin-top: 8px;
//           }
//         `}
//       </style>
//       <section className="bg-gradient-to-r from-cyan-200 to-blue-500 py-8 lg:py-20 px-4">
//         <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4 backdrop-blur-sm bg-white/30">
//           <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-white dark:text-white md:text-4xl">
//             OUR PRODUCTS
//           </h2>
//           <div className="marquee-container">
//             <div className="marquee-content">
//               {[...Array(2)].map((_, index) => (
//                 <React.Fragment key={index}>
//                   {products.map((product) => (
//                     <div key={product.id} className="group relative inline-block">
//                       <a href={product.href}>
//                         <img
//                           src={product.imageSrc}
//                           alt={product.name}
//                           className="moving-image"
//                         />
//                       </a>
//                     </div>
//                   ))}
//                 </React.Fragment>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Products;
