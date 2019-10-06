import React from "react";
import "./MainContent.css";
import { Container } from "../Container/Container";
import { SliderSocial } from "../SliderSocial/SliderSocial";
import { Services } from "../Services/Services";
import { Steps } from "../Steps/Steps";
import { Features } from "../Features/Features";
import { Clients } from "../Clients/Clients";
import { Rules } from "../Rules/Rules";

export function MainContent() {
  return (
    <div className="main-content">
      <Container>
        <SliderSocial />
      </Container>
      <Services />
      <Steps />
      <Features />
      <Clients />
      <Rules />
    </div>
  );
}
