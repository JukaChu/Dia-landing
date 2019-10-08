import React from "react";
import "./StepCatalog.css";

export function StepCatalog() {
  const stepText =
    "By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.";
  return (
    <div className="step-catalog">
      {Array.from(new Array(4)).map((value, i) => {
        return (
          <div
            className={`step-catalog__simple-step step-catalog__simple-step--${i +
              1}`}
            key={i}
          >
            <h1
              className={`step-catalog__number step-catalog__number--${i + 1}`}
            >
              {i + 1}
            </h1>
            <p className="step-catalog__step-text">{stepText}</p>
          </div>
        );
      })}
    </div>
  );
}
