import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="py-5 sm:px-20 px-5 bg-black text-gray-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Divider */}
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex flex-col items-center justify-center text-center">
          <p className="font-semibold text-gray-400 text-sm md:text-base">
            © Copyright 2025 Awhad Properties, Inc. — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
