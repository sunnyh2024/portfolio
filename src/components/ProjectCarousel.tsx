import { useState } from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectCarousel({ projects }: { projects: string[] }) {
  const [projectIndex, setProjectIndex] = useState(0);

  return (
    <div className="flex flex-col w-[70%] mx-auto relative top-[30%]">
      <div className="text-5xl text-left ml-14">Projects</div>
      <div className="flex flex-row mt-4">
        <button className="justify-start">{"<"}</button>
        <div className="flex flex-grow-1 justify-center">
          <ProjectCard />
        </div>
        <button className="justify-end">{">"}</button>
      </div>
    </div>
  );
}
