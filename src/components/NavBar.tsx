import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const changeRoute = (route: string) => {
    navigate(route);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.5,
        delay: 1.5,
        ease: [0.5, 1, 0.2, 1.01],
      }}
      className="w-[100%] text-2xl absolute z-7 mt-12"
    >
      <div className="flex flex-row w-[80%] h-20 mx-auto rounded-full bg-gray-700">
        <button className="justify-start ml-12 my-6 hover:scale-110" onClick={() => changeRoute("/")}>Sunny</button>
        <div className="flex flex-row flex-grow gap-2 justify-end mr-12">
          <button className="rounded-full hover:scale-[1.1] transition-all duration-400 p-3" onClick={() => changeRoute("/about")}>
            About
          </button>
          <button className="rounded-full hover:scale-[1.1] transition-all duration-400 p-3" onClick={() => changeRoute("/work")}>
            Work
          </button>
          <button className="rounded-full hover:scale-[1.1] transition-all duration-400 p-3" onClick={() => changeRoute("/projects")}>
            Projects
          </button>
          <button className="rounded-full hover:scale-[1.1] transition-all duration-400 p-3" onClick={() => changeRoute("/contact")}>
            Contact
          </button>
        </div>
      </div>
    </motion.div>
  );
}
