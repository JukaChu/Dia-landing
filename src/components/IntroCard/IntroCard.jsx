import React from "react";
import "./IntroCard.css";

export function IntroCard(props) {
  return (
    <div className="intro-card">
      <h3 className="intro-card__title">{props.title}</h3>
      <p className="intro-card__subtitle">{props.subtitle}</p>
    </div>
  );
}
