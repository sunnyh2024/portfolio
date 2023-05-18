import { useState } from "react";
import { useAppContext } from "../hooks/useAppContext";
import WorkCard from "../components/WorkCard";
import WorkMenu from "../components/WorkMenu";
import { MenuOpen } from "@mui/icons-material";
import Layout from "../components/common/Layout";

export default function WorkPage() {
  const [projectIndex, setProjectIndex] = useState(-1);

  const labels = ["Northeastern U.", "AMD", "Amazon Robotics", "Capital One"];

  const cards = [
    <WorkCard key="1" />,
    <WorkCard key="2" />,
    <WorkCard key="3" />,
    <WorkCard key="4" />,
  ];

  return (
    <Layout title="Work Experience" showContact={true}>
      <div className="flex flex-row mt-20 gap-2 h-[65%]">
        <div className="basis-1/3 z-30 -pl-32 bg-black">
          <WorkMenu
            projectIndex={projectIndex}
            setProjectIndex={setProjectIndex}
            labels={labels}
          />
        </div>
        <div className="basis-2/3 z-20">{cards[projectIndex]}</div>
      </div>
    </Layout>
  );
}
