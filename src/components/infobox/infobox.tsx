import "./infobox.css";

export default function InfoBox({ children, color }: { children: React.ReactNode, color: 'peach' | 'matcha' | 'lavender' | 'sky' }) {
  
  const colorMap = {
    peach: "ginger",
    matcha: "forest",
    lavender: "grape",
    sky: "ocean"
  }

  return (
    <div className={`infobox ${color} shadow-${colorMap[color]} with-border`}>
      <div className="infobox-layout">{children}</div>
    </div>
  );
}
