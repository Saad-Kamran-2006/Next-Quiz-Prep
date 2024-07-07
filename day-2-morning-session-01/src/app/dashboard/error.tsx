"use client";
import React from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="bg-gray-700 text-gray-100 h-[100vh] w-full flex flex-col gap-5 justify-center items-center font-bold text-5xl">
      <h1>Error! Page</h1>
      <p>{error.message}</p>
      <button
        className="bg-gray-300 px-3 py-1 text-sm text-gray-900 rounded"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
};

export default Error;
