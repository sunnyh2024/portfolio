import { AnimatePresence, motion } from "framer-motion";

export default function WorkCard({key}: {key: string}) {
  return (
    <motion.div
      className="flex flex-col text-left items-start w-full ml-12"
      key={key}
      initial={{ x: -500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -500, opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="text-2xl mt-4">
        This is the project description. In the future this will be in a
        separate json file but for now this needs to take up enough space to
        replicate a real description so I will continue typing here until a
        couple lines are filled
      </div>
    </motion.div>
  );
}
