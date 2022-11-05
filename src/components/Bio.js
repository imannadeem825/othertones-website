import bioPic from "../images/Bio Photo.jpg";
import { FaCopy } from "react-icons/fa";

function Bio(props) {
  const { bioBlurb, contactEmailAddress } = props;
  
  //TODO: Break these out into styled components
  return(
    <div style={{display: "flex", width: "85%", justifyContent: "center" }}>
      <div>
        <img style={{width: "300px" }} src={bioPic} alt="Othertones playing a set" />
      </div>
      <div style={{display: "flex", height: "inherit", width: "50%", paddingLeft: "2rem", lineHeight: "1.5rem", textJustify: "interWord", paddingTop: ".5rem", fontSize: "18px"}}>
        <div>
          <div>{bioBlurb}</div>
          <div style={{width: "90%", margin: "0 auto", textAlign: "center", position: "relative", top: "8rem"}}>
            <div style={{fontSize: "22px", padding: "1rem"}}>
              <span style={{ borderBottom: "1px solid white", paddingBottom: "5px", textTransform: "capitalize"}}>Please direct all inquiries to:</span>
            </div>
            <div>
              <span>{contactEmailAddress}</span>
              {/*TODO: Add confirmation animation on copy to clipboard success!*/}
              <FaCopy onClick={async (event, elem) => { try { await navigator.clipboard.writeText(contactEmailAddress); } catch(err) {console.log(err);} }} style={{position: "relative", top: "3px", left: "5px" }}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;