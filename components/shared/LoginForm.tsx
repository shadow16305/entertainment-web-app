"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  const router = useRouter();

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    setEmailIsValid(trimmedEmail !== "");
    setPasswordIsValid(trimmedPassword !== "");

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res && !res.error) {
        router.replace("home");
      } else {
        console.error("Authentication failed:", res?.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-y-20 px-8 lg:h-screen text-white font-light">
      <Image src="/images/Movie.svg" alt="movie icon" width={32} height={26} />
      <div className="flex flex-col bg-dark-blue rounded-3xl gap-y-10 p-8">
        <h1 className="text-[32px]">Login</h1>
        <form onSubmit={submitHandler} className="flex flex-col gap-y-6">
          <div className="flex gap-x-2 relative">
            <input
              type="email"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
              className={`bg-transparent border-b focus:outline-none pb-4 w-full ${!emailIsValid ? "border-b-red" : "border-b-dark-red "}`}
              placeholder="Email address"
            />
            {!emailIsValid && <p className="text-red text-sm absolute z-10 right-0">Can't be empty</p>}
          </div>
          <div className="flex gap-x-2 relative">
            <input
              type="password"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
              className={`bg-transparent border-b focus:outline-none pb-4 w-full ${!passwordIsValid ? "border-b-red" : "border-b-dark-red "}`}
              placeholder="Password"
            />
            {!passwordIsValid && <p className="text-red text-sm absolute z-10 right-0">Can't be empty</p>}
          </div>

          <button
            type="submit"
            className="bg-red px-24 py-4 rounded-xl hover:bg-white hover:text-black transition duration-300">
            Login to your account
          </button>
        </form>
        <span className="text-center">
          Don't have an account?{" "}
          <Link href="/signup" className="text-red">
            Sign Up
          </Link>
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
