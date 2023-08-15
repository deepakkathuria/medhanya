import React from "react";
import { Email, Phone, LocationOn } from "@mui/icons-material";

const Footer = () => {
  const locationTextStyle = "text-sm font-bold text-center max-w-md leading-5";

  const contactInfo = [
    { Icon: Phone, color: "text-green-500", text: "+91-7982349877" },
    { Icon: LocationOn, color: "text-red-500", text: "526, FIRST FLOOR, PARMANAND (WEST) DELHI- 110009" },
    { Icon: Email, color: "text-blue-500", text: "info@medhanya.com" },
  ];

  return (
    <footer className="bg-gradient-to-r from-cyan-200 to-blue-400 py-3 border-t-[1px]">
      <div className="flex justify-around flex-col md:flex-row sm:flex-col space-y-3">
        {contactInfo.map(({ Icon, color, text }) => (
          <div key={text} className="flex flex-col items-center justify-center">
            <Icon className={`ring-2 ring-neutral-100 ${color} rounded-full p-1`} />
            <div className={`text-[12px] text-gray text-center mt-1 ${locationTextStyle}`}>
              {text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center text-gray text-sm mt-3">
        &copy; {new Date().getFullYear()} MEDHANYA ENTERPRISES all rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
