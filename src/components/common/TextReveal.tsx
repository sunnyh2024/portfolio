import { motion } from "framer-motion";

export default function TextReveal({
  text,
  style="",
}: {
  text: string;
  style?: string;
}) {
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.08,
      },
    },
  };
  const letter = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <motion.div
      variants={sentence}
      initial="hidden"
      animate="visible"
      className={style}
    >
      {text.split("").map((char, i) => {
        return (
          <motion.span key={`${char}-${i}`} variants={letter}>
            {char}
          </motion.span>
        );
      })}
    </motion.div>
  );
}
