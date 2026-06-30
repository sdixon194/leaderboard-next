"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <div>
        <button
          onClick={() => router.push("/sign-up")}
          className="bg-white text-black font-medium px-6 py-2 rounded-md hover:bg-gray-200"
        >
          Sign Up
        </button>
        <button
          onClick={() => router.push("/sign-in")}
          className="border border-white text-white font-medium px-6 py-2 rounded-md hover:bg-neutral-800"
        >
          Sign In
        </button>
      </div>
    </main>
  );
}
