"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import signUp from "@/firebase/auth/signup";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const SignUp = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const { result, error } = await signUp(email, password);

    if (error) {
      // handle error
      console.error(error);
      return;
    }

    router.push("/home");
  };

  return (
    <div className="h-screen w-screen bg-fuchsia-200 p-24">
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-4xl text-black">Sign up</h1>
        <form className="flex flex-col gap-8" onSubmit={onSubmit}>
          <Input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            name="email"
            id="email"
            placeholder="example@example.com"
          />
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            name="password"
            id="password"
            placeholder="password"
          />
          <Button type="submit">Sign up</Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
