import Image from "next/image";

import PageLayout, {
  FadeInSection,
  FlexColumn,
  FlexRowToColumn,
} from "@/components/PageLayout";
import { textLightDark } from "../../../utils/styles";
import { Dot } from "lucide-react";
import Link from "next/link";

interface WorkType {
  id: string;
  title: string;
  image: string;
  description: string;
  year: string;
}

const allWork: WorkType[] = [
  {
    id: "blood-sweat-cheers",
    title: "Blood Sweat Cheers",
    image: "/media/bsc.png",
    description: `Workout App for gym rats`,
    year: "2022",
  },
  {
    id: "brain-rotting",
    title: "Brain rotting",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*eRDecUz13fOHlm8x2WzZgQ.jpeg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Saepe sit nisi eligendi.`,
    year: "2024",
  },
];

export default function Work() {
  return (
    <PageLayout>
      <FadeInSection className="p-2">
        <FlexColumn className="gap-y-1 mb-16 md:mb-24">
          <h1 className="text-3xl text-black dark:text-white font-bold">
            Build fast, Ship fast
          </h1>
          <h1 className="text-sm text-light-dim dark:text-dark-dim">
            Here are some of the side-projects I've worked on.
          </h1>
        </FlexColumn>
        <FlexColumn className="gap-y-10 md:gap-y-14">
          {allWork.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </FlexColumn>
      </FadeInSection>
    </PageLayout>
  );
}

const WorkCard = ({ work }: { work: WorkType }) => {
  return (
    <Link href={`/work/${work.id}`} className="block">
      <div className="flex flex-col md:flex-row gap-5 md:opacity-65 hover:opacity-100 transition-opacity">
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
    </Link>
  );
};
