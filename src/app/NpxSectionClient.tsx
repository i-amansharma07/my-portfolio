"use client";

import { useState } from "react";
import { FadeInSection } from "@/components/PageLayout";

export default function NpxSection() {
  const [copied, setCopied] = useState(false);
  const command = "npx hey-aman-sharma";

  const copy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <FadeInSection className="flex flex-col">
      <h1 className="mb-3 text-sm text-light-dim dark:text-dark-dim">
        Grab my info in your terminal :)
      </h1>
      <div className="w-fit inline-flex items-center gap-3  bg-white dark:bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 font-mono text-sm">
        <span className="text-neutral-500 select-none">$</span>
        <span className="text-light-dim dark:text-neutral-200 tracking-wide">
          {command}
        </span>
        <button
          onClick={copy}
          title={copied ? "Copied!" : "Copy"}
          className={`ml-1 cursor-pointer transition-colors duration-200 ${
            copied
              ? "text-green-400"
              : "text-neutral-600 hover:text-neutral-400"
          }`}
        >
          {copied ? (
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          )}
        </button>
      </div>
    </FadeInSection>
  );
}