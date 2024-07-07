"use client";
import React from "react";

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="bg-gray-800 h-[90%] space-y-5 p-5">
      <h1 className="text-gray-100 text-xl font-bold">Some went wrong</h1>
      <p className="text-gray-100 ">{error.message}</p>
      <button
        className="text-gray-900 bg-gray-300 px-3 py-1  text-sm rounded "
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
};

export default error;
