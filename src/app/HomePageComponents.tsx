"use client";

import Link from "next/link";
import { useState } from "react";
import { FadeInSection, FlexColumn } from "@/components/PageLayout";
import {
  Dot,
  GitMerge,
  TrendingUp,
  MoveUpRight,
  CalendarDays,
  TrophyIcon,
} from "lucide-react";
import Image from "next/image";
import BlogHoverCard from "@/components/BlogHoverCard";
import { BlogType, allBlogs } from "../../utils/BlogsData";

const HeroSection = () => {
  return (
    <FadeInSection>
      <FlexColumn>
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold">Aman Sharma</h1>
          <div className="Sub-points flex  items-center text-light-dim  dark:text-dark-dim text-sm">
            <h1>Code</h1>
            <Dot size={20} />
            <h1>Football</h1>
            <Dot size={20} />
            <h1>Music</h1>
            <Dot size={20} />
            <h1>Comedy</h1>
            <Dot size={20} />
            <h1>Riding</h1>
          </div>
        </div>
        <div className="pic-stats flex gap-10 items-center">
          <Image
            className="rounded-full"
            src={`/media/my-logo.webp`}
            alt={"Logo"}
            width="75"
            height="75"
          />
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex cursor-pointer gap-5 transition delay-150 duration-200  text-light-dim hover:text-black dark:hover:text-white dark:text-dark-dim items-center">
              <TrophyIcon size={15} />
              <h1>Smart India Hackathon Finalist</h1>
            </div>
            <div className="flex cursor-pointer gap-5 transition delay-150 duration-200  text-light-dim hover:text-black dark:hover:text-white dark:text-dark-dim items-center">
              <TrendingUp size={15} />
              <h1>1,316 App users</h1>
            </div>
          </div>
        </div>
        <h1 className="one-liner-intro dark:text-white text-black text-base">
          Everything about me, engineering and life as I see it.
        </h1>
        <Link
          href="/links"
          className="connect-with-me gap-2 flex w-fit items-center cursor-pointer text-blue-500 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-400 text-base -mt-4"
        >
          <MoveUpRight size={15} />
          <h1>More ways to connect</h1>
        </Link>
      </FlexColumn>
    </FadeInSection>
  );
};

const BlogsSection = () => {
  return (
    <FadeInSection>
      <FlexColumn className="mt-5">
        <h1 className="blogs-heading text-lg text-light-dim dark:text-dark-dim">
          Latest Wanders
        </h1>
        <FlexColumn>
          {allBlogs.slice(0, 3).map((inputBlog) => {
            return <BlogHoverCard key={inputBlog.id} blog={inputBlog} />;
          })}
          <Link
            href="/blogs"
            className="see-all transition delay-100 duration-100 gap-2 flex w-fit items-center cursor-pointer hover:underline text-light-dim hover:text-black dark:text-dark-dim dark:hover:text-white text-base"
          >
            <MoveUpRight size={15} />
            <h1>See All</h1>
          </Link>
        </FlexColumn>
      </FlexColumn>
    </FadeInSection>
  );
};

const NpxSection = () => {
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
};

const TODOSection = () => {
  return (
    <ul className="list-decimal mt-16">
      <li>Add more blogs and work items</li>
      <li>Fix hero section with correct stats</li>
    </ul>
  );
};

export { HeroSection, BlogsSection, NpxSection, TODOSection };
