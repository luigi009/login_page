import React, { useState, ChangeEvent, FormEvent } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Feedback from "../../components/Feedback";
import SocialMediaButton from "../../components/SocialMediaButton";
import Image from "next/image";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackType, setFeedbackType] = useState("error");

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
      localStorage.setItem("email", email);

      setFeedbackType("success");
      setShowFeedback(true);
    } else if (emailRegex.test(email) && password.length < 8) {
      setFeedbackType("warning");
      setShowFeedback(true);
    } else if (!emailRegex.test(email) && password.length === 0) {
      setFeedbackType("error");
      setShowFeedback(true);
    }
  };

  const userNamePage = () => {
    const username = email.split("@")[0];

    return username;
  };

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
        className="w-96 rounded-xl bg-[#c9bbcb] bg-opacity-50 px-10 py-10 shadow-lg backdrop-blur-md max-sm:px-8"
        onSubmit={onSubmit}
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
        <Button type="submit">Login</Button>
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
