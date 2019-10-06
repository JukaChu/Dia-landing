import React from "react";
import "./SiteNav.css";
import logo from "../Header/header-logo.svg";

export function SiteNav() {
  const siteNavArray = ["Home", "About us", "Services", "Work", "Contact Us"];
  return (
    <>
      <nav className="site-nav">
        <a href="/" className="site-nav__link">
          <img src={logo} className="site-nav__logo" alt="main page" />
        </a>
        <ul className="site-nav__menu">
          {siteNavArray.map((navElem, key) => {
            return (
              <a
                href="/"
                className="site-nav__nav-element"
                title={navElem}
                key={key}
              >
                <li>{navElem}</li>
              </a>
            );
          })}
        </ul>
        <a href="/" className="site-nav__callback">
          Hire Us
        </a>
      </nav>
    </>
  );
}
