import styled from "styled-components";


const ShowsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
`;

const ShowsListContainer = styled.div`
  width: 85%;
`;

const ShowRowEntryContainer = styled.div`
  border-bottom: 1px solid white;
`;

const ShowRowEntry = styled.div`
  padding-top: 2rem;
  padding-bottom: 1rem;

  opacity: ${(props) => (props.soldOut ? "50%" : "100%")};
`;

const CallToActionContainer = styled.span`
  float: right;
  margin-top: 1rem;
`;
const ShowDateContainer = styled.span`
  font-size: 24px;
  font-weight: 500;
`;

const ShowLocationContainer = styled.div`
  width: 50%;
  margin-left: 0;
  font-size: 20px;
`;

const ShowVenueContainer = styled.span`
  text-transform: uppercase;
`;
const ShowCityContainer = styled.span`
  float: right;
`;

const ShowDescriptionContainer = styled.span`
  padding-top: 1rem;
`;

const ShowCallToActionButton = styled.button`
  font-family: Lora;
  font-size: 16px;
  border-radius: 9px;
  padding: 0.5rem 1.5rem;
  background-color: #370617;
  color: white;
  border: none;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: inherit;
`;

const ShowLinkOut = styled.a`
  pointer-events: ${(props) => (props.soldOut ? "none" : "inherit")};
  cursor: ${(props) => (props.soldOut ? "auto" : "pointer")};
`;

function Shows() {
  //TODO: Disable row when the date has passed for the show as well
  const getShowCallToAction = (soldOut, ticketLink) => (
    <ShowLinkOut href={ticketLink} target="_blank" soldOut={soldOut}>
      <ShowCallToActionButton>
        {soldOut ? "SOLD OUT" : "TICKETS"}
      </ShowCallToActionButton>
    </ShowLinkOut>
  );

  const currentShowsList = [
    {
      date: Date.now(),
      venue: "The Tabernacle",
      city: "Atlanta, GA, USA",
      description: "Supporting Issues",
      soldOut: false,
      ticketLink: "https://www.eventbrite.com/",
    },
    {
      date: new Date("11-22-2022"),
      venue: "The End",
      city: "Nashville, TN, USA",
      description: "Headliner",
      soldOut: true,
      ticketLink: "https://www.facebook.com/",
    },
    {
      date: new Date("11-30-2022"),
      venue: "Sydney Opera House",
      city: "Sydney, AU",
      description: "SYDNEY BAYBEE",
      soldOut: false,
      ticketLink: "https://www.stubhub.com/",
    },
  ];

  const getReadableDate = (date) => {
    const newDate = new Date(date);

    const fullMonthList = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const day = newDate.getDate();
    const month = newDate.getMonth();
    const year = newDate.getFullYear();
    return `${fullMonthList[month + 1]} ${day}, ${year}`;
  };

  const sortDate = (current, next) => {
    if (current.date > next.date) {
      return 1;
    } else if (current.date < next.date) {
      return -1;
    } else {
      return 0;
    }
  };

  return (
    <ShowsContainer>
      <ShowsListContainer>
        {currentShowsList
          .sort((current, next) => sortDate(current, next))
          .map((show) => (
            <ShowRowEntryContainer key={show.venue}>
              <ShowRowEntry soldOut={show.soldOut}>
                {/* TODO: Add Lora fontweights so we can get this boldish :) */}
                <CallToActionContainer>
                  {getShowCallToAction(show.soldOut, show.ticketLink)}
                </CallToActionContainer>
                <div>
                  <ShowDateContainer>
                    {getReadableDate(show.date)}
                  </ShowDateContainer>
                </div>
                <div>
                  <ShowLocationContainer>
                    <ShowVenueContainer>{show.venue}</ShowVenueContainer>
                    <ShowCityContainer>{show.city}</ShowCityContainer>
                  </ShowLocationContainer>
                </div>
                <ShowDescriptionContainer>
                  {show.description}
                </ShowDescriptionContainer>
              </ShowRowEntry>
            </ShowRowEntryContainer>
          ))}
      </ShowsListContainer>
    </ShowsContainer>
  );
}

export default Shows;
