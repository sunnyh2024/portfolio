import { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [selected, setSelected] = useState(0);
  const tabs = ["home", "about", "projects", "gallery", "resume"];
  const selectedEmojis = ["🏠", "🍇", "💻", "🌅", "📝"]

  return (
    <div className="navbar">
      {tabs.map((tab, index) => (
        <div
          className={`${selected === index ? "selected" : "tab"}`}
          onClick={() => setSelected(index)}
        >
          {`${tab} ${selected === index ? selectedEmojis[index] : ""}`}
        </div>
      ))}
    </div>
  );
}
