import React from 'react';
import logo from './images/Othertones-Logo-White.png';
import styled from 'styled-components';

const HeaderImageContainer = styled.div`
  display: flex; 
  justify-content: center;
`

const HeaderImage = styled.img`
  width: 75%;
`

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <HeaderImageContainer>
            <HeaderImage src={logo} alt="Othertones logo white" />
          </HeaderImageContainer>
        </header>
      </div>
    );
  }
}

export default App;
