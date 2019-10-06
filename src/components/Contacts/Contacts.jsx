import React from "react";
import "./Contacts.css";
import twitter from "./twitter.svg";
import insta from "./instagram.svg";
import fb from "./facebook.svg";

export function Contacts() {
  return (
    <div className="contacts">
      <h1 className="contacts__title">contacts us</h1>
      <h2 className="contacts__subtitle">
        By the same illusion which lifts the horizon.
      </h2>
      <p className="contacts__address-title">call us</p>
      <p className="contacts__number">654 321 987</p>
      <p className="contacts__address-title">visit us</p>
      <p className="contacts__company-address">
        2905 west drive, buffalo grove
      </p>
      <div className="contacts__social-links">
        <a href="https://twitter.com">
          <img src={twitter} alt="twitter" />
        </a>
        <a href="https://instagram.com">
          <img src={insta} alt="instagram" />
        </a>
        <a href="https://facebook.com">
          <img src={fb} alt="facebook" />
        </a>
      </div>
    </div>
  );
}
