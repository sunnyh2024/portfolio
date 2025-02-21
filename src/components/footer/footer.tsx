import { motion } from "motion/react";
import "./footer.css";

export default function Footer() {
  const fontLinks = [
    ["https://fonts.google.com/specimen/Fuzzy+Bubbles", "Fuzzy Bubbles", "fuzzy-bubbles-regular"],
    ["https://fonts.google.com/specimen/Montserrat", "Montserrat", "montserrat-regular"],
    ["https://fonts.google.com/specimen/Roboto+Condensed", "Roboto Condensed", "roboto-condensed-regular"],
  ];

  return (
    <div className="footer beige shadow-dark-gray with-border">
      <div>
        <h4>© 2025 - made with ❤️ by Sunny Huang</h4>
        <br />
        <h4>
          fonts:{" "}
          {fontLinks.map((link, index) => (
            <motion.a
              href={link[0]}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              key={index}
              className={link[2]}
            >
              {link[1]}{index < fontLinks.length - 1 ? ", " : ""}
            </motion.a>
          ))}
        </h4>
      </div>
    </div>
  );
}
