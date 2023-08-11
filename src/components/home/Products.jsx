import React from 'react';

const products = [
  {
    id: 1,
    name: "Sweeteners",
    href: "/products",
    imageSrc:
      "https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800745/Sweeteners3_awmksa.jpg",
  },
  {
    id: 2,
    name: "Excipients",
    href: "/products",
    imageSrc:
      "https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690802437/Aboutus_l8hwrk.jpg",
  },
  {
    id: 3,
    name: "Acidity Regulators",
    href: "/products",
    imageSrc:
      "https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800752/Acidity_Regulators1_dpfjgs.jpg",
  },
  {
    id: 4,
    name: "Others",
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
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
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
