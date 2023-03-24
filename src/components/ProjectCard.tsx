import { MenuButton } from "./MenuButton";

export default function ProjectCard() {
  return (
    <div className="flex flex-col text-left items-start w-full mx-12 z-4">
      <div className="text-2xl mt-4">
        This is the project description. In the future this will be in a
        separate json file but for now this needs to take up enough space to
        replicate a real description so I will continue typing here until a
        couple lines are filled
      </div>
      <button className="mt-4 text-xl hover:text-2xl hover:text-blue-500 transition-all">
        Links here
      </button>
    </div>
  );
}
