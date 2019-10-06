import React from "react";
import "./MainInfoCard.css";
import { Button } from "../Button/Button";

export function MainInfoCard() {
  const classButton = "main-info-card__more-info";
  const textButton = "Learn more";
  return (
    <div className="main-info-card">
      <h1 className="main-info-card__title">Global digital agency</h1>
      <p className="main-info-card__subtitle">
        By the same illusion which lifts the horizon of the sea to the level of
        the spectator on a hillside, the sable cloud beneath.
      </p>
      <Button text={textButton} class={classButton} />
    </div>
  );
}
