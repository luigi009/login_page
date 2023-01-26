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
            : "mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
        }`}
      >
        {label}
      </label>
      <div className="relative">
        <div className="inline-flex items-center justify-center absolute left-0 bottom-2 h-full w-10 text-gray-400">
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
              : `text-sm sm:text-base placeholder-gray-500 mb-4 ${
                  imgIcon ? "pl-10 pr-4 py-2" : "py-2 px-4"
                } rounded-lg border border-gray-400 w-full focus:outline-none focus:border-[#2b5aa4]`
          }`}
        />
      </div>
    </>
  );
}

export default index;
