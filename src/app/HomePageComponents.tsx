"use client";

import Link from "next/link";
import { FadeInSection, FlexColumn } from "@/components/PageLayout";
import {
  Dot,
  GitMerge,
  TrendingUp,
  MoveUpRight,
  CalendarDays,
} from "lucide-react";
import Image from "next/image";
import BlogHoverCard from "@/components/BlogHoverCard";

const HeroSection = () => {
  return (
    <FadeInSection>
      <FlexColumn>
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold">Aman Sharma</h1>
          <div className="Sub-points flex  items-center text-light-dim  dark:text-dark-dim text-sm">
            <h1>Code</h1>
            <Dot size={20} />
            <h1>Football</h1>
            <Dot size={20} />
            <h1>Music</h1>
            <Dot size={20} />
            <h1>Comedy</h1>
          </div>
        </div>
        <div className="pic-stats flex gap-10 items-center">
          <Image
            className="rounded-full"
            src={`/my-logo.png`}
            alt={"Logo"}
            width="75"
            height="75"
          />
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex cursor-pointer gap-5 transition delay-150 duration-200  text-light-dim hover:text-black dark:hover:text-white dark:text-dark-dim items-center">
              <GitMerge size={15} />
              <h1>40 Repository Stars</h1>
            </div>
            <div className="flex cursor-pointer gap-5 transition delay-150 duration-200  text-light-dim hover:text-black dark:hover:text-white dark:text-dark-dim items-center">
              <TrendingUp size={15} />
              <h1>6989 Blog Views</h1>
            </div>
          </div>
        </div>
        <h1 className="one-liner-intro dark:text-white text-black text-base">
          Everything about me, engineering and life as I see it.
        </h1>
        <div className="connect-with-me gap-2 flex w-fit items-center cursor-pointer hover:underline text-blue-500 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-400 text-base -mt-4">
          <MoveUpRight size={15} />
          <h1>More ways to connect</h1>
        </div>
      </FlexColumn>
    </FadeInSection>
  );
};

const blogs: Blog[] = [
  {
    id: "alice-in-the-tinder-land",
    title: "Alice in the tinder land",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_aliceinwonderland_19875_ad409a49.jpeg?region=0%2C0%2C540%2C810",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Saepe sit nisi eligendi! Possimus nostrum et reiciendis inventore. Voluptatibus illum 
     maxime molestiae soluta exercitationem? Nostrum quia, similique 
     officiis incidunt expedita corrupti.`,
    tags: ["Fiction", "Hot chick", "Darma", "Girls"],
    readTime: "8 mins",
    dateTime: "sat oct 12, 2024",
  },
  {
    id: "react-vs-next",
    title: "React VS Next",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfWWBJ_Aqr1Phj1-0hqgYWv_weTm0AzidO0g&s",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Saepe sit nisi eligendi! Possimus nostrum et reiciendis inventore. Voluptatibus illum 
     maxime molestiae soluta exercitationem? Nostrum quia, similique 
     officiis incidunt expedita corrupti.`,
    tags: ["Fiction", "Hot chick", "Darma", "Girls"],
    readTime: "8 mins",
    dateTime: "sat oct 12, 2024",
  },
  {
    id: "brain-rotting",
    title: "Brain rotting",
    image:
      "https://cdn-images.dzcdn.net/images/cover/895f411787744baf42ed6e0d52bf7200/0x1900-000000-80-0-0.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Saepe sit nisi eligendi! Possimus nostrum et reiciendis inventore. Voluptatibus illum 
     maxime molestiae soluta exercitationem? Nostrum quia, similique 
     officiis incidunt expedita corrupti.`,
    tags: ["Fiction", "Hot chick", "Darma", "Girls"],
    readTime: "8 mins",
    dateTime: "sat oct 12, 2024",
  },
];

interface Blog {
  id: string;
  title: string;
  image: string;
  description: string;
  tags: string[];
  readTime: string;
  dateTime: string;
}

const BlogsSection = () => {
  return (
    <FadeInSection>
      <FlexColumn className="mt-5">
        <h1 className="blogs-heading text-lg text-light-dim dark:text-dark-dim">
          Latest Wanders
        </h1>
        <FlexColumn>
          {blogs.map((inputBlog) => {
            return <BlogHoverCard key={inputBlog.id} blog={inputBlog} />;
          })}
          <div className="see-all transition delay-100 duration-100 gap-2 flex w-fit items-center cursor-pointer hover:underline text-light-dim hover:text-black dark:text-dark-dim dark:hover:text-white text-base">
            <MoveUpRight size={15} />
            <h1>See All</h1>
          </div>
        </FlexColumn>
      </FlexColumn>
    </FadeInSection>
  );
};

const TODOSection = () => {
  return (
    <ul className="list-decimal mt-16">
      <h1>Build Blog Section</h1>
      <h1>See how to render markdown file in react</h1>
      <h1>Make api endpoint to fetch blog content</h1>
      <h1>Might need to use DB as well to store blog info</h1>
    </ul>
  );
};

export { HeroSection, BlogsSection, TODOSection };
