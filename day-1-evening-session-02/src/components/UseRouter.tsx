"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const UseRouter = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleSubmit = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    setIsLoggedIn(true);
  };
  const router = useRouter();
  if (isLoggedIn) {
    router.push("/dashboard");
  } else {
    router.push("/login");
  }
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <form action="" className="flex flex-col p-10 bg-gray-300 mt-20 gap-y-5">
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-gray-900 text-white rounded px-2 py-1"
          onClick={() => handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UseRouter;
