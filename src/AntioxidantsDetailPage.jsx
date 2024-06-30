







import React from "react";

const AntioxidantsDetailPage = () => {
  const products = [
    "Erythorbic Acid",
    "Sodium Erythorbate",
    "Silicon Dioxide",
    "Methyl Paraben",
    "Ethyl Paraben",
    "Propyl Paraben",
    "Butyl Paraben",
    "Sodium Methyl/Ethyl/Propyl/Butyl Paraben"
  ];

  return (
    <div className="bg-gradient-to-r from-cyan-200 to-blue-500 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <img
          src="https://res.cloudinary.com/dqdaz8ni5/image/upload/v1719557534/Antioxidants_cxmtmh.webp"
          style={{ height: "350px", width: "800px" }}
          alt="Antioxidants"
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
              {products.slice(6).map((product, index) => (
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

export default AntioxidantsDetailPage;
