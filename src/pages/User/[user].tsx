import React from "react";
import { useSession, signOut } from "next-auth/react";
import Button from "../../components/Button";

function User() {
  const { data: session } = useSession();

  return (
    <>
      {session && session.user.email}
      <Button type="button" onClick={() => signOut({ callbackUrl: "/" })}>
        Sign out
      </Button>
    </>
  );
}

export default User;
