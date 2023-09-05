"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import signIn from "@/firebase/auth/signin";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

const SignIn = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const { result, error } = await signIn(email, password);

    if (error) {
      // handle error
      console.error(error);
      return;
    }

    router.push("/home");
  };

  return (
    <div className="h-screen w-screen bg-white p-24">
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-4xl text-black">Sign in</h1>
        <form className="flex flex-col gap-8" onSubmit={onSubmit}>
          <Input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            name="email"
            id="email"
            placeholder="email"
          />
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            name="password"
            id="password"
            placeholder="password"
          />
          <Button type="submit">Sign in</Button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
