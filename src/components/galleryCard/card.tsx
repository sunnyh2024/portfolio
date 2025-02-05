import { useState } from "react";
import "./card.css";

export default function GalleryCard({
  source,
  location,
  camera,
}: {
  source: string;
  location: string;
  camera: string;
}) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="gallery-card"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div>
        <img src={source} className="gallery-image shadow-grape light-border" />
      </div>
      {hover && (
        <div className="pic-infobox light-border">
          <p className="pic-info">
            📍 - {location}
            <br />
            📸 - {camera}
          </p>
        </div>
      )}
    </div>
  );
}
