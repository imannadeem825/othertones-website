import React, { useState } from "react";
import logo from "./images/Othertones-Logo-White.png";
import styled from "styled-components";
import Bio from './components/Bio'

import { AiOutlineMenu } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";

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

const NavbarLinkButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  font-family: Lora;
  font-size: 20px;
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

const contactEmailAddress = "othertonesmusic@gmail.com";
const bioBlurb = `Othertones is the solo project of Nashville, Tennessee based musician Iman Nadeem. In addition to lending her powerhouse pop-rock vocals and songwriting to Othertones, Iman is a producer, arranger and multi-instrumentalist. Othertones explores the blurring of many rock subgenres, such as pop-punk and emo rock. The project also utilizes Iman’s unique intersection of marginalized backgrounds, which provide a rare perspective of lyrical content in a white male-dominated scene. Iman’s goal is to help young people of all identities feel seen and heard, and she aims to provide a safe haven and sense of belonging for those who feel othered in their daily lives.`;

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
    content: <Bio bioBlurb={bioBlurb} contactEmailAddress={contactEmailAddress} />,
  },
  {
    navbarTitle: "Contact",
    navbarLink: "/",
    content: "content",
  },
];

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

function App() {
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
        <header>
          <SocialMediaMenu>
            <AiOutlineMenu
              onClick={() =>
                setIsSocialMediaDrawerOpen(!isSocialMediaDrawerOpen)
              }
            />
          </SocialMediaMenu>
          <HeaderImageContainer>
            <HeaderImage src={logo} alt="Othertones logo white" />
          </HeaderImageContainer>
          <NavBarbutton>
            {sectionEntries.map((entry) => (
              <NavbarLinkButton key={entry.navbarTitle} to={entry.navbarLink}>
                {entry.navbarTitle}
              </NavbarLinkButton>
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
    </div>
  );
}

export default App;
