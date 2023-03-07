import { useState } from "react";

export default function SideMenu() {
  const [hoverIndex, setHoverIndex] = useState<number>(-1);
  const labels = [
    "ASL  Recognition",
    "Mispel",
    "Image Editor",
    "Script to Text",
  ];

  const createMenuItem = (label: string, index: number) => {
    return (
      <div
        onMouseOver={() => setHoverIndex(index)}
        className={`${
          hoverIndex > -1 && hoverIndex !== index
            ? "text-gray-500"
            : "text-white"
        } transition-all`}
      >
        <button>{label}</button>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-[100%] w-[100%] mt-[-8rem]">
      <MenuBackground position={hoverIndex}/>
      <div
        onMouseLeave={() => setHoverIndex(-1)}
        className="text-6xl text-bold text-left absolute top-[25%] z-10 ml-20 my-auto space-y-4"
      >
        {labels.map((label, i) => createMenuItem(label, i))}
      </div>
    </div>
  );
}

function MenuBackground({position} : { position: number }) {
  if (position === 0) {
    return (<div className="bg-gradient-radial bg-position-0 bg-extend-45 absolute z-9 h-screen w-screen left-0 top-0 transition-all duration-500"></div>)
  }
  else if (position === 1) {
    return (<div className="bg-gradient-radial bg-position-1 bg-extend-45 absolute z-9 h-screen w-screen left-0 top-0 transition-all duration-500"></div>)
  }
  else if (position === 2) {
    return (<div className="bg-gradient-radial bg-position-2 bg-extend-45 absolute z-9 h-screen w-screen left-0 top-0 transition-all duration-500"></div>)
  }
  else if (position === 3) {
    return (<div className="bg-gradient-radial bg-position-3 bg-extend-45 absolute z-9 h-screen w-screen left-0 top-0 transition-all duration-500"></div>)
  }
  else {
    return (<div className="bg-gradient-radial bg-position-def bg-extend-5 absolute z-9 h-screen w-screen left-0 top-0 transition-all duration-500"></div>)
  }
}
