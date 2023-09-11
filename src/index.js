import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App";
import StoreExperience from "./pages/StoreExperience";
import reportWebVitals from "./reportWebVitals";

import Shows from "./components/Shows";
import Visuals from "./components/Visuals";
import Store from "./components/Store";
import Bio from "./components/Bio";

const contactEmailAddress = "othertonesmusic@gmail.com";
const bioBlurb = `Othertones is the solo project of Nashville, Tennessee based musician Iman Nadeem. In addition to lending her powerhouse pop-rock vocals and songwriting to Othertones, Iman is a producer, arranger and multi-instrumentalist. Othertones explores the blurring of many rock subgenres, such as pop-punk and emo rock. The project also utilizes Iman’s unique intersection of marginalized backgrounds, which provide a rare perspective of lyrical content in a white male-dominated scene. Iman’s goal is to help young people of all identities feel seen and heard, and she aims to provide a safe haven and sense of belonging for those who feel othered in their daily lives.`;

const sectionEntries = [
  {
    navbarTitle: "Music",
    navbarLink: "/",
    href: "#music",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    navbarTitle: "Shows",
    navbarLink: "/",
    href: "#shows",
    content: <Shows />,
  },
  {
    navbarTitle: "Store",
    navbarLink: "/",
    href: "#store",
    content: <Store />,
  },
  {
    navbarTitle: "Visuals",
    navbarLink: "/",
    href: "#visuals",
    content: <Visuals />,
  },
  {
    navbarTitle: "Bio",
    navbarLink: "/",
    href: "#bio",
    content: (
      <Bio bioBlurb={bioBlurb} contactEmailAddress={contactEmailAddress} />
    ),
  },
  {
    navbarTitle: "Contact",
    navbarLink: "/",
    href: "#contact",
    content: "content",
  },
];


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: ( 
        <React.StrictMode>
          <App sectionEntries={sectionEntries}/>
        </React.StrictMode>
      )
    },
    {
      path: "/store",
      element: ( 
        <React.StrictMode>
          <StoreExperience sectionEntries={sectionEntries}/>
        </React.StrictMode>
      )
    },

  ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
