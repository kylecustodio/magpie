"use client";

import Button from "@/components/button";
import TextArea from "@/components/text-area";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

const Home = () => {
  const { user } = useAuthContext();
  const router = useRouter();

  const [postMessage, setPostMessage] = useState<string>("");

  const createPost = (event: FormEvent) => {
    event.preventDefault();
    // TODO: Create the post
    console.log(postMessage);
  };

  useEffect(() => {
    if (user === null) {
      router.push("/");
    }
  }, [user]);

  return (
    <div className="w-screen h-screen bg-white text-black">
      <div className="flex flex-col w-1/2 mx-auto items-center py-16 gap-8">
        {user?.emailVerified ? (
          <form className="flex flex-col gap-4" onSubmit={createPost}>
            <TextArea
              name="newPost"
              id="newPost"
              onChange={(e) => setPostMessage(e.target.value)}
              required
            ></TextArea>
            <Button type="submit">Post</Button>
          </form>
        ) : (
          <div>Verify your email to post.</div>
        )}
        <div className="flex flex-col grow gap-4">
          <div>sample post</div>
          <div>sample post</div>
          <div>sample post</div>
          <div>sample post</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
