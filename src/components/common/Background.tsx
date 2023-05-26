import { ReactNode } from "react";
import useMousePosition from "../hooks/useMousePosition";
import { motion } from "framer-motion";

export default function Background({ showMenu, children }: { showMenu: boolean, children: ReactNode }) {
  const { x, y } = useMousePosition();

  const variants = {
    default: {
      x: x - 220,
      y: y - 220,
    },
  };

  return (
    <div>
      <div className="h-screen bg-black">{children}</div>
      {!showMenu && <motion.div
        className="absolute origin-center top-10 left-10 w-96 h-96 rounded-full bg-cursor-gradient from-purple-600 to-transparent opacity-25 pointer-events-none z-[100]"
        variants={variants}
        animate="default"
        transition={{
          x: {
            duration: 0.05,
            ease: "linear",
          },
          y: {
            duration: 0.05,
            ease: "linear",
          }
        }}
      />}
    </div>
  );
}
