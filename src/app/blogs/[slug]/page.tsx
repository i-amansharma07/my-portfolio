import PageLayout, { FadeInSection, FlexColumn } from "@/components/PageLayout";
import Link from "next/link";
import { allBlogs, BlogType } from "../../../../utils/BlogsData";
import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Blog | Aman",
};

type Props = {
  params: Promise<{ slug: string }>;
};

const BlogPage = async ({ params }: Props) => {
  const { slug: blogId } = await params;

  const blogArrayItem: BlogType | undefined = allBlogs.find(
    (item) => item.id === blogId
  );

  let BlogComponent;
  try {
    const module = await import(`../content/${blogId}.mdx`);
    BlogComponent = module.default;
  } catch (err) {
    notFound();
  }

  return (
    <PageLayout>
      <FadeInSection>
        <BlogHeader blog={blogArrayItem} />
        <BlogComponent />
        <BlogFooter blog={blogArrayItem} />
      </FadeInSection>
    </PageLayout>
  );
};

const BlogHeader = ({ blog }: { blog: BlogType | undefined }) => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-4xl leading-tight font-bold">{blog?.title}</h1>
      <h2 className="text-light-dim  dark:text-dark-dim text-sm mt-[-20px]">
        {blog?.readTime} read
      </h2>
      <img className="w-full mb-10" src={blog?.image} alt={blog?.title} />
    </div>
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
      <div className="flex gap-10 mt-10">
        <Image
          className="rounded-full"
          src={`/media/my-logo.webp`}
          alt={"Logo"}
          width="55"
          height="55"
        />
        <div className="flex flex-col gap-1">
          <h1 className="text-xl">Aman Sharma</h1>
          <h2 className="text-light-dim  dark:text-dark-dim text-sm">
            {blog?.dateTime}
          </h2>
        </div>
      </div>
    </FlexColumn>
  );
};

const TagCard = ({ tagName }: { tagName: string }) => {
  return (
    <Link
      className="underline-offset-4 px-4 py-2 rounded-lg bg-neutral-200  dark:bg-neutral-800 text-sm"
      href={`/blogs?tag=${tagName.toLowerCase()}`}
    >
      {tagName}
    </Link>
  );
};

export default BlogPage;
