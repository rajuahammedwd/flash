"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { RiShoppingBag3Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="py-3 mb-2 border-b-2">
      <div className="max-w-[1028px] mx-auto grid lg:grid-cols-3 justify-between items-center">
        <div>
          <Image
            className=""
            src={"https://i.ibb.co/dgG9HW4/FLASH.png"}
            width={100}
            height={100}
            alt="logo"
          ></Image>
        </div>
        <div>
          <input
            className="input border px-5"
            type="text"
            placeholder="Search Product Here"
          />
        </div>
        <div className="flex justify-end items-center gap-x-10">
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
      </div>
    </nav>
  );
};

export default Navbar;
