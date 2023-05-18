import { useState } from "react";
import { motion } from "framer-motion";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../hooks/useAppContext";

export default function Menu({ setShowMenu }: { setShowMenu: Function }) {
  const navigate = useNavigate();
  const changeRoute = (route: string) => {
    navigate(route);
  };
  const { appConfig, setAppConfig } = useAppContext();

  const [hoverIndex, setHoverIndex] = useState<number>(-1);
  const labels = ["Home", "About", "Work Experience", "Projects", "Contact"];
  const paths = ["/", "/about", "/work", "/projects", "/contact"];

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
            setAppConfig({ ...appConfig, menuOpened: false });
          }}
        >
          {label}
        </button>
      </motion.div>
    );
  };

  return (
    <div className="flex flex-col h-screen w-screen absolute top-0 left-0 bg-black z-50">
      <MenuBackground position={hoverIndex} />
      <button
        className="text-5xl text-bold absolute right-[5%] top-[5%] hover:scale-110"
        onClick={() => {
          setShowMenu(false);
          setAppConfig({ ...appConfig, menuOpened: false });
        }}
      >
        {/* <ArrowBackIosIcon className="-mt-2 scale-[1.5]" /> */}
        Back
      </button>
      <div
        onMouseLeave={() => setHoverIndex(-1)}
        className="text-6xl text-bold text-left absolute top-[25%] z-10 ml-20 my-auto space-y-4"
      >
        {labels.map((label, i) => createMenuItem(label, i))}
      </div>
    </div>
  );
}

// no idea why it has to be like this, but its rly buggy with string formatting sooo
function MenuBackground({ position }: { position: number }) {
  if (position === -1) {
    return (
      <div className="bg-gradient-radial bg-position-def bg-extend-45 absolute z h-screen w-screen left-0 top-0 transition-all duration-500" />
    );
  }
  if (position === 0) {
    return (
      <div className="bg-gradient-radial bg-position-0 bg-extend-5 absolute h-screen w-screen left-0 top-0 transition-all duration-500" />
    );
  }
  if (position === 1) {
    return (
      <div className="bg-gradient-radial bg-position-1 bg-extend-5 absolute h-screen w-screen left-0 top-0 transition-all duration-500" />
    );
  }
  if (position === 2) {
    return (
      <div className="bg-gradient-radial bg-position-2 bg-extend-5 absolute h-screen w-screen left-0 top-0 transition-all duration-500" />
    );
  }
  if (position === 3) {
    return (
      <div className="bg-gradient-radial bg-position-3 bg-extend-5 absolute h-screen w-screen left-0 top-0 transition-all duration-500" />
    );
  } else {
    return (
      <div className="bg-gradient-radial bg-position-4 bg-extend-5 absolute h-screen w-screen left-0 top-0 transition-all duration-500" />
    );
  }
}
