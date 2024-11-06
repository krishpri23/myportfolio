import React from "react";
import Image from "next/image";
import { Timeline } from "./ui/Timeline";

const Experience = () => {
  const data = [
    {
      title: "2022 - Present",
      content: (
        <div>
          <h1 className="text-neutral-800 dark:text-purple text-lg md:text-xl font-normal mb-8 uppercase ">
           Frontend Developer
          </h1>
          <ul className="flex flex-col gap-3">
            <li>Assisted in transforming a legacy application to high performing custom built website using the MERN stack. </li>
            <li>Using RTK query data fetching was handled efficiently and optimized the application by implementing caching and automatic re-fetching strategies, resulting in faster load times and a smoother user experience.</li>
            <li>Integrated Stripe into the application to manage secure and efficient online payments. This included implementing secure payment processing, handling webhooks for real-time updates, and providing a seamless checkout experience for users</li>
          </ul>
     
        </div>
      ),
    },
    {
      title: "2019 - 2021 ",
      content: (
        <div>
          <h1 className="text-neutral-800 dark:text-purple text-lg md:text-xl font-normal mb-8 uppercase"> Flutter Developer</h1>
          <ul className="flex flex-col gap-3">
            <li>Worked on a travel planner application designed to store and organize outfit information for users </li>
            <li>Built using Flutter with SQFlite for database management, ensuring smooth functionality for adding, storing and managing data</li>
            <li>Designed the user interface to make the planning intuitive and user-friendly, streamlining the process for users to
            organize their data.</li>
          </ul>
        </div>
      ),
    }
  ];
  return (
    <div className="pt-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

       <Timeline data={data} /> 
     
     
    </div>
  );
};

export default Experience;

