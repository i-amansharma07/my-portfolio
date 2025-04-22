"use client";

import PageLayout, { FlexRowToColumn } from "@/components/PageLayout";
import { FadeInSection, FlexColumn } from "@/components/PageLayout";
import { Dot } from "lucide-react";
import { useEffect, useState } from "react";
import { textLightDark } from "../../../utils/styles";

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
    let current = 0;
    setInterval(() => {
      if (current === 8) current = 0;
      setWhoMe(whoMeTranslation[current]);
      current++;
    }, 4000);
  }, []);

  return (
    <PageLayout>
      <FadeInSection>
        <FlexColumn className="gap-y-20">
          <div className="heading flex flex-col gap-1">
            <h1
              key={whoMe}
              className="text-3xl text-black dark:text-white font-bold animate-slide-in-left"
            >
              {whoMe}
            </h1>
            <h1 className="text-sm text-light-dim dark:text-dark-dim">
              Okay so...
            </h1>
          </div>
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
    component: WorkSection,
  },
];
