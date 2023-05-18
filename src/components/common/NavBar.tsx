import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { AnimatePresence, motion } from "framer-motion";
import { useAppContext } from "../../hooks/useAppContext";

export default function NavBar({ setShowMenu }: { setShowMenu: Function }) {
  const navigate = useNavigate();
  const changeRoute = (route: string) => {
    navigate(route);
  };
  const { appConfig, setAppConfig } = useAppContext();

  return (
    <div className="w-[100%] fixed z-7">
      <div className="flex flex-row w-[90%] text-3xl mt-12 h-20 mx-auto transition-all duration-400">
        <div className="flex flex-row gap-2 justify-start ml-12 my-5">
          <button
            className="scale-[2.4] hover:scale-[2.7]"
            onClick={() => changeRoute("/")}
          >
            <WbSunnyIcon />
          </button>
          {/* <button
            className="text-5xl hover:scale-110"
            onClick={() => changeRoute("/")}
          >
            Sunny
          </button> */}
        </div>
        <div className="flex flex-row flex-grow gap-6 justify-end mr-12">
          <button
            className="rounded-full hover:scale-[1.1] p-3"
            onClick={() => changeRoute("/about")}
          >
            Resume
          </button>
          <button
            className="scale-[2] hover:scale-[2.2] -mt-2"
            onClick={() => {
              setShowMenu(true);
              setAppConfig({ ...appConfig, menuOpened: true });
            }}
          >
            <MenuIcon style={{}} />
          </button>
        </div>
      </div>
    </div>
  );
}
