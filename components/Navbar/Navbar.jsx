import { RiArrowDownSLine } from "react-icons/ri";

import "./style.css";

const Navbar = () => {
  return (
    <header>
      {/* <div className="topBar flex spaceBtw width95 maxWidth border padding">
        <div className="topBarLeft">
          <p>
            Full Stack Web Development Training{" "}
            <span>[10th June | 9AM - 5AM]</span>
          </p>
        </div>
        <div className="topBarRight">
          <p>
            <a href="/">Register</a>
          </p>
        </div>
      </div> */}
      <nav className="flex flexColumn alignCenter justifyCenter width100">
        <div className="navContainer flex alignCenter justifyCenter spaceBtw width95 maxWidth">
          <div className="navLogo">
            <h1>3a Learning</h1>
          </div>
          <div className="menu">
            <ul className="flex">
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/">
                  TRAINING <RiArrowDownSLine className="navIcon" />
                </a>
              </li>
              <li>
                <a href="/">INDUSTRIES</a>
              </li>
              <li>
                <a href="/">COMPANY</a>
              </li>
              <li>
                <a href="/" className="navContact">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
