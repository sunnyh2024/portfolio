import Navbar from "../navbar/navbar";
import "./pageLayout.css";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="page-layout">
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
