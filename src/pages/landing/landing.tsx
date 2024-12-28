import "./landing.css";
import Button from "../../components/button/button";

export default function Landing() {
  return (
    <div className="container">
      <div className="sub-container">
        <div>
          <h3>☀️ hey! i’m </h3>
          <h1>SUNNY HUANG</h1>
          <p>
            a fullstack and automation engineer trying to improve my design
            skills. welcome!
          </p>
          <div className="icons-layout">
            <img src="/github.svg" className="icon" />
            <img src="/linkedin.svg" className="icon" />
          </div>
        </div>
        <hr className="line" />
        <img src="/pfp.jpg" className="picture" />
      </div>
      <div className="sub-container button-layout">
        <Button title="about me 🥭" color="peach" />
        <Button title="experience 🧑🏻‍💻" color="matcha" />
        <Button title="gallery 🌅" color="lavender" />
        <Button title="resume 📝" color="sky" />
      </div>
    </div>
  );
}
