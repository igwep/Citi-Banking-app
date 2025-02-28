import React from "react";

export const Footer = () => {
  return (
    <footer className="md:bg-white bg-customColor text-white  flex justify-center items-center md:text-black py-10">
      <div className="max-w-screen-xl mx-auto flex justify-center items-center space-x-4">
        {/* Logo */}
        <div className="md:block hidden">
        <img
          src="/Svg/Footer.svg" // Replace with your logo path
          alt="Bank Logo"
          className="w-12 h-12"
        />
        </div>
        <div className="md:hidden block">
        <img
          src="/Svg/citi.svg" // Replace with your logo path
          alt="Bank Logo"
          className="w-12 h-12"
        />
        </div>
        {/* Text */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} CitiBanking. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
