import { motion } from "motion/react";

export default function Icon({ link, name }: { link: string; name: string }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
    >
      <img src={`/${name}.svg`} alt={`${name} icon`} />
    </motion.a>
  );
}
