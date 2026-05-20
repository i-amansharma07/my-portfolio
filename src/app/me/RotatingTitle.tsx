"use client";

import { useState, useEffect } from "react";

const whoMeTranslation = [
  "कौन, मैं?",
  "Qui, moi ?",
  "谁，我？",
  "누구, 나?",
  "誰、私？",
  "Кто, я?",
  "কে, আমি?",
  "Who Me?",
];

export default function RotatingTitle() {
  const [whoMe, setWhoMe] = useState("Who Me?");

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      if (current === whoMeTranslation.length) current = 0;
      setWhoMe(whoMeTranslation[current]);
      current++;
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1
      key={whoMe}
      className="text-3xl text-black dark:text-white font-bold animate-slide-in-left"
    >
      {whoMe}
    </h1>
  );
}