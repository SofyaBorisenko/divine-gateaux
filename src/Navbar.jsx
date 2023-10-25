import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faPinterest,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import NavLinks from "./NavLinks";

const socials = [
  {
    icon: faInstagram,
    url: "https://instagram.com",
  },
  {
    icon: faYoutube,
    url: "https://www.youtube.com",
  },
  {
    icon: faPinterest,
    url: "https://pinterest.com",
  },
  {
    icon: faFacebook,
    url: "https://facebook.com",
  },
];

const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext();
  const handleSubmenu = (e) => {
    // console.log(e.target);
    if (!e.target.classList.contains("nav-link")) {
      setPageId(null);
    }
  };
  return (
    <header>
      <div className="header-empty"></div>
      <nav onMouseOver={handleSubmenu}>
        <div className="logo-container"></div>
        <div className="nav-center">
          <button className="toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
          <NavLinks />
        </div>
        <div>
          <ul className="social-icons">
            {socials.map((social, index) => (
              <a href={social.url} key={index}>
                <FontAwesomeIcon
                  icon={social.icon}
                  size="1x"
                  color="#a34c48"
                />
              </a>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
