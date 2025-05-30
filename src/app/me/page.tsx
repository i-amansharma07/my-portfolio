"use client";

import PageLayout, { FlexRowToColumn } from "@/components/PageLayout";
import { FadeInSection, FlexColumn } from "@/components/PageLayout";
import {
  Dot,
  FileUser,
  FileText,
  Mail,
  Github,
  Instagram,
  Twitter,
  MoveUpRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import { textLightDark } from "../../../utils/styles";
import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent } from "react";

const imageUrl = `https://images.unsplash.com/photo-1694805025253-0167c10019c0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;

const whoMeTranslation = [
  "Qui, moi ?",
  "कौन, मैं?",
  "谁，我？",
  "누구, 나?",
  "誰、私？",
  "Кто, я?",
  "কে, আমি?",
  "Who Me?",
];

export default function Me() {
  const [whoMe, setWhoMe] = useState("Who Me?");

  useEffect(() => {
    document.title = "Me | Aman";
  }, []);

  useEffect(() => {
    let current = 0;
    setInterval(() => {
      if (current === whoMeTranslation.length) current = 0;
      setWhoMe(whoMeTranslation[current]);
      current++;
    }, 4000);
  }, []);

  return (
    <PageLayout>
      <FadeInSection>
        <FlexColumn className="gap-y-20">
          <FlexColumn className="heading gap-y-1">
            <h1
              key={whoMe}
              className="text-3xl text-black dark:text-white font-bold animate-slide-in-left"
            >
              {whoMe}
            </h1>
            <h1 className="text-sm text-light-dim dark:text-dark-dim">
              Okay so...
            </h1>
          </FlexColumn>
          <img
            className="cover-image hidden md:flex rounded-md  max-h-[300px] w-full min-h-[300px] -mt-10"
            src={imageUrl}
            alt={"cover-image"}
          />
          {MeSections.map((Item) => {
            return (
              <div key={Item.label} className="w-full text-left">
                <Item.component />
              </div>
            );
          })}
        </FlexColumn>
      </FadeInSection>
    </PageLayout>
  );
}

const AboutSection = () => {
  return (
    <FlexRowToColumn className="-mt-10 ">
      <div className={`min-w-24 ${textLightDark}`}>About</div>
      <FlexColumn className="gap-y-4 w-full">
        <h1>Hey I am Aman Sharma</h1>
        <div className="Sub-points flex gap-x-1 items-center text-light-dim  dark:text-dark-dim text-sm">
          <h1>{`IPA /əˈmɑːn ˈʃɑːrmə/`}</h1>
          <Dot size={20} />
          <h1>अमन शर्मा</h1>
          <Dot size={20} />
          <h1>아만 샤르마</h1>
          <Dot size={20} />
          <h1>امن شرما</h1>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          dignissimos totam nesciunt, tempora impedit nemo, quisquam, mollitia
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          dignissimos totam nesciunt, tempora impedit nemo, quisquam, mollitia
        </h1>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          dignissimos totam nesciunt, tempora impedit nemo, quisquam, mollitia
        </h1>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          dignissimos totam nesciunt.
        </h1>
      </FlexColumn>
    </FlexRowToColumn>
  );
};

const WorkSection = () => {
  return (
    <FlexRowToColumn>
      <div className={`min-w-24 ${textLightDark}`}>Work</div>
      <FlexColumn className="gap-y-4 w-full">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          dignissimos totam nesciunt, tempora impedit nemo, quisquam, mollitia
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          dignissimos totam nesciunt, tempora impedit nemo, quisquam, mollitia
        </h1>
        <FlexColumn className="gap-4 mt-3 md:mt-5 flex-col-reverse">
          {works.map((item) => (
            <WorkCard key={item.name} work={item} />
          ))}
        </FlexColumn>
      </FlexColumn>
    </FlexRowToColumn>
  );
};

interface WorkCardType {
  logo: string;
  role: string;
  name: string;
  duration: string;
  bgColor: string;
  textColor: string;
}

const works: WorkCardType[] = [
  {
    logo: "https://internshala-uploads.internshala.com/logo/62e0e4c38530b1658905795.png.webp",
    role: "Intern -  Android dev",
    name: "BrickedIn",
    duration: "3 Months",
    bgColor: "bg-gray-100",
    textColor: "text-orange-500",
  },
  {
    logo: "https://www.hackingly.in/_next/static/media/companyLogo.45fa23ea.png",
    role: "Freelance - Full Stack",
    name: "Hackingly",
    duration: "6 Months",
    bgColor: "bg-orange-400",
    textColor: "text-white",
  },
  {
    logo: "https://i0.wp.com/greyspacedigital.com/wp-content/uploads/2025/01/GS_Logo_White.png?fit=384%2C49&ssl=1",
    role: "SDE",
    name: "Greyspace",
    duration: "Present(1.5yrs)",
    bgColor: "bg-black",
    textColor: "text-white",
  },
];

const WorkCard = ({ work }: { work: WorkCardType }) => {
  return (
    <div className="flex justify-between items-center py-3 px-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:shadow-xl rounded-md transition-transform duration-300 transform hover:scale-105">
      <div className="flex gap-4">
        <div
          className={`flex items-center justify-center rounded-full w-14 h-14 p-2  ${work.bgColor} `}
        >
          <h1 className={`${work.textColor} text-[9px] font-semibold`}>
            {work.name}
          </h1>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className={`font-semibold text-black dark:text-white`}>
            {work.name}
          </h1>
          <h1 className={`${textLightDark} text-sm`}>{work.role}</h1>
        </div>
      </div>
      <h1 className={`${textLightDark} text-sm`}>{work.duration}</h1>
    </div>
  );
};

const ResumeSection = () => {
  return (
    <FlexRowToColumn>
      <div className={`min-w-24 ${textLightDark}`}>Resume</div>
      <FlexColumn className="gap-y-4 w-full">
        <h1>
          Want to know more about my professional experience? Check out my
          resume below.
        </h1>
        <a
          href="https://drive.google.com/file/d/1QXDEyV5TFz2KkXT875HleAXOOVpiYX7J/view?usp=sharing"
          target="_blank"
          className="underline-offset-4 inline-flex w-fit items-center gap-2 rounded-lg border  border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-200 dark:border-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-800"
        >
          <FileText size={16} />
          <h1 className={`text-black dark:text-white text-xs`}>View Resume</h1>
        </a>
      </FlexColumn>
    </FlexRowToColumn>
  );
};

export const ConnectSection = () => {
  return (
    <FlexRowToColumn>
      <div className={`min-w-24 ${textLightDark}`}>Connect</div>
      <FlexColumn className="gap-y-4 w-full">
        <h1>Have a question or just want to chat? Feel free to text me.</h1>
        <ul className="grid flex-grow grid-cols-1 gap-4 md:grid-cols-2">
          {connects.map((Item) => (
            <ConnectComp key={Item.place} Item={Item} />
          ))}
        </ul>
      </FlexColumn>
    </FlexRowToColumn>
  );
};

export interface ConnectType {
  logo: ForwardRefExoticComponent<Omit<LucideProps, "ref">>;
  place: string;
  link: string;
}

export const connects: ConnectType[] = [
  {
    logo: Mail,
    place: "Mail",
    link: "mailto:amanofficialsharma@gmail.com",
  },
  {
    logo: Github,
    place: "Github",
    link: "mailto:amanofficialsharma@gmail.com",
  },
  {
    logo: Instagram,
    place: "Instagram",
    link: "mailto:amanofficialsharma@gmail.com",
  },
  {
    logo: Twitter,
    place: "Twitter",
    link: "mailto:amanofficialsharma@gmail.com",
  },
];

const ConnectComp = ({ Item }: { Item: ConnectType }) => {
  return (
    <li className="col-span-1 transition-opacity">
      <a
        className="underline-offset-4  inline-grid w-full rounded-lg border p-4 border-neutral-200  text-sm font-medium text-neutral-900  hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-800 hover:shadow-xl  transition-transform duration-300 transform hover:scale-105"
        target="_blank"
        href={Item.link}
      >
        <div className="flex items-center gap-3">
          <Item.logo size={24} />
          {Item.place}
          <MoveUpRight size={16} className="ml-auto" />
        </div>
      </a>
    </li>
  );
};

const MeSections = [
  {
    label: "About",
    component: AboutSection,
  },
  {
    label: "Work",
    component: WorkSection,
  },
  {
    label: "Resume",
    component: ResumeSection,
  },
  {
    label: "Connect",
    component: ConnectSection,
  },
];
