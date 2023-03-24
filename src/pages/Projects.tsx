import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import ProjectCarousel from "../components/ProjectCarousel";

export default function ProjectPage() {
  const projects = ['1', '2', '3', '4']

  return (
    <div className="w-screen h-screen bg-black">
      <ProjectCarousel projects={projects}/>
    </div>
  );
}
