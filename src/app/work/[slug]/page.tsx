import PageLayout, { FadeInSection } from "@/components/PageLayout";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Work | Aman",
};

type Props = {
  params: Promise<{ slug: string }>;
};

const WorkPage = async ({ params }: Props) => {
  const { slug: workId } = await params;

  let WorkComponent;
  try {
    const module = await import(`../content/${workId}.mdx`);
    WorkComponent = module.default;
  } catch (err) {
    notFound();
  }

  return (
    <PageLayout>
      <FadeInSection>
        <WorkComponent />
        <WorkFooter />
      </FadeInSection>
    </PageLayout>
  );
};

const WorkFooter = () => {
  return (
    <div className="flex flex-col gap-2 mt-10 mb-5">
      <h1 className="text-2xl font-semibold text-black dark:text-white">
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

export default WorkPage;
