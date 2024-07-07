"use client";
import React, { useState } from "react";

const CustomComponent = () => {
  const [input, setInput] = useState("");
  return (
    <div>
      CustomComponent
      <input
        type="text"
        value={input}
        placeholder="Enter Text"
              onChange={(e) => setInput(e.target.value)}
              className="ml-10 bg-gray-300"
      />
    </div>
  );
};

export default CustomComponent;
