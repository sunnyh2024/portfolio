import { useState } from "react";
import TypeWriter from "../components/Typewriter";

export default function LandingPage() {
  const [showCursor, setShowCursor] = useState(true);

  return (
    <div className="bg-gray-800 min-h-screen">
      <div className="text-5xl absolute top-[45%] left-[10%]">
        <TypeWriter content="Hi, my name is Sunny" speed={100} showCursor={true}/>
      </div>
    </div>
  );
}
