import { motion } from "framer-motion";
import { useState } from "react";

export default function FramerMotionTest() {

  const [bgPos, setBgPos] = useState(0);

  const menuBackground = () => {
    const style: string = `bg-gradient-radial bg-extend-5 absolute z-0 min-h-screen w-screen left-0 top-0`;
    return <motion.div className={style} animate={{ y: bgPos }}></motion.div>;
  };

  return (
    <div>
      <div className="text-5xl mt-20 z-1 left-20 hover:text-6xl" >
        test
      </div>
      {menuBackground()}
    </div>
  );
}
