// ProductsPage.js
import React from "react";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const productsData = {
    Sweeteners: [
      "Aspartame",
      "Acesulfame K",
      "Sodium Saccharin",
      "Stevia Sugar",
      "Sucralose",
    ],
    Excipients: [
      "Cross Povidone",
      "HPMC E5, E15 & K Series",
      "PVPK30",
      "Xanthan Gum",
    ],
    "Acidity Regulators": [
      "Ascorbic Acid (VC)",
      "Citric Acid Monohydrate (CAM)",
      "Citric Acid Anhydrous (CAA)",
    ],
    Others: [
      "Calcium Gluconate",
      "Dicyanamide (DCDA)",
      "Paracetamol",
      "Sodium Ascorbate",
      "Sodium Gluconate",
    ],
  };

  const categoryImages = {
    Sweeteners: [
      "https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800745/Sweeteners3_awmksa.jpg",
    ],
    Excipients: [
      "https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690802437/Aboutus_l8hwrk.jpg",
    ],
    "Acidity Regulators": [
      "https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800752/Acidity_Regulators1_dpfjgs.jpg",
    ],
    Others: [
      "https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800749/Others1_muhowi.jpg",
    ],
  };

  return (
    <div className="bg-gradient-to-r from-cyan-200 to-blue-500 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8">
          Our Product List
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Object.entries(productsData).map(([category, products]) => (
            <div
              key={category}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300"
            >
              <Link to={`/products/${encodeURIComponent(category)}`}>
                <h3 className="text-xl font-semibold mb-4">{category}</h3>
                <div className="mb-4">
                  {categoryImages[category] &&
                    categoryImages[category].map((imageUrl, index) => (
                      <img
                        key={index}
                        src={imageUrl}
                        alt={`${category} ${index + 1}`}
                        className="w-full h-40 object-cover rounded-lg mb-2 cursor-pointer"
                      />
                    ))}
                </div>
              </Link>
              <ul>
                {products.map((product, index) => (
                  <li
                    key={index}
                    className="text-gray-600 mb-2 flex items-center"
                  >
                    <span className="text-indigo-500 mr-2">&#8226;</span>
                    <span>{product}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
