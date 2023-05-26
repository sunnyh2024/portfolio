import { useState } from "react";

export default function SideMenu({
  projectIndex,
  setProjectIndex,
  labels,
}: {
  projectIndex: number;
  setProjectIndex: Function;
  labels: string[];
}) {
  const [hoverIndex, setHoverIndex] = useState(-1);

  const createMenuItem = (label: string, index: number) => {
    return (
      <div
        onMouseOver={() => setHoverIndex(index)}
        onClick={() => setProjectIndex(index)}
        className={`origin-top-left ${
          (hoverIndex === -1 && projectIndex === -1) || 
          hoverIndex === index ||
          projectIndex === index
            ? "text-inherit"
            : "text-gray-500"
        } ${projectIndex === index ? "scale-110" : "scale-100"} transition-all`}
        key={index}
      >
        <button
          onClick={() => {
            setProjectIndex(hoverIndex);
          }}
          className="text-left"
        >
          {label}
        </button>
      </div>
    );
  };

  return (
      <div>
        <div
          key="work-labels"
          onMouseLeave={() => setHoverIndex(-1)}
          className="text-4xl text-bold space-y-4 pr-12 pt-4 border-r-2 border-white"
        >
          {labels.map((label, i) => createMenuItem(label, i))}
        </div>
      </div>
  );
}
