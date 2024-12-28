import "./layout.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  // const { width, height } = useWindowDimensions();
  // const tileSize = 50;
  // const rows = Math.floor(height / tileSize);
  // const cols = Math.floor(width / tileSize);

  return <div className="background">{children}</div>;
}
