import React from "react";
import * as I from "./interfaces";
import Image from "next/image";

function index({
  label,
  name,
  type,
  value,
  onChange,
  inputClassName,
  labelClassName,
  placeholder,
  imgIcon,
  altImgIcon,
}: I.InputProps) {
  return (
    <>
      <label
        htmlFor={name}
        className={`${
          labelClassName
            ? labelClassName
            : "mb-1 text-xs sm:text-sm tracking-wide text-stone-900"
        }`}
      >
        {label}
      </label>
      <div className="relative">
        <div className="inline-flex items-center justify-center absolute left-[2px] bottom-[17px] h-10 w-10 text-gray-400 bg-zinc-800 rounded-tl-md rounded-bl-md">
          <Image src={imgIcon} alt={altImgIcon} width={30} height={30} />
        </div>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${
            inputClassName
              ? inputClassName
              : `text-sm sm:text-base mb-4 ${
                  imgIcon ? "pl-12 pr-4 py-2" : "py-2 px-4"
                } bg-zinc-600 placeholder:text-white text-white rounded-lg border border-gray-400 w-full focus:outline-none focus:border-white`
          }`}
        />
      </div>
    </>
  );
}

export default index;
