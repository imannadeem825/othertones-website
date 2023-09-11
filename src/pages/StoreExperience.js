import Header from "../components/Header";
import logo from "../images/Othertones-Logo-White.png";
import { Link } from "react-router-dom";

export default function StoreExperience({ sectionEntries }) {
  return (
    <div>
      <Header
        logo={logo}
        sectionEntries={sectionEntries.map((entry) => (
          <Link
            style={{
              backgroundColor: "transparent",
              color: "white",
              border: "none",
              fontFamily: "Lora",
              fontSize: "20px",
              textDecoration: "none",
            }}
            key={`store-header-${entry.navbarTitle}`}
            to={`/${entry.href}`}
          >
            {entry.navbarTitle}
          </Link>
        ))}
        auxillaryMenuData={undefined}
      />
    </div>
  );
}
