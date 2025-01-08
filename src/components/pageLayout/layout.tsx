import Navbar from "../navbar/navbar";
import "./layout.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div>{children}</div>
    </div>
  );
}
