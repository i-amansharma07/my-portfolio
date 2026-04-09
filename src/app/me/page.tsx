"use client";

import PageLayout, { FlexRowToColumn } from "@/components/PageLayout";
import { FadeInSection, FlexColumn } from "@/components/PageLayout";
import { Dot, FileText, MoveUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { textLightDark } from "../../../utils/styles";
import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent } from "react";
import { connects } from "../../../utils/constants";

const whoMeTranslation = [
  "कौन, मैं?",
  "Qui, moi ?",
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
            className="cover-image rounded-md  max-h-[300px] w-full min-h-[300px] -mt-10 object-cover object-bottom"
            src="/media/dalai-hills.webp"
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
          I love building cool stuff—basically anything that sparks my curiosity
          or teaches me something new. Coding gives me this weird thrill I can’t
          really explain, like solving a puzzle and inventing the puzzle at the
          same time.
        </h1>
        <h1>
          I started with the classics: C and C++. That’s where I learned how to
          tell computers what to do, dig into memory management, and even
          understand how CPUs tick. Then came Java, which opened the door beyond
          the boring terminal and let me actually build things that felt real.
        </h1>
        <h1>
          Soon I was developing Android apps, and by the end of my second year,
          I had one live on the Play Store. That little milestone boosted my
          confidence like crazy. From there, curiosity kept pulling me
          forward—frontend with React, backend with Node, dabbling in cloud
          deployments, and now even exploring software architecture. Somewhere
          along the way, I also found myself explaining concepts to
          batchmates—turns out teaching is its own kind of superpower.
        </h1>
        <h1>
          Outside the screen, I’m usually on the football field, at the gym
          (because balancing code with cardio keeps me sane) or riding my bike.
          I’m also a sucker for anime and digging into ideas that can make life
          a little sharper, smarter, and more interesting.
        </h1>
        <strong>
          And yeah, the learning hasn’t stopped—it probably never will.
        </strong>
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
          I kicked off my career by jumping into hackathons (earned money from
          prizes), interning at a small startup, and freelancing for M.Tech
          students from IIT Bombay.
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
    logo: "https://internshala-uploads.internshala.com/logo/62e0e4c38530b1658905795.webp.webp",
    role: "Intern -  Android dev",
    name: "BrickedIn",
    duration: "3 Months",
    bgColor: "bg-gray-100",
    textColor: "text-orange-500",
  },
  {
    logo: "https://www.hackingly.in/_next/static/media/companyLogo.45fa23ea.webp",
    role: "Freelance - Full Stack",
    name: "Hackingly",
    duration: "3 Months",
    bgColor: "bg-orange-400",
    textColor: "text-white",
  },
  {
    logo: "https://i0.wp.com/greyspacedigital.com/wp-content/uploads/2025/01/GS_Logo_White.webp?fit=384%2C49&ssl=1",
    role: "SDE",
    name: "Greyspace",
    duration: "Present(2.5+yrs)",
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
          href="https://drive.google.com/file/d/1ANhTcKimfdVlUcQ0-kcGm_Scl61By8QO/view?usp=sharing"
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

const ConnectSection = () => {
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
