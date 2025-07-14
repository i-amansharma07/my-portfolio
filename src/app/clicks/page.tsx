"use client";

import PageLayout, {
  FadeInSection,
  FlexColumn,
  FlexRowToColumn,
} from "@/components/PageLayout";
import { useEffect } from "react";

export default function Clicks() {
  useEffect(() => {
    document.title = "Clicks | Aman";
  }, []);

  return (
    <PageLayout>
      <FadeInSection>
        <FlexColumn className="gap-y-1">
          <h1 className="text-3xl text-black dark:text-white font-bold">
            Photographs
          </h1>
          <h1 className="text-sm text-light-dim dark:text-dark-dim">
            The very few that makes it out from my hard drive.
          </h1>

          <div className="flex flex-col items-center  md:grid md:grid-cols-3  gap-5 mt-10">
            {allClicks.map((item) => (
              <ClickCard click={item} key={item.id} />
            ))}
          </div>
        </FlexColumn>
      </FadeInSection>
    </PageLayout>
  );
}

const ClickCard = ({ click }: { click: ClickType }) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
      <img
        className="w-full h-auto object-cover"
        src={click.image}
        alt={click.id}
      />
    </div>
  );
};

interface ClickType {
  id: string;
  title: string;
  image: string;
  description: string;
  year: string;
}

const allClicks: ClickType[] = [
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
  {
    id: "alice-in-the-tinder-landd",
    title: "Blood Sweat Cheers",
    image:
      "https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=",
    description: `New AI powered app`,
    year: "2022",
  },
];
