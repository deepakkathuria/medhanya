















// ---------------------new ------------------------------------
import React from "react";
import { useParams } from "react-router-dom";

const SweetenerDetailPage = ({ categoryImages, productsData }) => {
  return (
    <div className="bg-gradient-to-r from-cyan-200 to-blue-500 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <img
          src="https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800745/Sweeteners3_awmksa.jpg"
          alt="Sweetener Selection"
          style={{ height: "350px", width: "800px" }}
          className="w-full h-60 object-cover rounded-lg mb-4"
        />
      </div>
      <div className="responsive-table">
        <table className="min-w-full divide-y divide-gray-200">
          <tbody className="bg-white divide-y divide-gray-300">
            <tr>
              <td>Sodium Saccharin</td>
              <td>Liquid Glucose</td>
              <td>Maltodextrin</td>
            </tr>
            <tr>
              <td>D-Allulose</td>
              <td>Aspartame</td>
              <td>Fructose Anhydrous/Monohydrate</td>
            </tr>
            <tr>
              <td>Sucralose</td>
              <td>Stevia</td>
              <td>Acesulfame K</td>
            </tr>
            <tr>
              <td>Sodium Cyclamate</td>
              <td>Polydextrose</td>
              <td>Maltitol Crystal</td>
            </tr>
            <tr>
              <td>Isomalt</td>
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

export default SweetenerDetailPage;
