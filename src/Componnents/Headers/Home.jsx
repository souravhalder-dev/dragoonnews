import React from "react";
import logo from "../../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className=" flex flex-col justify-center items-center py-4">
      <img className="w-160px h-70px" src={logo} alt="" srcset="" />
      <p className="py-4 text-gray-400">Journalism Without Fear or Favour</p>
      <p className="bg-accent">{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
    </div>
  );
};

export default Header;
