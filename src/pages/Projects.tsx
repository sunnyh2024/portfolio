import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

export default function ProjectPage() {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [projectIndex, setProjectIndex] = useState(-1);

  const createMenuItem = (label: string, index: number) => {
    return (
      <motion.div
        onMouseOver={() => setHoverIndex(index)}
        className={`${
          hoverIndex > -1 && hoverIndex !== index
            ? "text-gray-500"
            : "text-white"
        } transition-all`}
        key={index}
      >
        <button
          onClick={() => {
            setProjectIndex(hoverIndex);
          }}
        >
          {label}
        </button>
      </motion.div>
    );
  };

  const labels = [
    "ASL Recognition",
    "mispel",
    "Image Editor",
    "Script to Text",
  ];

  const cards = [
    <ProjectCard/>,
    <ProjectCard/>,
    <ProjectCard/>,
    <ProjectCard/>
  ];

  return (
    <div className="h-screen bg-gray-800 text-left px-20 py-48">
      <div className="text-7xl text-left">Projects</div>
      <div className="flex flex-row mt-20 gap-4 h-[65%]">
        <div>
          <div
            onMouseLeave={() => setHoverIndex(-1)}
            className="basis-1/3 text-5xl text-bold z-5 space-y-4 pr-8"
          >
            {labels.map((label, i) => createMenuItem(label, i))}
          </div>
        </div>
        <div className="basis-2/3 border-l-2 border-l-white">
          {cards[projectIndex]}
        </div>
      </div>
    </div>
  );
}
