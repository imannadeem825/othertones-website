import styled from "styled-components";
import HW1 from "../images/HW1.jpg";
import HW2 from "../images/HW2.jpg";
import { Link } from "react-router-dom";

const StoreContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-width: 1200px;
  margin: auto;
  padding: 0.5rem;
`;

const MerchandiseItemContainer = styled.div`
  width: 344px;
  display: flex;
  justify-content: center;
  margin: auto;
  padding-bottom: 2rem;
`;

const MerchandiseItem = styled.div`
  width: inherit;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
`;

const CallToActionContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.15rem;

  button {
    font-family: Lora;
    font-size: 16px;
    border-radius: 20px;
    padding: 0.5rem 1.5rem;
    background-color: #370617;
    color: white;
    border: none;
    font-weight: 600;
    letter-spacing: 1px;
    cursor: pointer;
  }
`;

const merchandiseItems = [
  {
    header: "Phoenix Shirt",
    price: "34.99",
    callToActionButton: <Link to="store">See Details</Link>,
    //TODO: Alt text and other image support needed
    productImages: [HW1, HW2],
  },
  {
    header: "Othertones Keychain",
    price: "9.99",
    callToActionButton: <Link to="store">See Details</Link>,
    //TODO: Alt text and other image support needed
    productImages: [HW2],
  },
];

export default function Store(props) {
  return (
    <StoreContainer>
      {merchandiseItems.map((item) => (
        <MerchandiseItemContainer
          key={`${item.header}-${item.productImages[0].toString()}`}
        >
          <MerchandiseItem>
            <div>
              <img
                style={{ maxHeight: "200px", maxWidth: "150px" }}
                src={item.productImages[0]}
                alt={`some item`}
              ></img>
            </div>
            <div
              style={{
                display: "flex",
                alignContent: "center",
                flexDirection: "column",
                flexWrap: "wrap",
              }}
            >
              <span style={{ fontSize: "20px" }}>{item.header}</span>
              <span
                style={{ margin: "auto", padding: ".25rem" }}
              >{`$${item.price}`}</span>
            </div>
            <CallToActionContainer>
              {item.callToActionButton}
            </CallToActionContainer>
          </MerchandiseItem>
        </MerchandiseItemContainer>
      ))}
    </StoreContainer>
  );
}
