import Accordion from "../../components/accordion/accordion";
import InfoBox from "../../components/infobox/infobox";
import "./projects.css";

export default function Projects() {
  const items = [
    {
      title: "Portfolio",
      duration: "Oct 2024 - Present",
      content: <div className="project-content">
        <p>This is the first major project I've done since graduation! While the main purpose of this website is to show off my previous experiences, I am also using this opportunity to learn more about design and animation using Figma and Framer Motion</p>
        <br/>
        <p className="tech-stack">Tech Stack</p>
        <ul>
          <li><p>Backend: No backend 🤪</p></li>
          <li><p>Frontend: React + Vite, TypeScript, Framer Motion</p></li>
        </ul>
        <a href="https://www.github.com/sunnyh2024/portfolio">
              <img src="/github.svg" className="icon" />
            </a>
      </div>
    },
    {
      title: "Spotify Playlist Generator",
      duration: "December 2023",
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      ]
    },
    {
      title: "Project 3",
      duration: "",
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      ]
    }
  ]
  return (
    <InfoBox color="sky">
    <Accordion items={items} background="ocean"/>
    <h2 className="subtext">... and more on the way!</h2>
  </InfoBox>
  );
}