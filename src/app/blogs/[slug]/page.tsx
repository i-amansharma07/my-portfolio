"use client";

import PageLayout, { FadeInSection } from "@/components/PageLayout";
import { usePathname } from "next/navigation";
import { JSX, useEffect, useState } from "react";

const BlogPage = () => {
  const pathName = usePathname();
  const subpath = pathName.split("/");
  const blogId = subpath[subpath.length - 1];

  const [BlogComponent, setBlogComponent] = useState<null | any>(null);

  useEffect(() => {
    const loadBlog = async () => {
      try {
        const module = await import(`../content/${blogId}.mdx`);
        setBlogComponent(() => module.default);
      } catch (err) {
        const module = await import(`../../not-found`);
        setBlogComponent(() => module.default);
      }
    };

    if (blogId) {
      loadBlog();
    }
  }, [blogId]);

  useEffect(() => {
    document.title = "Blog | Aman";
  }, []);

  return (
    <PageLayout>
      {BlogComponent ? (
        <FadeInSection className="text-yellow-300">
          <BlogComponent />
        </FadeInSection>
      ) : (
        <div className="w-full h-full justify-center items-center">
          Fetching...
        </div>
      )}
    </PageLayout>
  );
};

export default BlogPage;
