import Link from "next/link";
import React from "react";
import { BiCycling, BiMenu, BiShoppingBag } from "react-icons/bi";
import { BsShop } from "react-icons/bs";
import { FaMicroblog } from "react-icons/fa6";
import { GrContact } from "react-icons/gr";
import { HiHome } from "react-icons/hi";
import { ImCross } from "react-icons/im";

interface Props {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navStyle = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div
      className={`fixed ${navStyle} right-0 left-0 top-0 bottom-0 transition-all duration-500 h-[100vh] bg-[#000000e0] z-[1002]`}
    >
      <ImCross
        onClick={closeNav}
        className="absolute top-[2rem] right-[2rem] w-[1rem] h-[1rem] text-white"
      />
      {/* nav div */}
      <div
        className={`bg-white ${navStyle} overflow-y-scroll [&::-webkit-scrollbar]:hidden  text-black transition-all duration-500 flex flex-col items-left justify-start p-6 w-[70%] h-[100%]`}
      >
        <div className="w-full text-2xl text-gray-800 mb-6 font-semibold">
          MENU
        </div>
        {/* nav links */}
        <ul className="space-y-4">
          <li className="text-[18px] hover:text-red-700 flex items-center gap-2">
            <HiHome className="w-4 h-4" />
            <Link href="/">Home</Link>
          </li>
          <li className="text-[18px] hover:text-red-700 flex items-center gap-2">
            <BsShop className="w-4 h-4" />
            <Link href="/">Shop</Link>
          </li>
          <li className="text-[18px] hover:text-red-700 flex items-center gap-2">
            <BiMenu className="w-4 h-4" />
            <Link href="/">Menu</Link>
          </li>
          <li className="text-[18px] hover:text-red-700 flex items-center gap-2">
            <FaMicroblog className="w-4 h-4" />
            <Link href="/">Blog</Link>
          </li>
          <li className="text-[18px] hover:text-red-700 flex items-center gap-2">
            <GrContact className="w-4 h-4" />
            <Link href="/">Contact</Link>
          </li>
          <li>
            <div className="border border-b-[0.5px] border-b-gray-300/30" />
          </li>
          <li className="text-[18px] hover:text-red-700 flex items-center gap-2">
            <BiCycling className="w-4 h-4" />
            <Link href="/">Order By</Link>
          </li>
          <li className="text-[18px] hover:text-red-700 flex items-center gap-2">
            <BiShoppingBag className="w-4 h-4" />
            <Link href="/">My Cart</Link>
          </li>
          <li>
            <div className="border border-b-[0.5px] border-b-gray-300/30" />
          </li>
          <li
            className="text-[18px] hover:text-red-700 flex items-center gap-2"
            onClick={closeNav}
          >
            <ImCross className="w-4 h-4" />
            <Link href="/">Close</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
