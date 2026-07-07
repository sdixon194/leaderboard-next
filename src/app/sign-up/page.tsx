"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { authClient } from "@/lib/auth-client";
export default function SignUpPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.currentTarget);
    const res = await authClient.signUp.email({
      name: formData.get("displayName") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });
    if (res.error) {
      setError(res.error.message || "Something went wrong.");
    } else {
      router.push("/dashboard");
    }
  }
  return (
    <div className="bg-white rounded-md flex flex-col max-w-md mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Sign Up</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
        {" "}
        <input
          name="displayName"
          placeholder="Display Name"
          required
        />{" "}
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
        />{" "}
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          minLength={8}
        />{" "}
        <button
          type="submit"
        >
          {" "}
          Create Account
        </button>{" "}
      </form>{" "}
    </div>
  );
}
