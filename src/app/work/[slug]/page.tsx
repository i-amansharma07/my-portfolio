"use client";

import PageLayout, { FadeInSection } from "@/components/PageLayout";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX, useEffect, useState } from "react";

const BlogPage = () => {
  const pathName = usePathname();
  const subpath = pathName.split("/");
  const workId = subpath[subpath.length - 1];

  const [WorkComponent, setWorkComponent] = useState<null | any>(null);

  useEffect(() => {
    const loadBlog = async () => {
      try {
        const module = await import(`../content/${workId}.mdx`);
        setWorkComponent(() => module.default);
      } catch (err) {
        const module = await import(`../../not-found`);
        setWorkComponent(() => module.default);
      }
    };

    if (workId) {
      loadBlog();
    }
  }, [workId]);

  useEffect(() => {
    document.title = "Blog | Aman";
  }, []);

  return (
    <PageLayout>
      {WorkComponent ? (
        <FadeInSection>
          <WorkComponent />
          <WorkFooter />
        </FadeInSection>
      ) : (
        <div className="w-full h-full justify-center items-center">
          Fetching...
        </div>
      )}
    </PageLayout>
  );
};

const WorkFooter = () => {
  return (
    <div className="flex flex-col gap-2 mt-5 mb-5">
      <h1 className="text-xl font-semibold text-black dark:text-white">
        Contact
      </h1>
      <p className="mt-2 text-sm  text-light-dim dark:text-dark-dim">
        Need more project details, or interested in working together? Reach out
        to me directly via{" "}
        <Link href={`/links`} className="underline text-blue-300">
          here
        </Link>
        . I'd be happy to connect!
      </p>
    </div>
  );
};

export default BlogPage;
