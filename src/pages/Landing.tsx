import { useContext, useState } from "react";
import TypeWriter from "../components/Typewriter";
import { useAppContext } from "../hooks/useAppContext";

export default function LandingPage() {
  const [showCursor, setShowCursor] = useState(true);
  const {appConfig, setAppConfig} = useAppContext();

  return (
    <div className="bg-black min-h-screen flex flex-col">
      <div className="m-auto max-w-3xl text-center">
        {/* <TypeWriter content="Hi, my name is Sunny" speed={100} showCursor={true}/> */}
        <div className="text-5xl">Hi, my name is Sunny</div>
        <div className="text-2xl mt-2">Computer Science Undergraduate at Northeastern University</div>
      </div>
    </div>
  );
}
