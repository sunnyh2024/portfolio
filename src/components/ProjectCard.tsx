
export default function ProjectCard({ title } : { title : string }) {
    
  return (
    <div className="flex flex-col text-left p-4">
      <div className="text-3xl">{title}</div>
      <div className="text-2xl mt-4">This is the project description. In the future this will be in a separate json file but for now this needs to take up enough space to replicate a real description so I will continue typing here until a couple lines are filled</div>
      <div className="mt-4 text-xl hover:text-2xl hover:text-blue-500 transition-all">Links here</div>
    </div>
  );
}