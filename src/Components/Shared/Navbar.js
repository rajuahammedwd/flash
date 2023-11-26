"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { RiShoppingBag3Line } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  }
  return (
    <nav className="border-b px-5 mb-5">
      <div className="max-w-[1028px] mx-auto relative">
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="flex items-center">
            <Image
              className=""
              src={"https://i.ibb.co/dgG9HW4/FLASH.png"}
              width={100}
              height={100}
              alt="logo"
            ></Image>
          </div>

          {/* Search Bar for Desktop */}
          <div className="hidden md:flex items-center">
            <div className="relative text-gray-600">
              <button type="submit" className="absolute left-0 top-0 mt-3 ml-3">
                <FaSearch />
              </button>
              <input
                type="search"
                name="search"
                placeholder="Search Products Here"
                className="input border h-10 px-10 pr-10 text-sm focus:outline-none w-full rounded"
              />
            </div>
          </div>
          <div className="hidden md:flex justify-end items-center gap-x-10">
            <Link className="flex items-center" href={"/"}>
              <span>
                <BiCategoryAlt className="mr-2 text-2xl" />
              </span>
              Categories
            </Link>
            <Link className="flex items-center" href={"/"}>
              <span>
                <RiShoppingBag3Line className="mr-2 text-2xl" />
              </span>
              Bag
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="flex items-center px-3 py-2 border rounded text-gray-700 border-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M2 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm0 5a1 1 0 1 1 0-2h14a1 1 0 0 1 0 2H3zm0 5a1 1 0 1 1 0-2h14a1 1 0 0 1 0 2H3z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Search Bar for Mobile */}
        <div className="md:hidden flex items-center w-full">
          <div className="relative text-gray-600 w-full">
            <button type="submit" className="absolute left-0 top-0 mt-3 ml-3">
              <FaSearch />
            </button>
            <input
              type="search"
              name="search"
              placeholder="Search Products Here"
              className="input border h-10 px-10 pr-10 text-sm focus:outline-none w-full rounded"
            />
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden top-0 left-0 bg-white w-full h-screen z-10 absolute">
            <div className="flex flex-col py-4 space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Menu</h2>
                <button className="font-xl" onClick={closeMobileMenu}><IoCloseSharp  className="text-3xl font-bold"/></button>
              </div>
              <Link className="flex items-center" href={"/"}>
                <span>
                  <BiCategoryAlt className="mr-2 text-2xl" />
                </span>
                Categories
              </Link>
              <Link className="flex items-center" href={"/"}>
                <span>
                  <RiShoppingBag3Line className="mr-2 text-2xl"/>
                </span>
                Bag
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
