import GalleryCard from "../../components/galleryCard/card";
import InfoBox from "../../components/infobox/infobox";
import "./gallery.css";

export default function Gallery() {
  const topPics = [
    { label: "acadia", location: "Acadia, ME", camera: "Sony (something)" },
    {
      label: "blue_chicken",
      location: "National Art Gallery, Washington, DC",
      camera: "iPhone 15 Pro",
    },
    {
      label: "yosemite_stars",
      location: "Yosemite National Park, CA",
      camera: "iPhone 15 Pro",
    },
    { label: "brookline", location: "Brookline, MA", camera: "iPhone 15 Pro" },
    { label: "miami_beach", location: "Miami, FL", camera: "iPhone 15 Pro" },
    {
      label: "montreal",
      location: "Montreal, Canada",
      camera: "Samsung Galaxy S20",
    },
    { label: "fuji", location: "Mt. Fuji, Japan", camera: "iPhone 15 Pro" },
    {
      label: "nyc_2022",
      location: "New York, NY",
      camera: "Samsung Galaxy S20",
    },
    {
      label: "san_fran",
      location: "San Francisco, CA",
      camera: "iPhone 15 Pro",
    },
    { label: "miami_sunrise", location: "Miami, FL", camera: "iPhone 15 Pro" },
    { label: "chihuly", location: "Seattle, WA", camera: "iPhone 15 Pro" },
    {
      label: "mariposa_snowman",
      location: "Mariposa Grove, CA",
      camera: "iPhone 15 Pro",
    },
    {
      label: "ucla",
      location: "UCLA, Los Angeles, CA",
      camera: "iPhone 15 Pro",
    },
  ];
  const bottomPics = [
    {
      label: "echo_lake",
      location: "Los Angeles, CA",
      camera: "iPhone 15 Pro",
    },
    {
      label: "yosemite_valley",
      location: "Yosemite National Park, CA",
      camera: "iPhone 15 Pro",
    },
    { label: "xian", location: "Xi'An, China", camera: "iPhone 15 Pro" },
    {
      label: "arlington_sunset",
      location: "Arlington, VA",
      camera: "iPhone 15 Pro",
    },
    {
      label: "chongqing",
      location: "Chongqing, China",
      camera: "iPhone 15 Pro",
    },
    { label: "nara_deer", location: "Nara, Japan", camera: "iPhone 15 Pro" },
    { label: "boston_flower", location: "Boston, MA", camera: "iPhone 15 Pro" },
    { label: "seattle", location: "Seattle, WA", camera: "Samsung Galaxy S20" },
    {
      label: "la_highway",
      location: "Los Angeles, CA",
      camera: "iPhone 15 Pro",
    },
    { label: "la_house", location: "Los Angeles, CA", camera: "iPhone 15 Pro" },
    { label: "conbini", location: "Kyoto, Japan", camera: "iPhone 15 Pro" },
    { label: "tjs_sunset", location: "Brookline, MA", camera: "iPhone 15 Pro" },
    {
      label: "capital",
      location: "Washington, DC",
      camera: "Samsung Galaxy S20",
    },
  ];

  return (
    <InfoBox color="lavender">
      <h3>bonus travel photos!</h3>
      <div className="gallery-layout">
        <div className="gallery-row">
          {topPics.map((pic, index) => (
            <GalleryCard
              key={index}
              source={`gallery/${pic.label}.jpg`}
              location={pic.location}
              camera={pic.camera}
            />
          ))}
        </div>
        <div className="gallery-row">
          {bottomPics.map((pic, index) => (
            <GalleryCard
              key={index}
              source={`gallery/${pic.label}.jpg`}
              location={pic.location}
              camera={pic.camera}
            />
          ))}
        </div>
      </div>
    </InfoBox>
  );
}
