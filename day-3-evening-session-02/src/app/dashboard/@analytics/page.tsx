"use client";
import { delay } from "@/utils/delay";
import React from "react";

const page = () => {
  const handleError = (num: number) => {
    const random = Math.floor(Math.random() * num);
    if (random === 1) {
      throw new Error("There is an error in analytics page");
    }
  };
  handleError(2);
  //   await delay(3000);
  return (
    <div>
      <p>This is our analytics page</p>
      <button className="bg-gray-900 px-3 py-1 text-white text-sm rounded hover:bg-green-500">
        Click Me
      </button>
    </div>
  );
};

export default page;
