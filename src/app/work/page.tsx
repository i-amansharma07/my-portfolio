import Image from "next/image";

import PageLayout, {
  FadeInSection,
  FlexColumn,
  FlexRow,
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
    id: "alice-in-the-tinder-land",
    title: "Blood Sweat Cheers",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_aliceinwonderland_19875_ad409a49.jpeg?region=0%2C0%2C540%2C810",
    description: `New AI powered app`,
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
    <Link href={`/work/${work.id}`}>
      <FlexRowToColumn className="md:opacity-65 hover:opacity-100 gap-y-5">
        <Image
          className="rounded-md h-56  object-cover md:max-w-[300px] md:max-h-[150px] md:min-w-[300px] md:min-h-[150px]"
          src={work.image}
          alt={work.id}
          width={500}
          height={500}
        />
        <FlexColumn className="gap-y-1">
          <h1 className={`text-base flex items-center`}>
            {work.title} <Dot size={20} />
            <h2 className={`${textLightDark}`}>{work.year}</h2>{" "}
          </h1>
          <h1 className={`${textLightDark} text-sm`}>{work.description}</h1>
        </FlexColumn>
      </FlexRowToColumn>
    </Link>
  );
};

