import React from "react";
import "./SiteNavFooter.css";

export function SiteNavFooter() {
  const siteNavArray = ["Home", "About us", "Services", "Work", "Contact Us"];
  return (
    <div className="site-nav-footer">
      <ul className="site-nav-footer__menu">
        {siteNavArray.map((navElem, key) => {
          return (
            <a
              href="/"
              className="site-nav-footer__nav-element"
              title={navElem}
              key={key}
            >
              <li>{navElem}</li>
            </a>
          );
        })}
      </ul>
    </div>
  );
}
