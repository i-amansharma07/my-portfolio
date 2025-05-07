"use client";

import PageLayout, {
  FadeInSection,
  FlexColumn,
  FlexRow,
} from "@/components/PageLayout";
import Image from "next/image";
import { useEffect } from "react";
import { MoveUpRight } from "lucide-react";
import { ConnectType, connects } from "../me/page";

export default function Links() {
  useEffect(() => {
    document.title = "Links | Aman";
  }, []);

  return (
    <PageLayout>
      <FadeInSection>
        <FlexColumn className="items-center gap-y-0">
          <Image
            className="rounded-full"
            src={`/my-logo.png`}
            alt={"Logo"}
            width="90"
            height="90"
          />
          <h1 className="text-3xl font-bold mt-5 md:mt-10">Aman Sharma</h1>
          <h2 className="text-center text-light-dim max-w-sm  dark:text-dark-dim text-sm mt-2 md:4">
            Loves building cool things with code. Love to connect with you
            sometime
          </h2>
          <FlexColumn className="gap-y-4 w-full px-6 md:px-48">
            <ul className="grid flex-grow grid-cols-1 gap-4 mt-16 md:mt-24">
              {connects.map((Item) => (
                <ConnectComp key={Item.place} Item={Item} />
              ))}
            </ul>
          </FlexColumn>
        </FlexColumn>
      </FadeInSection>
    </PageLayout>
  );
}

const ConnectComp = ({ Item }: { Item: ConnectType }) => {
  return (
    <li className="col-span-1 transition-opacity">
      <a
        className="underline-offset-4  inline-grid w-full rounded-lg border p-4 border-neutral-200  text-sm font-medium text-neutral-900 dark:border-neutral-800 dark:text-neutral-100 dark:bg-neutral-800 hover:shadow-sm  transition-transform duration-300 transform hover:scale-105"
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
