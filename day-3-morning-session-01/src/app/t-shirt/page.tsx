import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col h-[100vh] gap-y-5">
      <Link
        className="bg-black border border-black text-gray-100 rounded-md text-sm px-3 py-1"
        href={"/t-shirt/black"}
      >
        Black
      </Link>
      <Link
        className="bg-white border border-black text-gray-900 rounded-md text-sm px-3 py-1"
        href={"/t-shirt/white"}
      >
        White
      </Link>
      <Link
        className="bg-blue-600 border border-black text-gray-100 rounded-md text-sm px-3 py-1"
        href={"/t-shirt/blue"}
      >
        Blue
      </Link>
      <Link
        className="bg-green-500 border border-black text-gray-100 rounded-md text-sm px-3 py-1"
        href={"/t-shirt/green"}
      >
        Green
      </Link>
      <Link
        className="bg-red-600 border border-black text-gray-100 rounded-md text-sm px-3 py-1"
        href={"/t-shirt/red"}
      >
        Red
      </Link>
    </div>
  );
};

export default page;
