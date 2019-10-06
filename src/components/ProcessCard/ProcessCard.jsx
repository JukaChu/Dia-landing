import React from "react";
import "./ProcessCard.css";

export function ProcessCard(props) {
  return (
    <div className="process-card">
      <h3 className="process-card__title">{props.title}</h3>
      <h1 className="process-card__subtitle">{props.subtitle}</h1>
      <p className="process-card__text">{props.text}</p>
    </div>
  );
}
