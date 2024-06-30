





import React from "react";

const VitaminsDetailPage = () => {
  const products = [
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
    "Amino Acid"
  ];

  return (
    <div className="bg-gradient-to-r from-cyan-200 to-blue-500 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <img
          src="https://res.cloudinary.com/dqdaz8ni5/image/upload/v1719557341/Vitamins_anrh4c.jpg"
          style={{ height: "350px", width: "800px" }}
          alt="Vitamins"
          className="w-full h-60 object-cover rounded-lg mb-4"
        />
      </div>
      <div className="responsive-table">
        <table className="min-w-full divide-y divide-gray-200">
          <tbody className="bg-white divide-y divide-gray-300">
            <tr>
              {products.slice(0, 3).map((product, index) => (
                <td key={index} className="text-center py-2">{product}</td>
              ))}
            </tr>
            <tr>
              {products.slice(3, 6).map((product, index) => (
                <td key={index} className="text-center py-2">{product}</td>
              ))}
            </tr>
            <tr>
              {products.slice(6, 9).map((product, index) => (
                <td key={index} className="text-center py-2">{product}</td>
              ))}
            </tr>
            <tr>
              {products.slice(9, 12).map((product, index) => (
                <td key={index} className="text-center py-2">{product}</td>
              ))}
            </tr>
            <tr>
              {products.slice(12).map((product, index) => (
                <td key={index} className="text-center py-2">{product}</td>
              ))}
              {products.length % 3 !== 0 && <td className="text-center py-2"></td>}
              {products.length % 3 === 1 && <td className="text-center py-2"></td>}
            </tr>
          </tbody>
        </table>
      </div>
      <style jsx>{`
        .responsive-table {
          overflow-x: auto; /* Ensures the table is scrollable on small devices */
        }

        table {
          width: 100%; /* Makes the table full width */
          border-collapse: collapse; /* Collapses border to look cleaner */
        }

        th,
        td {
          border: 1px solid black; /* Adds a black border for each cell */
          text-align: center; /* Centers the text in cells */
          padding: 12px; /* Provides padding within cells */
          vertical-align: middle; /* Ensures vertical alignment */
        }

        tbody tr:nth-child(odd) {
          background-color: #f9f9f9; /* Adds a zebra-striping effect to rows */
        }
      `}</style>
    </div>
  );
};

export default VitaminsDetailPage;
