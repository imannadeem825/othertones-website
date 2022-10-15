import React from "react";
import logo from "./images/Othertones-Logo-White.png";
import styled from "styled-components";

const HeaderImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const HeaderImage = styled.img`
  width: 75%;
`;

const NavBarbutton = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const SectionComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionComponentHeader = styled.div`
  padding-top: 2rem;
  font-size: 28px;
  margin: auto;
`;

const SectionComponentContent = styled.div`
  padding-top: 1rem;
`;

const sectionEntries = [
  {
    navbarTitle: "Music",
    navbarLink: "/",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    navbarTitle: "Shows",
    navbarLink: "/",
    content: "content",
  },
  {
    navbarTitle: "Store",
    navbarLink: "/",
    content: "content",
  },
  {
    navbarTitle: "Visuals",
    navbarLink: "/",
    content: "content",
  },
  {
    navbarTitle: "Bio",
    navbarLink: "/",
    content: "content",
  },
  {
    navbarTitle: "Contact",
    navbarLink: "/",
    content: "content",
  },
];

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <HeaderImageContainer>
            <HeaderImage src={logo} alt="Othertones logo white" />
          </HeaderImageContainer>
          <NavBarbutton>
            {sectionEntries.map((entry) => (
              <button key={entry.navbarTitle} to={entry.navbarLink}>
                {entry.navbarTitle}
              </button>
            ))}
          </NavBarbutton>
        </header>
        <SectionContainer>
          {sectionEntries.map((entry) => (
            <SectionComponentContainer key={`section-${entry.navbarTitle}`}>
              <SectionComponentHeader>
                {entry.navbarTitle}
              </SectionComponentHeader>
              <SectionComponentContent>{entry.content}</SectionComponentContent>
            </SectionComponentContainer>
          ))}
        </SectionContainer>
      </div>
    );
  }
}

export default App;
