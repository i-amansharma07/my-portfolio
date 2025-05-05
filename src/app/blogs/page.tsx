"use client";

import PageLayout from "@/components/PageLayout";
import { useEffect } from "react";
import { BlogsSection } from "../HomePageComponents";

export default function Blogs() {
  useEffect(() => {
    document.title = "Blogs | Aman";
  }, []);
  return (
    <PageLayout>
      <BlogsSection />
    </PageLayout>
  );
}
