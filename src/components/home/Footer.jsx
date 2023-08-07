import React from "react";
import { Email, Phone, LocationOn } from "@mui/icons-material";

const Footer = () => {
  const iconStyle = "text-3xl rounded-full border-2 border-black p-2 mb-2 cursor-pointer transition-transform duration-300";
  const logoIconStyle = "text-2.5xl text-blue-500 mb-1 transition-transform duration-300";
  const locationTextStyle = "text-sm font-normal text-center max-w-md leading-5 capitalize";

  const handleIconHover = (event) => {
    event.target.classList.add("scale-125");
  };

  const handleIconLeave = (event) => {
    event.target.classList.remove("scale-125");
  };

  return (
   <footer className="h-20 bg-gradient-to-r flex flex-col gap-3 from-cyan-200 to-blue-500 w-[100%]">
    <div className="flex justify-around">
      
      <div className="flex gap-2 flex-col items-center">
        <Phone className="ring-2 ring-neutral-100 text-white rounded-full p-1"/>
        <p className="text-[12px] text-gray font-bold">+91- 7982349877</p>
      </div>

      <div  className="flex gap-1 flex-col items-center">
        <LocationOn className="ring-2 ring-neutral-100 text-white rounded-full p-1"/>
        <div className="text-[12px] text-gray font-bold">
        526, FIRST FLOOR,
        PARMANAND COLONY (WEST) DELHI- 110009
        </div>
      </div>

      <div className="flex gap-1 flex-col items-center">
        <Email className="ring-2 ring-neutral-100 text-white rounded-full p-1"/>
        <div className="text-[12px] text-gray font-bold">info@medhanya.com
        </div>
      </div>

    </div>

    {/* <div className="flex gap-1 flex-col items-center">
        <p className="text-[12px] text-gray font-bold">Medhanya@2023 text</p>
      </div> */}

   </footer>
  );
};

export default Footer;

/**
 *     <footer className="mb-8">
    //   {/* Footer Content */
    //   <div className="bg-gray-200 text-black p-8 flex justify-between items-center flex-wrap border-t">
    //     {/* Phone Number */}
    //     <div className="text-center flex flex-col items-center">
    //       <Phone className={`${iconStyle} text-red-500`} onMouseEnter={handleIconHover} onMouseLeave={handleIconLeave} />
    //       <p>+1 (123) 456-7890</p>
    //     </div>

    //     {/* Location */}
    //     <div className="text-center flex flex-col items-center">
    //       <LocationOn className={`${iconStyle} mt-px text-green-500`} onMouseEnter={handleIconHover} onMouseLeave={handleIconLeave} />
    //       <p className={locationTextStyle}>
    //         526, FIRST FLOOR,
    //         <br />
    //         PARMANAND COLONY (WEST) DELHI- 110009
    //       </p>
    //     </div>

    //     {/* Email */}
    //     <div className="text-center flex flex-col items-center">
    //       <Email className={`${iconStyle} text-yellow-500`} onMouseEnter={handleIconHover} onMouseLeave={handleIconLeave} />
    //       <p>contact@example.com</p>
    //     </div>
    //   </div>
    //   <p className="text-center text-xs mt-4">Medhanya@2023</p>

    //   {/* Medhanya@2023 text */}
    // </footer>
 