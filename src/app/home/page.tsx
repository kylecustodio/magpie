"use client";

import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
  const auth = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (auth?.user === null) {
      router.push("/");
    }
  }, [auth]);

  return <div className="w-screen h-screen bg-fucshia-200">Home workds</div>;
};

export default Home;
