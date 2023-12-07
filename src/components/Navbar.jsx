import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full absolute z-[100] p-4">
      <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
        NETFLIX
      </h1>
      <div>
        <button className="text-white pr-4 hover:font-bold">Sign In</button>
        <button className="bg-red-500 text-white rounded px-6 py-2 hover:bg-red-600 duration-300">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
