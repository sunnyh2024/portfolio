import { motion } from "motion/react";
import "./footer.css";

export default function Footer() {
  const fontLinks = [
    ["https://fonts.google.com/specimen/Fuzzy+Bubbles", "Fuzzy Bubbles"],
    ["https://fonts.google.com/specimen/Montserrat", "Montserrat"],
    ["https://fonts.google.com/specimen/Roboto+Condensed", "Roboto Condensed"],
  ];

  return (
    <div className="footer beige shadow-dark-gray with-border">
      <div>
        <h4>© 2025 - made with ❤️ by Sunny Huang</h4>
        <br />
        <h4>fonts: </h4>
        {fontLinks.map((link, index) => (
          <motion.a
            href={link[0]}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            key={index}
          >
            <h4>- {link[1]}</h4>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
