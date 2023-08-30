"use client";

import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Feed = () => {
  const auth = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (auth?.user === null) {
      router.push("/");
    }
  }, [auth]);

  return <div>feed workds</div>;
};

export default Feed;
