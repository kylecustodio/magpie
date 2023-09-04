"use client";

import Button from "@/components/button";
import { useRouter } from "next/navigation";

const Landing = () => {
  const router = useRouter();

  return (
    <main className="flex w-screen h-screen flex-col items-center p-24 bg-white">
      <div className="flex flex-col gap-10 items-center">
        <h1 className="text-4xl text-black font-semibold">Magpie</h1>
        <div className="flex gap-4">
          <Button onClick={() => router.push("/signin")}>Sign in</Button>
          <Button onClick={() => router.push("/signup")}>Sign up</Button>
        </div>
      </div>
    </main>
  );
};

export default Landing;
