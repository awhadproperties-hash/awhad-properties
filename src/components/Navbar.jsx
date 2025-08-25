import React from "react";
import { appleImg, bagImg, searchImg } from "../utils";
import {navLists} from '../constants/index'

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <div className="flex flex-1 justify-center max-sm:hidden">
          <a href="#Hero" className="px-5 text-2xl cursor-pointer text-gray hover:text-white transition-all">Home</a>
          <a href="#highlights" className="px-5 text-2xl cursor-pointer text-gray hover:text-white transition-all">Premium Properties</a>
          <a href="#contact" className="px-5 text-2xl cursor-pointer text-gray hover:text-white transition-all">Contact </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
