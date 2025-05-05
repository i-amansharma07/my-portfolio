"use client";

import { useEffect } from "react";

export default function Work() {
  useEffect(() => {
    document.title = "Work | Aman";
  }, []);

  return (
    <div className="text-2xl text-white">Listing will me professional work</div>
  );
}
