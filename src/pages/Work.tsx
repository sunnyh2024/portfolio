import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { AnimatePresence, motion } from "framer-motion";
import { useAppContext } from "../hooks/useAppContext";
import WorkCard from "../components/WorkCard";

export default function WorkPage() {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [projectIndex, setProjectIndex] = useState(-1);
  const {appConfig} = useAppContext();

  const createMenuItem = (label: string, index: number) => {
    return (
      <div
        onMouseOver={() => setHoverIndex(index)}
        onClick={() => setProjectIndex(index)}
        className={`origin-top-left text-left ${
          (hoverIndex === -1 && projectIndex === -1) ||
          (hoverIndex === index || projectIndex === index)
            ? "text-white"
            : "text-gray-500"
        } ${projectIndex === index ? "scale-110" : "scale-100"} transition-all`}
        key={index}
      >
        <button
          onClick={() => {
            setProjectIndex(hoverIndex);
          }}
        >
          {label}
        </button>
      </div>
    );
  };

  const labels = [
    "Northeastern U.",
    "AMD",
    "Amazon Robotics",
    "Capital One",
  ];

  const cards = [
    <WorkCard />,
    <WorkCard />,
    <WorkCard />,
    <WorkCard />,
  ];

  return (
    <AnimatePresence>
      { !appConfig.menuOpened ? <div className="h-screen bg-black">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="h-screen bg-black text-left px-32 py-48"
        >
          <div className="text-7xl text-left">Work Experience</div>
          <div className="flex flex-row mt-20 gap-4 h-[65%]">
            <div>
              <motion.div
                key="work-labels"
                initial={{ x: -500 }}
                animate={{ x: 0 }}
                exit={{ x: -500 }}
                transition={{ duration: 1 }}
                onMouseLeave={() => setHoverIndex(-1)}
                className="basis-1/3 text-4xl text-bold space-y-4 pt-4 pr-12"
              >
                {labels.map((label, i) => createMenuItem(label, i))}
              </motion.div>
            </div>
            <div className="basis-2/3 border-l-2 border-l-white">
              <motion.div initial>{cards[projectIndex]}</motion.div>
            </div>
          </div>
        </motion.div>
      </div>
       : <div/>
      }
      
    </AnimatePresence>
  );
}
