"use client";

import { useEffect } from "react";
import BlogComponent from "../../page";
import { findBlogsWithTag } from "../../../../../utils/BlogsData";
import { usePathname } from "next/navigation";

export default function TagBlogListPage() {
  useEffect(() => {
    document.title = "Tag | Aman";
  }, []);

  const path = usePathname();
  const pathArray = path.split("/");
  const tag = pathArray[pathArray.length - 1];

  const filteredBlogs = findBlogsWithTag(tag);

  return <BlogComponent filteredBlogs={filteredBlogs} />;
}
