import "./button.css";

export default function Button({
  title,
  color,

}: {
  title: string;
  color: string;
}) {
  return (
    <button className={`nav-button ${color}`}>
      <p className="text">{title}</p>
    </button>
  );
}
