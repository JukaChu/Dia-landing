import React from "react";
import "./Steps.css";
import { Container } from "../Container/Container";
import { ProcessCard } from "../ProcessCard/ProcessCard";
import { StepCatalog } from "../StepCatalog/StepCatalog";

export function Steps() {
  const title = "Process";
  const subtitle = "By the same illusion which lifts the horizon.";
  const text =
    "By the same illusion which lifts the horizon of the sea to the level of the spectator on a " +
    "hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense " +
    "dark sphere, whose upper half was strewn with silver.";

  return (
    <div className="steps">
      <div className="steps__container-gray">
        <Container>
          <div className="steps__second-container">
            <ProcessCard title={title} subtitle={subtitle} text={text} />
            <StepCatalog />
          </div>
        </Container>
      </div>
    </div>
  );
}
