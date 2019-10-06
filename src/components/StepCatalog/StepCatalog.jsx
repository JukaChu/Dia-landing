import React from "react";
import "./StepCatalog.css";

export function StepCatalog() {
  const numbers = [1, 2, 3, 4];
  const stepText =
    "By the same illusion which lifts the horizon of the sea to the level of the spectator " +
    "on a hillside.";
  return (
    <div className="step-catalog">
      {numbers.map((number, key) => {
        return (
          <div
            className={`step-catalog__simple-step step-catalog__simple-step--${number}`}
            key={key}
          >
            <h1
              className={`step-catalog__number step-catalog__number--${number}`}
            >
              {number}
            </h1>
            <p className="step-catalog__step-text">{stepText}</p>
          </div>
        );
      })}
    </div>
  );
}
