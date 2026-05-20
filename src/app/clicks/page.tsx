import PageLayout, {
  FadeInSection,
  FlexColumn,
} from "@/components/PageLayout";
import ClickCard, { ClickType } from "./ClickCardClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clicks | Aman",
};

export default function Clicks() {
  return (
    <PageLayout>
      <FadeInSection>
        <FlexColumn className="gap-y-1">
          <h1 className="text-3xl text-black dark:text-white font-bold">
            Photographs
          </h1>
          <h1 className="text-sm text-light-dim dark:text-dark-dim">
            memories stored in bits & bytes
          </h1>

          <div className="mt-10 columns-1 sm:columns-2 md:columns-3 gap-5 space-y-5">
            {allClicks.map((item) => (
              <ClickCard click={item} key={item.image} />
            ))}
          </div>
        </FlexColumn>
      </FadeInSection>
    </PageLayout>
  );
}

const allClicks: ClickType[] = [
  {
    title: "Morning in Himachal",
    image: "/media/kasol-morning.webp",
    description: `Woke up with this view in a village of Himachal Pradesh called Kasol`,
    year: "Apr 2023",
  },
  {
    title: "Tosh",
    image: "/media/bike.webp",
    description: `Riding classic 350 on moutains`,
    year: "Apr 2023",
  },

  {
    title: "Smart India Hackathon",
    image: "/media/sih.webp",
    description: `Coded an app over 2 days without sleep, high on caffeine`,
    year: "Aug 2022",
  },
  {
    title: "Dalai Hills",
    image: "/media/dalai-hills.webp",
    description: `Enjoying the view`,
    year: "Apr 2023",
  },
  {
    title: "BIT Mesra",
    image: "/media/bits.webp",
    description: `Great experience in 780 acres campus`,
    year: "Aug 2022",
  },
  {
    title: "Challal",
    image: "/media/halt-bike.webp",
    description: `Enjoying the view`,
    year: "Apr 2023",
  },
];
