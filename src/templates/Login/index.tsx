import React, { useState, ChangeEvent, FormEventHandler } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Feedback from "../../components/Feedback";
import SocialMediaButton from "../../components/SocialMediaButton";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import Router from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackType, setFeedbackType] = useState("error");
  const { data: session, status } = useSession();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
    });

    if (res.ok) {
      Router.push(`/User/${session && session.user.name}`);
    } else {
      setFeedbackType("error");
      setShowFeedback(true);
    }
  };

  const userNamePage = () => {
    const username = email.split("@")[0];

    return username;
  };

  console.log(status);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center drop-shadow-lg">
      <Image
        className="bg-zinc-800 p-3 rounded-full relative top-8 z-10 drop-shadow-lg"
        src="/svg/user.svg"
        alt="user-icon"
        width={100}
        height={100}
      />
      <form
        onSubmit={onSubmit}
        className="w-96 rounded-xl bg-[#c9bbcb] bg-opacity-50 px-10 py-10 shadow-lg backdrop-blur-md max-sm:px-8"
      >
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
        <Button type="submit">
          {status === "loading" ? "loading" : "Login"}
        </Button>
        <SocialMediaButton />
      </form>
      <Feedback
        type={feedbackType}
        show={showFeedback}
        onClose={() => setShowFeedback(false)}
        userName={userNamePage}
      />
    </div>
  );
}
