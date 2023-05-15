"use client";

import React, { useEffect, useState } from "react";

import { RiArrowDownSLine } from "react-icons/ri";

import "./style.css";

const Navbar = () => {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  }, []);
  return (
    <header className={`${color ? "sNav" : ""}`}>
      <nav className="flex flexColumn alignCenter justifyCenter width100">
        <div className="navContainer flex alignCenter justifyCenter spaceBtw width95 maxWidth">
          <div className="navLogo">
            <h1>3a Learning Solutions</h1>
          </div>
          <div className="menu">
            <ul className="flex">
              <li>
                <a href="/">HOME</a>
              </li>
              <li className="dropDownMenu">
                <a href="/">
                  TRAINING <RiArrowDownSLine className="navIcon" />
                </a>
                <ul>
                  <li className="dropDownFirstLi">
                    <a href="/">CORPORATE</a>
                  </li>
                  <li>
                    <a href="/">INDIVIDUAL</a>
                  </li>
                  <li>
                    <a href="/">CALENDAR</a>
                  </li>
                  <li>
                    <a href="/">E-LEARNING</a>
                  </li>
                  <li>
                    <a href="/">EVENTS</a>
                  </li>
                </ul>
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
