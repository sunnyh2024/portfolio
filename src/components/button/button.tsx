import "./button.css";

export default function Button({
  title,
  color,
  onClick
}: {
  title: string;
  color: string;
  onClick: () => void;
}) {
  return (
    <button className={`nav-button ${color}`} onClick={onClick}>
      <p className="text">{title}</p>
    </button>
  );
}
