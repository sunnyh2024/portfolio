import { useEffect, useState } from "react";
import "./navbar.css";
import { useLocation } from "react-router-dom";
import { motion } from "motion/react";

export default function Navbar() {
  const [selected, setSelected] = useState(0);
  const location = useLocation();

  const tabs = ["home", "about", "work", "projects", "gallery"];
  const selectedEmojis = ["🏠", "🥭", "💻", "👾", "🌅"];
  const hrefs = ["#home", "#about", "#work", "#projects", "#gallery"];

  useEffect(() => {
    setSelected(hrefs.indexOf(location.hash));
  }, [location]);

  const onClick = (index: number) => {
    setSelected(index);
    document
      .getElementById(hrefs[index])
      ?.scrollIntoView({
        inline: "center",
        block: "nearest",
      });
  };

  return (
    <div className="navbar">
      {tabs.map((tab, index) => (
        <motion.a
          className={`${selected === index ? "selected" : "tab"}`}
          onClick={() => onClick(index)}
          href={hrefs[index]}
          whileHover={{ scale: 1.1 }}
          // whileTap={{ scale: 0.95 }}
        >
          {`${tab} ${selected === index ? selectedEmojis[index] : ""}`}
        </motion.a>
      ))}
    </div>
  );
}
