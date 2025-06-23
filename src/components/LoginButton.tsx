"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function LoginButton() {
  return (
    <button
      onClick={() => signIn("auth0")}
      className="relative group inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:from-purple-500 hover:to-indigo-500 focus:outline-none"
    >
      <svg
        className="w-5 h-5 text-white group-hover:animate-spin-slow"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 4v1m0 14v1m8.66-8.66h-1M4.34 12H3.34m14.14 5.66l-.71.71M5.21 5.21l-.71.71m12.02-.71l.71.71M5.21 18.79l.71-.71"
        />
      </svg>
      Giriş Yap
      <span className="absolute inset-0 rounded-xl bg-white opacity-10 blur-md group-hover:opacity-20 transition-all"></span>
    </button>
  );
}
