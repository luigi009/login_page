import React, { useState, ChangeEvent } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form>
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
        <Button>Login</Button>
      </form>
    </div>
  );
}
