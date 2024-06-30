import React from "react";
import { Link } from "react-router-dom";

const styles = `
  .custom-image {
    height: 290px; /* Adjust this value as needed */
    transition: transform 0.3s ease-in-out;
  }

  .custom-image:hover {
    transform: scale(1.1); /* Adjust the scale value as needed */
  }
`;

const ProductsPage = () => {

  if (typeof document !== 'undefined') {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
  }

  const productsData = {
    Vitamins: [
      "Vitamin A",
      "Vitamin B1/B2/B3/B5/B6",
      "Vitamin C series",
      "Vitamin D2/D3",
      "Vitamin E Powder/Oil",
      "Vitamin K2/K3",
      "Folic Acid Food/Feed",
      "Nicotinic Acid",
      "Inositol",
      "β-Carotene",
      "Vitamin B12 (Cyanocobalamine)",
      "D-Biotin (Vitamin H)",
      "Coenzyme Q10",
      "Amino Acid",
    ],
    Sweeteners: [
      "Sodium Saccharin",
      "Liquid Glucose",
      "Maltodextrin",
      "D-Allulose",
      "Aspartame",
      "Fructose Anhydrous/Monohydrate",
      "Sucralose",
      "Stevia",
      "Acesulfame K",
      "Sodium Cyclamate",
      "Polydextrose",
      "Maltitol Crystal",
      "Isomalt"
    ],
    "Nutritional Supplements": [
      "L-Carnitine",
      "L-Carnitine L-Tartrate",
      "L-Carnitine Fumarate",
      "Acetyl L-Carnitine HCL",
      "D-Glucosamine Hydrochloride",
      "β-Nicotinamide Mononucleotide",
      "Chondroitin Sulfate"
    ],
    
    Preservatives: [
      "Sorbic Acid",
      "Benzoic Acid",
      "Sodium/Potassium Benzoate",
      "Sodium/Calcium Propionate",
      "Sodium Acetate (Anhydrous/Trihydrate)",
      "Calcium/Potassium Acetate",
      "Sodium Diacetate",
      "Nisin",
      "Ferrous Gluconate"
    ],
    Acidulants: [
      "Citric Acid (Anhydrous/Monohydrate)",
      "Sodium/Calcium/Tri-potassium/Magnesium Citrate",
      "DL-Malic Acid/L-Malic Acid",
      "Fumaric Acid",
      "Lactic Acid/L-Lactic Acid",
      "Sodium/Calcium/Ferrous Lactate",
      "L(+)-Tartaric Acid"
    ],
    Antioxidants: [
      "Erythorbic Acid",
      "Sodium Erythorbate",
      "Silicon Dioxide",
      "Methyl Paraben",
      "Ethyl Paraben",
      "Propyl Paraben",
      "Butyl Paraben",
      "Sodium Methyl/Ethyl/Propyl/Butyl Paraben"
    ],
    Thickeners: [
      "Hydroxypropyl Methyl Cellulose (HPMC)",
      "Microcrystalline Cellulose (MCC)",
      "Hydroxypropyl Cellulose (HPC)",
      "Sodium Carboxymethylcellulose (CMC-Na)",
      "Sodium Alginate",
      "Calcium Alginate",
      "Xanthan Gum",
      "Agar",
      "Gelatin",
      "PVPK30",
      "Cross Povidone"
    ],
      Others: [
      "Azithromycin",
      "Azithromycin Amine",
      "Erythromycin",
      "Roxithromycin",
      "Clarithromycin",
      "Betamethasone",
      "Deaxamethasone",
      "Calcium Gluconate",
      "Sodium Gluconate",
      "Dicyanamide(DCDA)",
      "Sodium Ascorbate",
      "Paracetamol",
      "Alpha Lipoic Acid (ALA)",
      "Metronidazole",
      "Clavulonate Potassium",
      "Miglitol",
      "Pregabalin",
      "Prednisolon",
      "Collagen"
    ]
  };

  const categoryImages = {
    Vitamins: [
      "https://res.cloudinary.com/dqdaz8ni5/image/upload/v1719661151/Vitamin2_klxbb9.webp"
    ],
    Sweeteners: [
      "https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800745/Sweeteners3_awmksa.jpg"
    ],
    "Nutritional Supplements": [
      "https://res.cloudinary.com/dqdaz8ni5/image/upload/v1719557413/Natural_supplement_dmqnhs.webp"
    ],
    Acidulants: [
      "https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800752/Acidity_Regulators1_dpfjgs.jpg"
    ],
    Antioxidants: [
      "https://res.cloudinary.com/dqdaz8ni5/image/upload/v1719557534/Antioxidants_cxmtmh.webp"
    ],
    Thickeners: [
      "https://res.cloudinary.com/dqdaz8ni5/image/upload/v1719574989/Thickners_3_jdb5cu.webp"
    ],
    Preservatives: [
      "https://res.cloudinary.com/dqdaz8ni5/image/upload/v1719660691/preservative_vd9wrb.webp"
    ],
      Others: [
      "https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800749/Others1_muhowi.jpg",
    ],

  };

  return (
    <div className="bg-gradient-to-r from-cyan-200 to-blue-500 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
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
                        className="custom-image w-full object-cover rounded-lg mb-2 cursor-pointer"
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
