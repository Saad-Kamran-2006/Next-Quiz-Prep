"use client";
import React from "react";

const page = () => {
  const handleError = (num: number) => {
    const random = Math.floor(Math.random() * num);
    if (random === 1) {
      throw new Error("Error occurs because random value is === 1");
    }
  };
  handleError(2);
  return (
    <div>
      <h1>Dashboard Page</h1>
    </div>
  );
};

export default page;
