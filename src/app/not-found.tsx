"use client";

import Link from "next/link";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="w-full h-dvh flex flex-col gap-5 justify-center items-center">
      <DotLottieReact
        src="https://lottie.host/8657ddf1-a624-45fc-bf7b-55b0e543bb8a/W6TV1ZKHXK.lottie"
        loop
        autoplay
        className="w-[28em] h-[28em]"
      />
      <Link href={"/"} className="hover:underline flex gap-2 items-center">
        <Home /> Visit Home
      </Link>
    </div>
  );
}
