"use client";

import PageLayout, { FadeInSection } from "@/components/PageLayout";
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
