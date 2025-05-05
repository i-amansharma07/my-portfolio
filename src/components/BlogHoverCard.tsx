"use client";

import { useState } from "react";
import { CalendarDays } from "lucide-react";
import Link from "next/link";
import { Blog } from "@/app/HomePageComponents";

export default function BlogHoverCard({ blog }: { blog: Blog }) {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMouseMove}
      className="relative w-full md:w-fit text-light-dim hover:text-black dark:text-dark-dim dark:hover:text-white transition delay-150 duration-200"
    >
      {/* Trigger */}
      <div className="hidden md:flex w-fit cursor-pointer">
        <Link href={`/blogs/${blog.id}`} className="flex gap-x-32 lg:gap-x-40">
          <h1>{blog.dateTime}</h1>
          <h1>{blog.title}</h1>
        </Link>
      </div>

      <div className="w-full md:hidden">
        <div className="flex justify-between">
          <div className="flex flex-col gap-1 justify-center">
            <h1>{blog.title}</h1>
            <h1 className="text-sm opacity-70">{blog.dateTime}</h1>
          </div>
          <img
            className="rounded-md max-w-[125px] max-h-[125px] min-w-[125px] min-h-[125px]"
            src={blog.image}
            alt={blog.id}
          />
        </div>
      </div>

      {/* Hover Content */}
      {visible && (
        <div
          className="max-w-[300px]  hidden  md:flex fixed z-50 min-w-80 bg-gray-100 dark:bg-gray-900 p-2.5 rounded-md shadow-lg transition-opacity duration-150"
          style={{
            top: position.y + 15 - 155,
            left: position.x - 50,
          }}
        >
          <div className="flex justify-between space-x-4">
            <img
              className="rounded-md max-w-[95px] max-h-[95px] min-w-[95px] min-h-[95px]"
              src={blog.image}
              alt={blog.id}
            />
            <div className="space-y-1">
              <h4 className="text-base font-semibold">{blog.title}</h4>
              <p className="text-sm line-clamp-2 text-light-dim dark:text-dark-dim ">
                {blog.description}
              </p>
              <div className="flex items-center gap-2 pt-2">
                <CalendarDays size={14} />
                <span className="text-xs text-muted-foreground text-light-dim dark:text-dark-dim">
                  {blog.dateTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
