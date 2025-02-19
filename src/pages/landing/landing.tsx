import Icon from "../../components/icon/icon";
import "./landing.css";
import resume from "/sunny_huang.pdf";
import { motion } from "motion/react";

export default function Landing() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const email = "sunnyshuang.2020@gmail.com"

  return (
    <div className="container">
      <div className="sub-container">
        <div>
          <div className="intro">
            <motion.div
              whileHover={{
                rotate: [null, 360],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              <h3 className="sun-icon">☀️</h3>
            </motion.div>
            <h3 style={{paddingLeft: "12px"}}>hey! i’m</h3>
          </div>
          <h1>SUNNY HUANG</h1>
          <p>
            a fullstack and automation engineer trying to improve my design
            skills
          </p>
          <div className="icons-layout">
            <Icon link="https://www.github.com/sunnyh2024/portfolio" name="github"/>
            <Icon link="https://www.linkedin.com/in/sunnyh2024/" name="linkedin"/>
            <motion.div whileHover={{scale: 1.1}} onClick={() => {
              navigator.clipboard.writeText(email);
              alert(`Copied ${email} to clipboard!`);
            }}><img src={`email2.svg`} alt={`email icon`} /></motion.div>
          </div>
        </div>
        <hr className="line" />
        <img src="pfp.jpg" className="picture with-border" />
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
          whileTap={{ scale: 0.95 }}
        >
          experience 🧑🏻‍💻
        </motion.a>
        <motion.a
          href="#gallery"
          onClick={() => scrollTo("#gallery")}
          className="nav-button lavender with-border"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
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
