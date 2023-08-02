// SweetenerDetailPage.jsx
import React from "react";
import { useParams } from "react-router-dom";

const AcidityRegulatorDetailPage = ({ categoryImages, productsData }) => {
//   const { sweetener } = useParams();

//   const category = Object.keys(productsData).find((key) =>
//     productsData[key].includes(sweetener)
//   );

//   const imageUrl = categoryImages[category][0];

  return (
    <div className="bg-gradient-to-r from-cyan-200 to-blue-500 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
          {sweetener}
        </h2> */}
        <img
          src="https://res.cloudinary.com/dqdaz8ni5/image/upload/v1690800752/Acidity_Regulators1_dpfjgs.jpg"
          style={{height:"350px",width:"800px"}}
        //   alt={sweetener}
          className="w-full h-60 object-cover rounded-lg mb-4"
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "25vh" }}>

      {/* <p className="text-gray-600"> */}
      <p style={{ color: "black" ,fontWeight:"bold"}}>

        <li>Ascorbic Acid (VC)</li>
        <li>Citric Acid Monohydrate (CAM)</li>
        <li>Citric Acid Anhydrous (CAA)</li>    


</p>
</div>

    </div>
  );
};

export default AcidityRegulatorDetailPage;
