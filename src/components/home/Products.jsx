const products = [
  {
    id: 1,
    name: "Sweeteners",
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800745/Sweeteners3_awmksa.jpg",
    // price: "$35",
    // color: "GST Extra",
  },
  {
    id: 1,
    name: "Excipients",
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690802437/Aboutus_l8hwrk.jpg",
    
  },
  {
    id: 1,
    name: "Acidity Regulators",
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800752/Acidity_Regulators1_dpfjgs.jpg",
    
  },
  {
    id: 1,
    name: "Others",
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800749/Others1_muhowi.jpg",
    
  },
];

export default function Products() {
  return (
    <div className="bg-gradient-to-r from-cyan-200 to-blue-500">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 backdrop-blur-sm bg-white/30">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Products
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {/* {product.price} */}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
