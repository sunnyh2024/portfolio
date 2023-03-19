import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useState } from "react";
import SideMenu from "./Menu";

export default function NavBar() {
  const navigate = useNavigate();
  const changeRoute = (route: string) => {
    navigate(route);
  };

  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div>
      {menuOpened ? (
        <motion.div
          initial={{ x: -1500, opacity: 0, scale: 1 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
          }}
        >
          <SideMenu setShowMenu={setMenuOpened} />
        </motion.div>
      ) : (
        <div />
      )}
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
        className="w-[100%] text-2xl absolute z-7"
      >
        <div className="flex flex-row w-full h-20 mx-auto bg-gray-800 transition-all duration-400 shadow-lg">
          <div className="flex flex-row gap-2 justify-start ml-12 my-5">
            <button
              className="scale-[1.6] hover:scale-[1.8] pr-4 -mt-2"
              onClick={() => setMenuOpened(true)}
            >
              <MenuIcon />
            </button>
            <button
              className="text-4xl hover:scale-110"
              onClick={() => changeRoute("/")}
            >
              Sunny
            </button>
          </div>
          <div className="flex flex-row flex-grow justify-end mr-12">
            <button
              className="rounded-full hover:scale-[1.1] p-3"
              onClick={() => changeRoute("/about")}
            >
              About
            </button>
            <button
              className="rounded-full hover:scale-[1.1] p-3"
              onClick={() => changeRoute("/work")}
            >
              Work
            </button>
            <button
              className="rounded-full hover:scale-[1.1] p-3"
              onClick={() => changeRoute("/projects")}
            >
              Projects
            </button>
            <button
              className="rounded-full hover:scale-[1.1] p-3"
              onClick={() => changeRoute("/contact")}
            >
              Contact
            </button>
            {/* <div className="scale-[2] mt-7">
              <WbSunnyIcon />
            </div> */}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
