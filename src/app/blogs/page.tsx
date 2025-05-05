"use client";

import PageLayout, { FadeInSection, FlexColumn } from "@/components/PageLayout";
import { useEffect } from "react";
import { allBlogs, BlogType } from "../../../utils/BlogsData";
import Link from "next/link";

export default function Blogs() {
  useEffect(() => {
    document.title = "Blogs | Aman";
  }, []);
  return (
    <PageLayout>
      <FadeInSection>
        <FlexColumn className="gap-5">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold">Thoughts</h1>
            <div className="Sub-heading flex  items-center text-light-dim  dark:text-dark-dim text-sm">
              <h1>
                {allBlogs.length} bleh about life, engineering and more ...
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 sm:grid sm:grid-cols-2 sm:gap-10 -mt-5">
            {allBlogs.map((item) => (
              <BlogCard key={item.id} blog={item} />
            ))}
          </div>
        </FlexColumn>
      </FadeInSection>
    </PageLayout>
  );
}

const BlogCard = ({ blog }: { blog: BlogType }) => {
  return (
    <div className="max-w-xl relative mx-auto mt-8 bg-white dark:bg-neutral-800 shadow-lg border border-black dark:border-neutral-900  rounded-md hover:shadow-xl  transition-transform duration-150 transform hover:scale-[98%]">
      <div className="p-6 group">
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
          {blog.dateTime} • {blog.readTime}
        </p>
        <Link href={`/blogs/${blog.id}`}>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 transition-all duration-300 ">
            {blog.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4 transition-transform duration-300 line-clamp-3">
            {blog.description}
          </p>
        </Link>
        <div className="flex flex-wrap gap-2 mb-4">
          {blog.tags.map((tag, index) => (
            <span
              key={index}
              className="text-sm text-blue-600 dark:text-blue-400"
            >
              #{tag}
            </span>
          ))}
        </div>
        <Link
          href={`/blogs/${blog.id}`}
          className="text-blue-600 text-sm dark:text-blue-400 hover:underline"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};
