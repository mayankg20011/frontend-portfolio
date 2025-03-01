"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import dynamic from "next/dynamic";

const Grid = dynamic(() => import("@/components/Grid"), {
  ssr: false,
});
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { Blogs } from "@/components/Blogs";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        {/* <Clients /> */}
        <Experience />
        <Blogs />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
