import { motion } from "framer-motion";
import { useState } from "react";

export default function FramerMotionTest() {

  const [bgPos, setBgPos] = useState(0);

  const menuBackground = () => {
    const style: string = `bg-gradient-radial bg-extend-5 absolute z-1 min-h-screen w-screen left-0 top-0`;
    return <motion.div className={style} animate={{ y: bgPos }}></motion.div>;
  };

  return (
    <div>
      {menuBackground()}
      <motion.div className="text-5xl mt-20 ml-20 absolute z-2" whileHover={{scale: 1.1}} onMouseOver={() => setBgPos(150)}>
        test
      </motion.div>
    </div>
  );
}
