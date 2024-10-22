import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
const Hero = () => {
  return (
    <section className="pb-20 pt-36 w-full flex flex-col justify-center items-center gap-5">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen fill-white" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw] fill-purple-400" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw] fill-blue-100" />
      </div>

      {/* GRID CONTAINER with box */}
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* CONTENT */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest font-normal text-xs text-center max-w-80">
            {" "}
            dynamic web magic with nextjs{" "}
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl capitalize"
            words="Transforming concepts into seamless user experiences"
          />

          <p className=" text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            {" "}
            Hi, I&apos;m KP, frontend developer based in Bay Area{" "}
          </p>
          <a href="/">
            {" "}
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
