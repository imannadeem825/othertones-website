import React from 'react';
// import { Link, Router,  } from 'react-router-dom';
import logo from './images/Othertones-Logo-White.png';
import styled from 'styled-components';

const HeaderImageContainer = styled.div`
  display: flex; 
  justify-content: center;
`

const HeaderImage = styled.img`
  width: 75%;
`

const NavBarbutton = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const navbarEntries = [
  {
    navbarTitle: "Music",
    navbarLink: "/"
  },  
  {
    navbarTitle: "Shows",
    navbarLink: "/"
  },  
  {
    navbarTitle: "Store",
    navbarLink: "/"
  }, 
  {
    navbarTitle: "Visuals",
    navbarLink: "/"
  },  
  {
    navbarTitle: "Bio",
    navbarLink: "/"
  },  
  {
    navbarTitle: "Contact",
    navbarLink: "/"
  },
]

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <HeaderImageContainer>
            <HeaderImage src={logo} alt="Othertones logo white" />
          </HeaderImageContainer>
          <NavBarbutton>
            { navbarEntries.map((entry) => <button key={entry.navbarTitle} to={entry.navbarLink}>{entry.navbarTitle}</button>) }
          </NavBarbutton>
        </header>
      </div>
    );
  }
}

export default App;
