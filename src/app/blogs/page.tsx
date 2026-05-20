import PageLayout, { FadeInSection, FlexColumn } from "@/components/PageLayout";
import { allBlogs, findBlogsWithTag } from "../../../utils/BlogsData";
import type { BlogType } from "../../../utils/BlogsData";
import Link from "next/link";
import { Metadata } from "next";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const { tag } = await searchParams;
  return {
    title: tag ? "Blogs | Aman" : "Tag | Aman",
  };
}

export default async function Blogs({ searchParams }: Props) {
  const { tag } = await searchParams;
  const tagStr = typeof tag === "string" ? tag : undefined;
  const filteredBlogs: BlogType[] | null = tagStr
    ? findBlogsWithTag(tagStr)
    : null;

  return (
    <PageLayout>
      <FadeInSection>
        <FlexColumn className="gap-5">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold">
              {filteredBlogs
                ? `${filteredBlogs.length} ${
                    filteredBlogs.length === 1 ? "Item" : "Items"
                  } found`
                : "Thoughts"}
            </h1>
            <div className="Sub-heading flex items-center text-light-dim dark:text-dark-dim text-sm">
              {!filteredBlogs && (
                <h1>
                  {allBlogs.length} bleh about life, engineering and more ...
                </h1>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 sm:grid sm:grid-cols-2 sm:gap-10 -mt-5">
            {(filteredBlogs || allBlogs).map((item) => (
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
        <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">
          {blog.dateTime} • {blog.readTime}
        </p>
        <Link href={`/blogs/${blog.id}`}>
          <h2
            className={`text-xl font-bold text-gray-800 dark:text-white mb-2 transition-all duration-300 ${
              blog.title.length > 30 && "line-clamp-1"
            }`}
          >
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
