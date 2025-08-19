"use client";

import PageLayout, {
  FadeInSection,
  FlexColumn,
  FlexRowToColumn,
} from "@/components/PageLayout";
import { useEffect, useState } from "react";
import { Maximize2, X } from "lucide-react";

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
            memories stoed in bits & bytes
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
//sm:group-hover:opacity-100
const ClickCard = ({ click }: { click: ClickType }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div className="relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
        <img
          className="w-full h-auto object-cover"
          src={click.image}
          alt={click.title}
        />

        {/* Maximize Icon */}
        <div
          className="absolute top-2 right-2 sm:opacity-0 group-hover:opacity-100  transition-opacity duration-300 cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <Maximize2 className="w-6 h-6 text-white drop-shadow" />
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm transition-transform duration-300"
          onClick={() => setIsOpen(false)} // close on backdrop click
        >
          <div
            className="relative max-w-5xl w-full mx-4 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()} // prevent close on modal click
          >
            {/* Image */}
            <img
              src={click.image}
              alt={click.title}
              className="max-h-[80vh] w-auto object-contain rounded-lg shadow-lg"
            />

            {/* Description */}
            <div className="mt-4 text-center text-gray-200 max-w-3xl">
              <h2 className="text-xl font-semibold text-black dark:text-white">
                {click.title}
              </h2>
              <p className="mt-2 text-sm  text-light-dim dark:text-dark-dim">
                {click.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

interface ClickType {
  title: string;
  image: string;
  description: string;
  year: string;
}

const allClicks: ClickType[] = [
  {
    title: "Morning in Himachal",
    image: "/media/kasol-morning.jpg",
    description: `Woke up with this view in a village of Himachal Pradesh called Kasol`,
    year: "Apr 2023",
  },
  {
    title: "Tosh",
    image: "/media/bike.jpg",
    description: `Riding classic 350 on moutains`,
    year: "Apr 2023",
  },

  {
    title: "Smart India Hackathon",
    image: "/media/sih.jpg",
    description: `Coded an app over 2 days without sleep, high on caffeine`,
    year: "Aug 2022",
  },
  {
    title: "BIT Mesra",
    image: "/media/bits.jpg",
    description: `Great experience in 780 acres campus`,
    year: "Aug 2022",
  },
  {
    title: "Challal",
    image: "/media/halt-bike.jpg",
    description: `Enjoying the view`,
    year: "Apr 2023",
  },
];
