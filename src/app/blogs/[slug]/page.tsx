"use client";

import PageLayout, { FadeInSection, FlexColumn } from "@/components/PageLayout";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX, useEffect, useState } from "react";
import { allBlogs, BlogType } from "../../../../utils/BlogsData";

const BlogPage = () => {
  const pathName = usePathname();
  const subpath = pathName.split("/");
  const blogId = subpath[subpath.length - 1];

  const [BlogComponent, setBlogComponent] = useState<null | any>(null);

  const blogArrayItem: BlogType | undefined = allBlogs.find(
    (item) => item.id === blogId
  );

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
        <FadeInSection>
          <BlogComponent />
          <BlogFooter blog={blogArrayItem} />
        </FadeInSection>
      ) : (
        <div className="w-full h-full justify-center items-center">
          Fetching...
        </div>
      )}
    </PageLayout>
  );
};

const BlogFooter = ({ blog }: { blog: BlogType | undefined }) => {
  return (
    <FlexColumn className="mb-10">
      <h1 className="text-2xl font-bold mt-5">Tags</h1>
      <div className="flex gap-5">
        {blog?.tags?.map((tag) => (
          <TagCard key={tag} tagName={tag} />
        ))}
      </div>
    </FlexColumn>
  );
};

const TagCard = ({ tagName }: { tagName: string }) => {
  return (
    <Link
      className="underline-offset-4 px-4 py-2 rounded-lg bg-neutral-200  dark:bg-neutral-800 text-sm"
      href={`/blogs/tag/${tagName.toLowerCase()}`}
    >
      {tagName}
    </Link>
  );
};

export default BlogPage;
