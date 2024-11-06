import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Techstack from "@/components/Techstack";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5 text-slate-200">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={navItems}
          />
        <Hero />
        <Grid />
        <Techstack/>
        <RecentProjects/>
        <Experience/>
        <Footer/>
      </div>
    </main>
  );
}
