import { useState } from "react";
import { motion } from "framer-motion";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";

export default function SideMenu({ setShowMenu }: { setShowMenu: Function }) {
  const navigate = useNavigate();
  const changeRoute = (route: string) => {
    navigate(route);
  };

  const [hoverIndex, setHoverIndex] = useState<number>(-1);
  const labels = ["About", "Work Experience", "Projects", "Contact"];
  const paths = ["/about", "/work", "/projects", "/contact"];

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
            changeRoute(paths[index]);
            setShowMenu(false);
          }}
        >
          {label}
        </button>
      </motion.div>
    );
  };

  return (
    <div className="flex flex-col h-screen w-screen absolute top-0 left-0 z-10 bg-gray-800">
      <MenuBackground position={hoverIndex} />
      <button
        className="text-5xl text-bold absolute left-0 top-0 ml-20 py-8 hover:scale-110"
        onClick={() => setShowMenu(false)}
      >
        <ArrowBackIosIcon className="-mt-2 scale-[1.5]" />
        Back
      </button>
      <div
        onMouseLeave={() => setHoverIndex(-1)}
        className="text-6xl text-bold text-left absolute top-[25%] z-4 ml-20 my-auto space-y-4"
      >
        {labels.map((label, i) => createMenuItem(label, i))}
      </div>
    </div>
  );
}

function MenuBackground({ position }: { position: number }) {
  const style = `bg-gradient-radial ${
    position > -1
      ? `bg-position-${position} bg-extend-45`
      : "bg-position-def bg-extend-5"
  } absolute z-9 h-screen w-screen left-0 top-0 transition-all duration-500`;
  return <div className={style}></div>;
}
