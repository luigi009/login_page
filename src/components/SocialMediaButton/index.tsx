import React, { useState, useEffect, use } from "react";
import { signIn, useSession } from "next-auth/react";
import Button from "../Button";
import Image from "next/image";

function SocialMediaButton() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  const onclickGitHub = () => {
    setLoading(true);
    signIn("github", {
      callbackUrl: `/User/${session && session.user.name}`,
    });
  };

  useEffect(() => {
    if (session) {
      setLoading(false);
    }
  }, [session]);

  return (
    <>
      <Button
        disabled={loading}
        type="button"
        onClick={onclickGitHub}
        className={
          "flex flex-row justify-start items-center pointer w-full my-4 text-xl bg-[#444444] text-white border-2 border-[#444444] p-2 rounded-full uppercase font-bold hover:opacity-75 ease-in-out duration-300"
        }
      >
        <Image src="/svg/github.svg" alt="Github" width={30} height={30} />
        <span className="w-full text-center mr-6">GitHub</span>
      </Button>
    </>
  );
}

export default SocialMediaButton;
