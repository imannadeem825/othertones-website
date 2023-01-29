import { FaPlayCircle } from "react-icons/fa";
import hiraethThumbnail from "../images/Hiraeth Thumbnail.png";
import theEffigyThumbnail from "../images/The Effigy Thumbnail.png";

export default function Visuals(props) {
  //TODO: Add layer behind button so play icon is "white"
  const Button = (
    <FaPlayCircle
      style={{
        color: "#6A040F",
        fontSize: "4rem",
        bottom: "30px",
        position: "inherit",
        right: "15%",
      }}
    />
  );
  return (
    <div style={{ padding: ".5rem" }}>
      {/* //TODO: Add responsive design pattern for low resolutions */}
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <img
            style={{ width: "600px", height: "300px" }}
            src={theEffigyThumbnail}
            alt="Effigy Video Thumbnail"
          ></img>
          <div style={{ position: "relative", bottom: "50%", left: "40%" }}>
            <span style={{ fontSize: "28px" }}>The Effigy</span>
            {Button}
          </div>
        </div>
        <div>
          <img
            style={{ width: "600px", height: "300px" }}
            src={hiraethThumbnail}
            alt="Hiraeth Video Thumbnail"
          ></img>
          <div style={{ position: "relative", bottom: "50%", left: "50%" }}>
            <span style={{ fontSize: "28px" }}>Hiraeth</span>
            {Button}
          </div>
        </div>
      </div>
    </div>
  );
}
