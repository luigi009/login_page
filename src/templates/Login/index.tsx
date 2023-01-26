import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Feedback from "../../components/Feedback";
import { getSession, useSession } from "next-auth/react";
import SocialMediaButton from "../../components/SocialMediaButton";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackType, setFeedbackType] = useState("error");
  const { data: session } = useSession();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailRegex = new RegExp(
      "^[a-zA-Z0-9_.+-]+@(hotmail|gmail|yahoo|outlook|live)\\.com$"
    );

    if (emailRegex.test(email) && password.length >= 8) {
      setFeedbackType("success");
      setShowFeedback(true);
    } else {
      setFeedbackType("error");
      setShowFeedback(true);
    }
  };

  const userNamePage = () => {
    const username = email.split("@")[0];

    return username;
  };

  useEffect(() => {
    if (session) {
      window.location.href = `/User/${session?.user?.name}`;
    }
  }, [session]);

  return (
    <>
      <form onSubmit={onSubmit}>
        <Input
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          imgIcon="/svg/email.svg"
          altImgIcon="Email"
        />
        <Input
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
          imgIcon="/svg/password.svg"
          altImgIcon="Password"
        />
        <Feedback
          type={feedbackType}
          show={showFeedback}
          onClose={() => setShowFeedback(false)}
          userName={userNamePage}
        />
        <Button type="submit">Login</Button>
        <SocialMediaButton />
      </form>
    </>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: `${window.location.origin}/User/${session.user.name}`,
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
