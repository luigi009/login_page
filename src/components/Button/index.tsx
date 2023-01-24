import React from "react";
import * as I from "./interfaces";

function index({ children, onClick, className }: I.ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${
        className
          ? className
          : "pointer w-full my-4 text-xl bg-zinc-800 text-white border-2 border-zinc-800 p-2 rounded-md uppercase font-bold hover:text-zinc-800 hover:bg-white ease-in-out duration-300"
      }`}
    >
      {children}
    </button>
  );
}

export default index;
