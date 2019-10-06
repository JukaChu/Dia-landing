import React from "react";
import "./Services.css";
import service1 from "./service-1.png";
import service2 from "./service-2.png";
import service3 from "./service-3.png";
import { SimpleService } from "../SimpleService/SimpleService";
import { Container } from "../Container/Container";

export function Services() {
  const servicesPhoto = [service1, service2, service3];
  return (
    <div className="services">
      <Container>
        <h1 className="services__title">What we do</h1>
        <div className="services__simple-service">
          {servicesPhoto.map((service, key) => {
            return <SimpleService service={service} key={key} />;
          })}
        </div>
      </Container>
    </div>
  );
}
