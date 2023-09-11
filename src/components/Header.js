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

export default function Header({ logo, sectionEntries, auxillaryMenuData }) {
  return (
      <header>
        {auxillaryMenuData}
        <HeaderImageContainer>
          <HeaderImage src={logo} alt="Othertones logo white" />
        </HeaderImageContainer>
        <NavBarbutton>
          {sectionEntries}
        </NavBarbutton>
      </header>
  )
}