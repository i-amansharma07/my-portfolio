import Image from "next/image";

import PageLayout, { FadeInSection, FlexColumn } from "@/components/PageLayout";
import { textLightDark } from "../../../utils/styles";
import { Dot } from "lucide-react";
import Link from "next/link";

interface WorkType {
  id: string;
  title: string;
  image: string;
  description: string;
  year: string;
  github?: string;
  livelink?: string;
  redirect?: Boolean;
}

const allWork: WorkType[] = [
  {
    id: "",
    title: "Portfolio",
    image: "/work/portfolio.png",
    description: `Next JS based personal portfolio website inlcudes blogging support, deployed on Vercel`,
    year: "2025",
    livelink: "https://aman-me.vercel.app/",
    redirect: true,
  },
  {
    id: "bloop",
    title: "Bloop",
    image: "/work/bloop.png",
    description: `Realtime chat app powered with web scokets`,
    year: "2024",
    github: "https://github.com/i-amansharma07/Bloop",
  },
  // {
  //   id: "",
  //   title: "Hoo Bank",
  //   image: "/work/hoo-bank.png",
  //   description: `Exploring react alongwith taliwind css and created a static home page and made it responsive this time `,
  //   year: "2023",
  //   livelink: "https://660087873840ca22e1d9ae6a--demobanksite.netlify.app/",
  //   redirect: true,
  // },
  // {
  //   id: "",
  //   title: "Amazon home page clone",
  //   image: "/work/amazon.png",
  //   description: `This was the moment I stepped into web development.
  //   I built my very first static web app (non-reponsive) as a way to explore and understand the basics of HTML and CSS.`,
  //   year: "2023",
  //   livelink: "https://i-amansharma07.github.io/amazon-clone/",
  //   redirect: true,
  // },
  {
    id: "blood-sweat-cheers",
    title: "Blood Sweat Cheers",
    image: "/work/bsc.png",
    description: `Android based Workout App for gym rats`,
    year: "2022",
    github: "https://github.com/i-amansharma07/Blood-Sweat-Cheers",
  },
];

export default function Work() {
  return (
    <PageLayout>
      <FadeInSection className="p-2">
        <FlexColumn className="gap-y-1 mb-16 md:mb-24">
          <h1 className="text-3xl text-black dark:text-white font-bold">
            My Learning Journey
          </h1>
          <h1 className="text-sm text-light-dim dark:text-dark-dim">
            From concept to execution—built with intention and clarity.
          </h1>
        </FlexColumn>
        <FlexColumn className="gap-y-10 md:gap-y-14">
          {allWork.map((work) => (
            <WorkCard key={work.title} work={work} />
          ))}
        </FlexColumn>
      </FadeInSection>
    </PageLayout>
  );
}

const WorkCard = ({ work }: { work: WorkType }) => {
  return (
    <>
      {work.redirect ? (
        <a
          href={work.livelink}
          target="_blank"
          rel="noopener noreferrer"
          className="your-tailwind-classes"
        >
          <CardInner work={work} />
        </a>
      ) : (
        <Link href={`/work/${work.id}`} className="block">
          <CardInner work={work} />
        </Link>
      )}
    </>
  );
};

const CardInner = ({ work }: { work: WorkType }) => {
  return (
    <div className="flex flex-col md:flex-row gap-5 md:opacity-80 hover:opacity-100 transition-opacity">
      <div className="w-full h-56 md:w-[300px] md:h-[150px] flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
        <Image
          className="w-full h-full object-cover bg-yellow"
          src={work.image}
          alt={work.title}
          width={300}
          height={150}
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center text-base">
          <h1>{work.title}</h1>
          <Dot size={20} />
          <h2 className={textLightDark}>{work.year}</h2>
        </div>
        <p className={`${textLightDark} text-sm`}>{work.description}</p>
      </div>
    </div>
  );
};
