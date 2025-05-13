"use client";

import Link from "next/link";
import { FadeInSection, FlexColumn } from "@/components/PageLayout";
import {
  Dot,
  GitMerge,
  TrendingUp,
  MoveUpRight,
  CalendarDays,
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
          </div>
        </div>
        <div className="pic-stats flex gap-10 items-center">
          <Image
            className="rounded-full"
            src={`/my-logo.png`}
            alt={"Logo"}
            width="75"
            height="75"
          />
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex cursor-pointer gap-5 transition delay-150 duration-200  text-light-dim hover:text-black dark:hover:text-white dark:text-dark-dim items-center">
              <GitMerge size={15} />
              <h1>40 Repository Stars</h1>
            </div>
            <div className="flex cursor-pointer gap-5 transition delay-150 duration-200  text-light-dim hover:text-black dark:hover:text-white dark:text-dark-dim items-center">
              <TrendingUp size={15} />
              <h1>6989 Blog Views</h1>
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

const TODOSection = () => {
  return (
    <ul className="list-decimal mt-16">
      <h1>Review PR, make code better</h1>
      <h1>Add Blog view count</h1>
      <h1>Make Image support in app better(store them locally/lazyloading)</h1>
    </ul>
  );
};

export { HeroSection, BlogsSection, TODOSection };
