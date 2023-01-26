import React from "react";
import { signIn } from "next-auth/react";
import Button from "../Button";
import Image from "next/image";

function SocialMediaButton() {
  return (
    <>
      <Button
        type="button"
        onClick={() => signIn()}
        className={
          "flex flex-row justify-start items-center pointer w-full my-4 text-xl bg-[#444444] text-white border-2 border-[#444444] p-2 rounded-md uppercase font-bold hover:opacity-75 ease-in-out duration-300"
        }
      >
        <Image src="/svg/github.svg" alt="Github" width={30} height={30} />
        <span className="w-full text-center mr-6">GitHub</span>
      </Button>
    </>
  );
}

export default SocialMediaButton;
