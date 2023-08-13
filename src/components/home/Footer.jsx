import React from "react";
import { Email, Phone, LocationOn } from "@mui/icons-material";

const Footer = () => {
  const iconStyle = "text-3xl rounded-full border-2 border-black p-2 mb-2 cursor-pointer transition-transform duration-300";
  const logoIconStyle = "text-2.5xl text-blue-500 mb-1 transition-transform duration-300";
  const locationTextStyle = "text-sm font-bold text-center max-w-md leading-5";

  const handleIconHover = (event) => {
    event.target.classList.add("scale-125");
  };

  const handleIconLeave = (event) => {
    event.target.classList.remove("scale-125");
  };

  return (
    <footer className="min-h-20 bg-gradient-to-r flex flex-col w-full from-cyan-200 to-blue-400 py-5 border-t-[1px]">

      <div className="flex justify-around flex-col md:flex-row sm:flex-col space-y-5">
        <div style={{paddingTop:"20px" }}className="flex flex-col items-center justify-center">
          <Phone className="ring-1 ring-neutral-100 text-green-500 rounded-full p-1" /> {/* Green color for Phone */}
          <div  className={`text-[12px] text-gray text-center mt-2 ${locationTextStyle}`}>
           
          +91- 7982349877
            </div>

          {/* <p className="text-[12px] text-gray font-bold mt-1">+91- 7982349877</p> */}
        </div>

        <div className="flex flex-col items-center justify-center">
          <LocationOn className="ring-2 ring-neutral-100 text-red-500 rounded-full p-1" /> {/* Blue color for LocationOn */}
          <div className={`text-[12px] text-gray text-center mt-2 ${locationTextStyle}`}>
            526, FIRST FLOOR, PARMANAND (WEST) DELHI- 110009
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <Email className="ring-2 ring-neutral-100 text-blue-500 rounded-full p-1 " /> {/* Red color for Email */}
          {/* <div className="text-[12px] text-gray font-bold mt-2">info@medhanya.com</div> */}
          <div className={`text-[12px] text-gray text-center mt-2 ${locationTextStyle}`}>
          info@medhanya.com
           
            </div>
          
        </div>
      </div>
      <div 

      style={{width:"100%",height:"100%",textAlign:"center",paddingTop:"20px",fontSize:"12px",maxHeight:"90%"}}
      className="flex justify-center items-center text-grey text-sm mt-5 border-white w-2/3">
       
        &copy; {new Date().getFullYear()} MEDHANYA ENTERPRISES all rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
