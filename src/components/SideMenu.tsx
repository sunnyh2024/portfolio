import { useEffect, useState } from "react";

export default function SideMenu() {
  const [hoverIndex, setHoverIndex] = useState<number>(-1);
  const labels = [
    "ASL  Recognition",
    "Mispel",
    "Image Editor",
    "Script to Text",
  ];

  useEffect(() => console.log(hoverIndex), [hoverIndex])

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

  const menuBackground = () => {
    const style: string = `bg-gradient-radial bg-extend-5 ${hoverIndex > -1 ? `bg-position-${hoverIndex} bg-extend-45` : "bg-position-def bg-extend-5"} absolute z-1 h-screen w-screen left-0 top-0 transition-all duration-500`;
    return (
      <div className={style}></div>
    );
  }

  return (
    <div className="flex flex-col h-[100%] w-[100%] mt-[-8rem]">
      {menuBackground()}
      <div
        onMouseLeave={() => setHoverIndex(-1)}
        className="text-6xl text-bold text-left absolute top-[25%] z-2 ml-20 my-auto space-y-4"
      >
        {labels.map((label, i) => createMenuItem(label, i))}
      </div>
    </div>
  );
}
