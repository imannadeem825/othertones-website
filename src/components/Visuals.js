import { FaPlayCircle } from "react-icons/fa";
import hiraethThumbnail from "../images/Hiraeth Thumbnail.png";
import theEffigyThumbnail from "../images/The Effigy Thumbnail.png";
import HW1 from "../images/HW1.jpg";
import HW2 from "../images/HW2.jpg";
import HW3 from "../images/HW3.jpg";
import HW4 from "../images/HW4.jpg";
import HW5 from "../images/HW5.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

const VisualsContainer = styled.div`
  padding: 0.5rem;
`;

const VideoContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const CarouselContainer = styled.div`
  width: 50%;
  margin: auto;
`;

const data = [
  {
    imgSrc: theEffigyThumbnail,
    imgAltText: "Effigy Video Thumbnail",
    titleText: "The Effigy",
    videoLink: "https://www.youtube.com/watch?v=5lKLJYDBpSI",
  },
  {
    imgSrc: hiraethThumbnail,
    imgAltText: "Hiraeth Video Thumbnail",
    titleText: "Hiraeth",
    videoLink: "https://youtu.be/Q4uLhdxMQaI?t=700",
  },
];

export default function Visuals(props) {
  const Button = (props) => (
    <div
      onClick={() => {
        window.open(props.link ?? "https://google.com");
      }}
    >
      <FaPlayCircle
        style={{
          color: "#6A040F",
          fontSize: "4rem",
          bottom: "30px",
          position: "relative",
          left: "3rem",
          zIndex: 1,
        }}
      />
      <div
        style={{
          width: "40px",
          height: "40px",
          position: "relative",
          backgroundColor: "white",
          left: "3.6rem",
          bottom: "5.5rem",
        }}
      />
    </div>
  );

  return (
    <VisualsContainer>
      {/* //TODO: Add responsive design pattern for low resolutions */}
      {/* //TODO: Modal in the youtube video so we don't navigate away from site */}
      <VideoContainer>
        {data.map((data) => (
          <div key={`${data.imgAltText}-${data.titleText}`}>
            <img
              style={{ width: "600px", height: "300px" }}
              src={data.imgSrc}
              alt={data.imgAltText}
            ></img>
            <div style={{ position: "relative", bottom: "40%", left: "40%" }}>
              <span
                style={{
                  fontSize: "28px",
                  position: "inherit",
                  top: "4.5rem",
                  margin: "1.5rem",
                }}
              >
                {data.titleText}
              </span>
              {<Button link={data.videoLink} />}
            </div>
          </div>
        ))}
      </VideoContainer>
      <CarouselContainer>
        {/* TODO: Make sure to figure out how we want the transition animations. Fade like this? https://getbootstrap.com/docs/4.1/components/carousel/#crossfade*/}
        <Carousel 
          showThumbs={false} 
          statusFormatter={() => {}} 
          infiniteLoop={true} 
          autoPlay={true} 
          transitionTime={1000}
        >
          <div>
            <img src={HW1} alt="hiWatt1" />
          </div>
          <div>
            <img src={HW2} alt="hiWatt2" />
          </div>
          <div>
            <img src={HW3} alt="hiWatt3" />
          </div>
          <div>
            <img src={HW4} alt="hiWatt4" />
          </div>
          <div>
            <img src={HW5} alt="hiWatt5" />
          </div>
        </Carousel>
      </CarouselContainer>
    </VisualsContainer>
  );
}
