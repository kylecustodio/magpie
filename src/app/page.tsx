import Button from "@/components/button";

export default function Home() {
  return (
    <main className="flex w-screen h-screen flex-col items-center p-24 bg-pink-200">
      <div className="flex flex-col gap-10 items-center">
        <h1 className="text-9xl text-black font-semibold">Magpie</h1>
        <div className="flex gap-4">
          <Button>Sign in</Button>
          <Button>Sign up</Button>
        </div>
      </div>
    </main>
  );
}
