import { useState } from "react";
import "./accordion.css";
import { motion, AnimatePresence } from "motion/react";

export default function Accordion({
  items,
  background,
  height,
}: {
  items: { title: string; duration: string; content: React.ReactNode }[];
  background: "forest" | "grape" | "ginger" | "ocean" | "sky";
  height: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleIndex = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => toggleIndex(index)}
          className={`accordion-item shadow-${background} light-border`}
        >
          <div className="accordion-header">
            <h3>{item.title}</h3>
            <h4>{item.duration}</h4>
          </div>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                className="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: height },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                {item.content}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
