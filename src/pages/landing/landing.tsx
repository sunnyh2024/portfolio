import "./landing.css";
import resume from "/sunny_huang.pdf";
import { motion } from "motion/react";

export default function Landing() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container">
      <div className="sub-container">
        <div>
          <h3>
            <motion.span className="sun-icon" whileTap={{rotate: 3}}>☀️</motion.span> hey! i’m{" "}
          </h3>
          <h1>SUNNY HUANG</h1>
          <p>
            a fullstack and automation engineer trying to improve my design
            skills. welcome!
          </p>
          <div className="icons-layout">
            <a href="https://www.github.com/sunnyh2024">
              <img src="/github.svg" className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/sunnyh2024/">
              <img src="/linkedin.svg" className="icon" />
            </a>
          </div>
        </div>
        <hr className="line" />
        <img src="/pfp.jpg" className="picture with-border" />
      </div>
      <div className="sub-container button-layout">
        <motion.a
          href="#about"
          onClick={() => scrollTo("#about")}
          className="nav-button peach with-border"
          whileHover={{ scale: 1.1 }}
        >
          about me 🍇
        </motion.a>
        <motion.a
          href="#work"
          onClick={() => scrollTo("#work")}
          className="nav-button matcha with-border"
          whileHover={{ scale: 1.1 }}
        >
          experience 🧑🏻‍💻
        </motion.a>
        <motion.a
          href="#gallery"
          onClick={() => scrollTo("#gallery")}
          className="nav-button lavender with-border"
          whileHover={{ scale: 1.1 }}
        >
          gallery 🌅
        </motion.a>
        <motion.a
          href={resume}
          target="_blank"
          className="nav-button sky with-border"
          whileHover={{ scale: 1.1 }}
        >
          resume 📝
        </motion.a>
      </div>
    </div>
  );
}
