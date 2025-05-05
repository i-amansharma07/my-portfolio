"use client";

import { useEffect } from "react";

export default function Clicks() {
  useEffect(() => {
    document.title = "Clicks | Aman";
  }, []);

  return <div className="text-2xl text-white">these are my pics</div>;
}
