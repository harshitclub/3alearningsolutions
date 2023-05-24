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
                TRAINING <RiArrowDownSLine className="navIcon" />
                <ul>
                  <li>
                    <a href="/individual">INDIVIDUAL</a>
                  </li>
                  <li>
                    <a href="/calendar">CALENDAR</a>
                  </li>

                  <li>
                    <a href="/events">EVENTS</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/e-learning">E-LEARNING</a>
              </li>
              <li>
                <a href="/corporate">CORPORATE</a>
              </li>
              <li>
                <a href="/contact" className="navContact">
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
