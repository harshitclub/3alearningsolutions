import { RiArrowRightDownLine } from "react-icons/ri";
import "./style.css";
import { technology } from "./Technology";

const Footer = () => {
  return (
    <footer className="width100 flex flexColumn alignCenter justifyCenter">
      <div className="footerContainer flex flexColumn alignCenter justifyStart width95 maxWidth">
        <div className="techFooter width100 flex flexWrap alignCenter justifyCenter">
          {technology.map((tech, index) => {
            return (
              <>
                <div className="techName">
                  <p>{tech.technology}</p>
                </div>
              </>
            );
          })}
        </div>
        <div className="footer width100 flex spaceBtw alignStart justifyCenter">
          <div className="footerTab">
            <h4>
              PAGES <RiArrowRightDownLine className="footerIcon" />
            </h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Corporate</a>
              </li>
              <li>
                <a href="/">Individuals</a>
              </li>
              <li>
                <a href="/">Calendar</a>
              </li>
              <li>
                <a href="/">E-Learning</a>
              </li>
              <li>
                <a href="/">Events</a>
              </li>
            </ul>
          </div>
          <div className="footerTab">
            <h4>
              INDUSTRIES <RiArrowRightDownLine className="footerIcon" />
            </h4>
            <ul>
              <li>
                <a href="/">Information Technology (IT)</a>
              </li>
              <li>
                <a href="/">Manufacturing</a>
              </li>
              <li>
                <a href="/">Education</a>
              </li>
              <li>
                <a href="/">Retail</a>
              </li>
              <li>
                <a href="/">Insurance</a>
              </li>
              <li>
                <a href="/">Construction</a>
              </li>
              <li>
                <a href="/">Healthcare</a>
              </li>
              <li>
                <a href="/">Banking and Finance</a>
              </li>
            </ul>
          </div>

          <div className="footerTab">
            <h4>
              COMPANY <RiArrowRightDownLine className="footerIcon" />
            </h4>
            <ul>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <a href="/">Programs</a>
              </li>
              <li>
                <a href="/">Join Us</a>
              </li>
              <li>
                <a href="/">Register</a>
              </li>
            </ul>
          </div>
          <div className="footerTab">
            <h4>
              SOCIAL <RiArrowRightDownLine className="footerIcon" />
            </h4>
            <ul>
              <li>
                <a href="/">LinkedIn</a>
              </li>
              <li>
                <a href="/">Facebook</a>
              </li>
              <li>
                <a href="/">Twitter</a>
              </li>
              <li>
                <a href="/">Instagram</a>
              </li>
            </ul>
          </div>
          <div className="footerTab">
            <h4>
              LEGAL <RiArrowRightDownLine className="footerIcon" />
            </h4>
            <ul>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Terms Conditions</a>
              </li>
            </ul>
          </div>
          <div className="footerTab">
            <a href="/">
              <div className="footerContactBtn">
                <p>CONTACT</p>
              </div>
            </a>
          </div>
        </div>
        <div className="footerHr"></div>
        <div className="copyRight width100 flex alignCenter justifyCenter">
          <p>© Copyright 2023 | 3a Learning Solutions India Pvt. Ltd</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
