import React from "react";
import "./SliderSocial.css";
import image from "./slider-image-x1.png";
import image2 from "./slider-image-x2.png";
import leftArrow from "./left-arrow.svg";
import rightArrow from "./right-arrow.svg";
import { IntroCard } from "../IntroCard/IntroCard";

export function SliderSocial() {
  const socials = ["facebook", "twitter", "instagram"];
  const title = "Welcome";
  const subtitle =
    "By the same illusion which lifts the horizon of the sea to the level of the spectator " +
    "on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an " +
    "immense dark sphere, whose upper half was strewn with silver.";

  return (
    <div className="slider-social">
      <button className="slider-social__button slider-social__button--left">
        <img src={leftArrow} alt="left slide arrow" />
      </button>
      <button className="slider-social__button slider-social__button--right">
        <img src={rightArrow} alt="right slide arrow" />
      </button>
      <div className="slider-social__image">
        <img src={image} srcSet={`${image} 768w, ${image2} 1366w`} alt="" />
      </div>
      <div className="slider-social__social-links">
        {socials.map((social, key) => {
          return (
            <a href="/" title={social} key={key}>
              {social.toUpperCase()}
            </a>
          );
        })}
      </div>
      <IntroCard title={title} subtitle={subtitle} />
    </div>
  );
}
