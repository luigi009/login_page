import React, { useEffect } from "react";
import { useSession, signOut, getSession } from "next-auth/react";
import Button from "../../components/Button";

function user() {
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      window.location.href = "/";
    }
  }, [session]);

  return (
    <>
      {session && session.user.email}
      <Button type="button" onClick={() => signOut()}>
        Sign out
      </Button>
    </>
  );
}

export default user;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
