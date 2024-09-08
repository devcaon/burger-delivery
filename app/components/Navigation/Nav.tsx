import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiCycling, BiShoppingBag } from "react-icons/bi";
import { FaBurger } from "react-icons/fa6";
import { HiMenuAlt2 } from "react-icons/hi";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="h-[12vh] bg-white">
      <div className="sm:w-[90%] w-[95%] h-[100%] mx-auto flex items-center justify-between">
        {/* logo */}
        <div className="flex items-center space-x-2">
          <FaBurger className="w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-orange-600" />
          <h1 className="text-[20px] sm:text-[30px] font-semibold text-blue-950">
            Burger & Cia
          </h1>
        </div>

        {/* nav links */}
        <ul className="hidden lg:flex items-center space-x-10">
          <li className="text-[20px] font-medium hover:text-red-700">
            <Link href="/">Home</Link>
          </li>
          <li className="text-[20px] font-medium hover:text-red-700">
            <Link href="/">Shop</Link>
          </li>
          <li className="text-[20px] font-medium hover:text-red-700">
            <Link href="/">Menu</Link>
          </li>
          <li className="text-[20px] font-medium hover:text-red-700">
            <Link href="/">Blog</Link>
          </li>
          <li className="text-[20px] font-medium hover:text-red-700">
            <Link href="/">Contact</Link>
          </li>
        </ul>

        {/* buttons */}
        <div className="flex items-center space-x-4">
          <button className="px-6 py-1 sm:px-8 sm:py-2 text-[14px] sm:text-[16px] bg-blue-950 transition-all duration-200 hover:bg-red-600 flex items-center rounded-md space-x-2 text-white">
            <span>
              <BiCycling className="w-[1.3rem] h-[1.3rem] sm:w-[1.7rem] sm:h-[1.7rem]" />
            </span>
            <span className="font-bold">Order Now</span>
          </button>
          <button className="px-4 py-2 sm:px-6 sm:py-2 hover:bg-green-700 transition-all duration-200 bg-orange-600 flex items-center rounded-md text-white">
            <BiShoppingBag className="w-[1.3rem] h-[1.3rem] sm:w-[1.7rem] sm:h-[1.7rem]" />
          </button>
          <HiMenuAlt2
            onClick={openNav}
            className="lg:hidden w-[3rem] h-[3rem] text-black hover:bg-gray-100 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
