import InfoBox from "../../components/infobox/infobox";
import "./about.css";

export default function About() {
  return (
    <InfoBox color="peach">
      <p>
        Hey! before you explore the rest of my portfolio, here’s some more about
        me. I grew up in a small town in Central Massachusetts, and just
        graduated from Northeastern University in May 2024. I’m currently a
        software engineer at Capital One, where I automate workflows for the
        Cyber division. Outside of work, I enjoy rock climbing, traveling, and
        listening to music (I love Niki and am getting into k-pop too). This
        past summer, I made a long overdue trip to Asia to visit family, which
        got me into all sorts of tea, and now I’m trying to experiment with
        different oat milks to make the best matcha latte.
      </p>
      <div className="about-sublayout">
        <ul>
          <li>
            <p>🏠 - Boston, MA</p>
          </li>
          <li>
            <p>📍 - Washington, DC</p>
          </li>
          <li>
            <p>📚 - Northeastern University</p>
          </li>
          <li>
            <p>💼 - Capital One</p>
          </li>
          <li>
            <p>🤗 - Fun fact: I love noodles and fruit!</p>
          </li>
        </ul>
        <img src="/about_pic.jpg" className="picture light-border" />
      </div>
      <div>
        <h2>Skills</h2>
        <p>
          I try to stay curious, and am always open to learning something new. I
          am a newly certified AWS Solutions Architect, and I am also using
          Figma to learn more about design. My current goal is to continue
          diversifying my work experiences and figuring out what I enjoy.
          <br />
          <br />
          Languages - Python, Javascript/Typescript, Java, Golang, Kotlin, C
          <br />
          Other stuff - React, MongoDB, PostgreSQL, AWS, Databricks, Tensorflow
        </p>
      </div>
    </InfoBox>
  );
}
