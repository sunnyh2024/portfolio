import { useState } from "react";
import useInterval from "../../hooks/useInterval";
import { motion } from "framer-motion";

export default function Typewriter({ content, speed, showCursor } : { content: string, speed: number, showCursor: boolean }) {
  const [display, setDisplay] = useState("");
  const [index, setIndex] = useState(-1);
  const [typeCursor, setTypeCursor] = useState("|");

  useInterval(() => {
    if (display !== content) {
      setIndex((current) => current + 1);
      setDisplay((current) => current + content[index + 1]);
    }
  }, speed);

  useInterval(() => {
    if (display === content) {
      if (typeCursor === "|") {
        setTypeCursor("");
      } else {
        setTypeCursor("|");
      }
    }
  }, 500);

  return (
    <div className="flex flex-row pt-2">
      {display}
      <motion.div className="-ml-2 -mt-1">
        {showCursor ? typeCursor : ""}
      </motion.div>
    </div>
  )
}