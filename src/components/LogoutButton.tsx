"use client";

import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="relative group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-red-500 via-red-600 to-pink-600 shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-105 focus:outline-none"
    >
      <FiLogOut className="w-5 h-5 text-white group-hover:rotate-180 transition-transform duration-300" />
      Çıkış Yap
      <span className="absolute inset-0 rounded-xl bg-white opacity-10 blur-md group-hover:opacity-20 transition-all"></span>
    </button>
  );
}
