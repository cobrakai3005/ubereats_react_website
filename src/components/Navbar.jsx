import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineWallet,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite } from "react-icons/md";
import { BiHelpCircle } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* LeftSide */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="">eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Deleivery</p>
          <p>Pickups</p>
        </div>
      </div>

      {/* Search Input */}
      <div className="bg-gray-200 rounded flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          type="text"
          placeholder="Search foods"
          className="bg-transparent p-2 focus:outline-none"
        />
      </div>

      {/* CartButton */}
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side Drawer */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen z-10 duration-300 bg-white"
            : "fixed top-0 left-[-100%] w-[300px] h-screen z-10 duration-300 bg-white"
        }
      >
        <AiOutlineClose
          size={30}
          onClick={() => setNav(!nav)}
          className="absolute  top-4 right-3 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">eats</span>{" "}
        </h2>
        <nav>
          <ul className="flex flex-col text-gray-800">
            <li className="text-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-3" /> Orders
            </li>
            <li className="text-xl py-4 flex">
              <MdFavorite size={25} className="mr-3" />
              Favourites
            </li>
            <li className="text-xl py-4 flex">
              <AiOutlineWallet size={25} className="mr-3" /> Wallet
            </li>
            <li className="text-xl py-4 flex">
              <BiHelpCircle size={25} className="mr-3" /> Help
            </li>
            <li className="text-xl py-4 flex">
              <AiFillTag size={25} className="mr-3" /> Promotion
            </li>
            <li className="text-xl py-4 flex">
              <BsFillSaveFill size={25} className="mr-3" /> Best Ones
            </li>
            <li className="text-xl py-4 flex">
              <FaUserFriends size={25} className="mr-3" /> Invites Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
