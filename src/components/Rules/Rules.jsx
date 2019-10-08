import React from "react";
import "./Rules.css";
import { Container } from "../Container/Container";
import { Button } from "../Button/Button";

export function Rules() {
  let background = [];
  const classButton = "rules__apply-button";
  const textButton = "Apply";

  function createBackgrounds() {
    for (let i = 1; i <= 12; i++) {
      let oneFigure = (
        <div className={`rules__figure rules__figure--${i}`}></div>
      );
      background.push(oneFigure);
    }
    return background;
  }

  createBackgrounds();
  return (
    <div className="rules">
      <div className="rules__background">
        {Array.from(new Array(12)).map((value, i) => {
          return (
            <div
              className={`rules__figure rules__figure--${i + 1}`}
              key={i}
            ></div>
          );
        })}
        <Container>
          <div className="rules__confirm">
            <h1 className="rules__title">Vision, Passion, Results</h1>
            <p className="rules__main-rule">
              By the same illusion which lifts the horizon of the sea to the
              level of the spectator on a hillside, the sable cloud beneath.
            </p>
            <Button text={textButton} class={classButton} />
          </div>
        </Container>
      </div>
    </div>
  );
}
