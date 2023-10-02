import { useState } from "react";
import bioPic from "../images/Bio Photo.jpg";
import { FaCopy } from "react-icons/fa";
import styled from "styled-components";

const BioContainer = styled.div`
  display: flex;
  width: 85%;
  justify-content: center;
`;

const BioImage = styled.img`
  width: 300px;
`;

const BioContent = styled.div`
  display: flex;
  height: inherit;
  width: 50%;
  padding-left: 2rem;
  line-height: 1.5rem;
  text-justify: inter-word;
  padding-top: 0.5rem;
  font-size: 18px;
`;

const BioContactContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align: center;
  position: relative;
  top: 8rem;
`;

const InquiriesContainer = styled.div`
  font-size: 22px;
  padding: 1rem;
`;

const InquiriesHeader = styled.span`
  border-bottom: 1px solid white;
  padding-bottom: 5px;
  text-transform: capitalize;
`;

const Tooltip = styled.div`
  position: relative;
  background-color: green;
  padding: 0.5rem;
  border-radius: 0.8rem;
  bottom: 2rem;
  margin-right: 0;
  margin-left: auto;
  transition: 0.5s;
  width: 200px;
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
`;

const CarrotToolTip = styled.div`
  content: "";
  position: absolute;
  width: 0.8rem;
  height: 0.8rem;
  right: 208px;
  background-color: green;
  transform: rotate(45deg);
  bottom: 12px;
`;

function Bio(props) {
  const { bioBlurb, contactEmailAddress } = props;
  const [isToolTipVisible, setIsToolTipVisible] = useState(false);

  return (
    <BioContainer>
      <div>
        <BioImage src={bioPic} alt="Othertones playing a set" />
      </div>
      <BioContent>
        <div>
          <div>{bioBlurb}</div>
          <BioContactContainer>
            <InquiriesContainer>
              <InquiriesHeader>Please direct all inquiries to:</InquiriesHeader>
            </InquiriesContainer>
            <div>
              <span>{contactEmailAddress}</span>
              <FaCopy
                style={{
                  position: "relative",
                  top: "3px",
                  left: "5px",
                  cursor: "pointer",
                }}
                onClick={async (event, elem) => {
                  try {
                    await navigator.clipboard.writeText(contactEmailAddress);
                  } catch (err) {
                    console.log(err);
                    return;
                  }
                  setIsToolTipVisible(true);
                  setTimeout(() => setIsToolTipVisible(false), 2000);
                }}
              />
              <Tooltip isVisible={isToolTipVisible}>
                <span>Copied To Clipboard</span>
                <CarrotToolTip />
              </Tooltip>
            </div>
          </BioContactContainer>
        </div>
      </BioContent>
    </BioContainer>
  );
}

export default Bio;
