import Accordion from "../../components/accordion/accordion";
import InfoBox from "../../components/infobox/infobox";
import "./projects.css";

export default function Projects() {
  const items = [
    {
      title: "Portfolio",
      duration: "Oct 2024 - Present",
      content: (
        <div className="project-content">
          <p>
            This is the first major project I've done since graduation! While
            the main purpose of this website is to show off my previous
            experiences, I am also using this opportunity to learn more about
            design and animation using Figma and Framer Motion
          </p>
          <br />
          <p className="tech-stack">Tech Stack</p>
          <ul>
            <li>
              <p>Backend: No backend 🤪</p>
            </li>
            <li>
              <p>Frontend: React + Vite, TypeScript, Framer Motion</p>
            </li>
          </ul>
          <a href="https://www.github.com/sunnyh2024/portfolio">
            <img src="/github.svg" className="icon" />
          </a>
        </div>
      ),
    },
    {
      title: "Spotify Playlist Generator",
      duration: "December 2023",
      content: (
        <div className="project-content">
          <p>
            This was my friend and I's final project for Natural Language
            Processing. We trained three models on the Spotify Million Playlist
            Dataset (shortened to about 10,000 playlists) to generate songs
            given a playlist title. It was really interesting working with
            libraries like Keras and Tensorflow, which we used to build the RNN
            and transformer from scratch.
          </p>
          <br />
          <p className="tech-stack">Tech Stack</p>
          <ul>
            <li>
              <p>Backend: Python - Tensorflow, Keras, PyTorch, Numpy</p>
            </li>
            <li>
              <p>
                Frontend: None, but we have a report about the performance of
                each model 👀
              </p>
            </li>
          </ul>
          <a href="https://www.github.com/sunnyh2024/portfolio">
            <img src="/github.svg" className="icon" />
          </a>
        </div>
      ),
    },
  ];
  return (
    <InfoBox color="sky">
      <Accordion items={items} background="ocean" height="20rem" />
      <h3 className="subtext">... and more on the way!</h3>
    </InfoBox>
  );
}
