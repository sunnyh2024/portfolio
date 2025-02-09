import InfoBox from "../../components/infobox/infobox";

export default function About() {
  const emojiFacts = [
    "🏠 - Boston, MA",
    "📍 - Washington, DC",
    "📚 - Northeastern University",
    "💼 - Capital One",
    "🤗 - Fun fact: I love noodles and fruit!",
  ];

  return (
    <InfoBox color="peach">
      <p>
        Welcome! before you explore the rest of my portfolio, here’s some more
        about me. I grew up in a small town in Central Massachusetts, and just
        graduated from Northeastern University in May 2024. I’m currently a
        software engineer at Capital One, where I automate workflows for the
        Cyber division. Outside of work, I enjoy rock climbing, traveling, and
        listening to music (I love Niki and am getting into k-pop too). This
        past summer, I made a long overdue trip to Asia to visit family, which
        got me into all sorts of tea, and now I’m trying to experiment with
        different oat milks to make the best matcha latte.
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin: "1rem",
        }}
      >
        <ul>
          {emojiFacts.map((fact, index) => (
            <li key={index}>
              <p>{fact}</p>
            </li>
          ))}
        </ul>
        <img src="/about_pic.jpg" className="picture light-border" />
      </div>
      <div>
        <h2>Skills</h2>
        <p>
          I try to stay curious, and am always open to learning something new. I
          am a newly certified AWS Solutions Architect, and I am also
          experimenting with Figma to learn more about design. My current goal
          is to continue diversifying my work experiences and figuring out what
          I enjoy.
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
