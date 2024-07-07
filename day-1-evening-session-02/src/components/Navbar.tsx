"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="bg-gray-300 w-full space-x-10 pl-10">
      <Link
        className={`${pathname === "/" ? "font-bold underline text-red-700" : ""}`}
        href={"/"}
      >
        Home
      </Link>
      <Link
        className={`${pathname === "/about" ? "font-bold underline text-red-700" : ""}`}
        href={"/about"}
      >
        About
      </Link>
      <Link
        className={`${pathname === "/dashboard" ? "font-bold underline text-red-700" : ""}`}
        href={"/dashboard"}
      >
        Dashboard
      </Link>
    </nav>
  );
};

export default Navbar;
