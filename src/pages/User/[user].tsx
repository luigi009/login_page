import React, { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import Button from "../../components/Button";
import Image from "next/image";
import useSWR from "swr";

function User() {
  const { data: session, status } = useSession();
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data } = useSWR("/api/test", fetcher);
  const [normalLoading, setNormalLoading] = useState(false);

  const userName = typeof window !== "undefined" && window.location.pathname;

  useEffect(() => {
    setNormalLoading(true);
  }, []);

  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full h-screen flex flex-col justify-center items-center">
      <Image
        src={status === "authenticated" ? session.user.image : "/svg/user.svg"}
        alt="User"
        width={100}
        height={100}
        className={`rounded-full relative top-8 z-10 drop-shadow-lg ${
          !session && "bg-zinc-800 p-3"
        }`}
      />
      <div className="w-96 rounded-xl bg-[#c9bbcb] bg-opacity-50 px-10 py-10 shadow-lg backdrop-blur-md max-sm:px-8 drop-shadow-lg">
        <h1 className="text-4xl font-bold text-center">{data?.test}</h1>
        <h2 className="text-2xl font-bold text-center mt-4">
          {status === "authenticated" && session.user.name}
          {normalLoading && !session
            ? userName.split("/")[2] + "#" + Math.floor(Math.random() * 100)
            : null}
        </h2>
        <Button type="button" onClick={() => signOut({ callbackUrl: "/" })}>
          Sign out
        </Button>
      </div>
    </div>
  );
}

export default User;
