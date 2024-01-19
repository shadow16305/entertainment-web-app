"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [repeatedPasswordIsValid, setRepeatedPasswordIsValid] = useState(true);

  const router = useRouter();

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedRepeatedPassword = repeatedPassword.trim();

    setEmailIsValid(trimmedEmail !== "");
    setPasswordIsValid(trimmedPassword !== "");
    setRepeatedPasswordIsValid(trimmedRepeatedPassword === trimmedPassword);

    try {
      const res = await fetch("api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          repeatedPassword,
        }),
      });

      if (res.ok) {
        const form = event.target as HTMLFormElement;
        form.reset();
        router.push("/home");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-y-20 px-8 lg:h-screen text-white">
      <Image src="/images/Movie.svg" alt="movie icon" width={32} height={26} />
      <div className="flex flex-col bg-dark-blue rounded-3xl gap-y-10 p-8">
        <h1 className="text-[32px] font-light">Sign Up</h1>
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
          <div className="flex gap-x-2 relative">
            <input
              type="password"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setRepeatedPassword(event.target.value)}
              className={`bg-transparent border-b focus:outline-none pb-4 w-full ${!repeatedPasswordIsValid ? "border-b-red" : "border-b-dark-red "}`}
              placeholder="Repeat password"
            />
            {!repeatedPasswordIsValid && (
              <p className="text-red text-sm absolute z-10 right-0">Passwords don't match</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-red px-24 py-4 rounded-xl hover:bg-white hover:text-black transition duration-300">
            Create your account
          </button>
        </form>
        <span className="text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-red">
            Login
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SignUpForm;
