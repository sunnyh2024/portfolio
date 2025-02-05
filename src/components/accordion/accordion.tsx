import { useState } from "react";
import "./accordion.css";

export default function Accordion({items, background}: {items: {title: string, duration: string, content: React.ReactNode}[], background: 'forest' | 'grape' | 'ginger' | 'ocean' | 'sky'}) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleIndex = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => toggleIndex(index)}
          className={`accordion-item shadow-${background} light-border`}
        >
          <div className="accordion-header">
            <h3>{item.title}</h3>
            <h4>{item.duration}</h4>
          </div>
          {activeIndex === index && (
            <div className="content">
                {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
