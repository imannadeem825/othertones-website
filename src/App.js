import React, { useState } from "react";
import logo from "./images/Othertones-Logo-White.png";
import styled from "styled-components";

import { AiOutlineMenu } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";

import Header from "./components/Header";

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

const SocialMediaMenu = styled.div`
  position: absolute;
  right: 0;
  font-size: 40px;
  padding-top: 0.5rem;
  z-index: 1;
`;

const SocialMediaDrawer = styled.div`
  height: 100%;
  background-color: rgba(106, 4, 15, 0.7);
  position: fixed;
  right: 0;
  padding-top: 3.5rem;
  z-index: 1;
  width: ${(props) => (props.isOpen ? "40px" : "0px")};
  transition: 0.5s;
`;

const NavbarLinkButton = styled.a`
  background-color: transparent;
  color: white;
  border: none;
  font-family: Lora;
  font-size: 20px;
  text-decoration: none;
`;

const socialMediaEntries = [
  {
    name: "TikTok",
    icon: <FaTiktok />,
    navbarLink: "/",
  },
  {
    name: "Twitter",
    icon: <BsTwitter />,
    navbarLink: "https://twitter.com/othertonesmusic/",
  },
  {
    name: "Facebook",
    icon: <BsFacebook />,
    navbarLink: "/", //TODO: Facebook group/page needs to be set up still!
  },
  {
    name: "Instagram",
    icon: <BsInstagram />,
    navbarLink: "https://www.instagram.com/othertonesmusic/",
  },
  {
    name: "Youtube",
    icon: <FaYoutube />,
    navbarLink: "https://www.youtube.com/channel/UCwM0hX86m1dwZYjcPRJ35EA/", //TODO: personalize/customize link, meet eligibility requirements https://www.searchenginejournal.com/happy-youtube-url-now-can-change/121086/
  },
];

function App({ sectionEntries }) {
  const [isSocialMediaDrawerOpen, setIsSocialMediaDrawerOpen] = useState(false);

  return (
    <div>
      <SocialMediaDrawer isOpen={isSocialMediaDrawerOpen}>
        {socialMediaEntries.map((entry) => (
          <a
            key={entry.name}
            style={{
              color: "white",
              fontSize: "25px",
              display: "block",
              padding: "0 .5rem 1rem .5rem",
            }}
            href={entry.navbarLink}
          >
            {entry.icon}
          </a> //TODO: don't do links, do the correct nav components
        ))}
      </SocialMediaDrawer>
      <div>
        <Header 
          logo={logo} 
          sectionEntries={sectionEntries.map((entry) => (
            <NavbarLinkButton key={entry.navbarTitle} href={entry.href}>
              {entry.navbarTitle}
            </NavbarLinkButton>
          ))} 
          auxillaryMenuData={(  
          <SocialMediaMenu>
            <AiOutlineMenu
              onClick={() =>
                setIsSocialMediaDrawerOpen(!isSocialMediaDrawerOpen)
              }
            />
          </SocialMediaMenu>
          )} 
        />
        <SectionContainer>
          {sectionEntries.map((entry) => (
            <SectionComponentContainer key={`section-${entry.navbarTitle}`}>
              <SectionComponentHeader id={entry.href.slice(1)}>
                {entry.navbarTitle}
              </SectionComponentHeader>
              <SectionComponentContent>{entry.content}</SectionComponentContent>
            </SectionComponentContainer>
          ))}
        </SectionContainer>
      </div>
    </div>
  );
}

export default App;
