import React from "react";
import "./Clients.css";
import { Container } from "../Container/Container";
import clientPhoto1 from "./client-photo-1.png";
import clientPhoto2 from "./client-photo-2.png";
import clientPhoto3 from "./client-photo-3.png";
import clientBefore1 from "./client-1-before.svg";
import clientBefore2 from "./client-2-before.svg";
import clientBefore3 from "./client-3-before.svg";
import { ClientCard } from "../ClientCard/ClientCard";

export function Clients() {
  const clientPhotos = [clientPhoto1, clientPhoto2, clientPhoto3];
  const clientBefore = [clientBefore1, clientBefore2, clientBefore3];
  return (
    <div className="clients">
      <Container>
        <h1 className="clients__title">Testimonials</h1>
        <h2 className="clients__subtitle">
          By the same illusion which lifts the horizon.
        </h2>
        <div className="clients__container">
          {clientPhotos.map((photo, i) => {
            return (
              <ClientCard
                photo={photo}
                key={i}
                i={i}
                clientBefore={clientBefore[i]}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
}
