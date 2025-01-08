import "./landing.css";
import resume from "/sunny_huang.pdf";

export default function Landing() {

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

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
        <a href="#about" onClick={() => scrollTo("#about")} className="nav-button peach">about me 🍇</a>
        <a href="#work" onClick={() => scrollTo("#work")} className="nav-button matcha">experience 🧑🏻‍💻</a>
        <a href="#gallery" onClick={() => scrollTo("#gallery")} className="nav-button lavender">gallery 🌅</a>
        <a href={resume} target="_blank" className="nav-button sky">resume 📝</a>
      </div>
    </div>
  );
}
