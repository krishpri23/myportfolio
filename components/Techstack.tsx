import React from "react";
import { AnimatedTooltip } from "./ui/ToolTip";

const people = [
  {
    id: 1,
    name: "ReactJS",
    image: "react.svg",
  },
  {
    id: 2,
    name: "NextJS",
    image: "next.svg",
  },
  {
    id: 3,
    name: "Typescript",
    image: "ts.svg",
  },
  {
    id: 4,
    name: "Redux Toolkit",
    image: "redux.svg",
  },
  {
    id: 5,
    name: "TailwindCSS",
    image: "tail.svg",
  },
  {
    id: 6,
    name: "NodeJS",
    image: "nodejs.svg",
  },
  {
    id: 7,
    name: "MongoDB",
    image: "mongodb.svg",
  }, {
    id: 8,
    name: "Clerk Auth",
    image: "c.svg",
  },
];
const Techstack = () => {
  return (
    <div className="flex flex-col mt-20">
      <h1 className="heading">
        My <span className="text-purple">Techstack</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center my-10 w-full lg:gap-10 h-[6rem]">
        <AnimatedTooltip items={people} />
      </div>
    </div>
  );
};
export default Techstack;
