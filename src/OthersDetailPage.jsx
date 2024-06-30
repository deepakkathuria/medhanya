







// -------------------------new-------------------------------
import React from "react";

const OthersDetailPage = ({ categoryImages, productsData }) => {
  return (
    <div className="bg-gradient-to-r from-cyan-200 to-blue-500 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <img
          src="https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800749/Others1_muhowi.jpg"
          style={{ height: "350px", width: "800px" }}
          alt="Others"
          className="w-full h-60 object-cover rounded-lg mb-4"
        />
      </div>
      <div className="responsive-table">
        <table className="min-w-full divide-y divide-gray-200">
          <tbody className="bg-white divide-y divide-gray-300">
            <tr>
              <td>Azithromycin</td>
              <td>Azithromycin Amine</td>
              <td>Erythromycin</td>
            </tr>
            <tr>
              <td>Roxithromycin</td>
              <td>Clarithromycin</td>
              <td>Betamethasone</td>
            </tr>
            <tr>
              <td>Deaxamethasone</td>
              <td>Calcium Gluconate</td>
              <td>Sodium Gluconate</td>
            </tr>
            <tr>
              <td>Dicyanamide (DCDA)</td>
              <td>Sodium Ascorbate</td>
              <td>Paracetamol</td>
            </tr>
            <tr>
              <td>Alpha Lipoic Acid (ALA)</td>
              <td>Metronidazole</td>
              <td>Clavulonate Potassium</td>
            </tr>
            <tr>
              <td>Miglitol</td>
              <td>Pregabalin</td>
              <td>Prednisolon</td>
            </tr>
            <tr>
              <td>Collagen</td>
              <td></td>
              <td></td>
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

        th, td {
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

export default OthersDetailPage;
