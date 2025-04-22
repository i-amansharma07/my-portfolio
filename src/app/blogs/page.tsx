"use client"


import { useEffect } from "react";

export default function Blogs() {
  useEffect(()=> {
    document.title = "Blogs | Aman"
  },[])
    return (
      <div className="text-2xl text-white">Blogs page</div>
    );
  }
