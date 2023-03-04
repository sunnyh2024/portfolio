import NavBar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";
import SideMenu from "../components/SideMenu";

export default function Landing() {
  return (
    <div className="bg-gray-800 min-h-screen pt-12 text-white font-mono">
      <NavBar />
      <div className="flex flex-row">
        <SideMenu />
        {/* <ProjectCard title="Project Title" /> */}
      </div>
    </div>
  );
}
