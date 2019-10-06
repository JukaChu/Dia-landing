import React from "react";
import "./SimpleService.css";

export function SimpleService(props) {
  return (
    <>
      <div className="simple-service__container">
        <img
          src={props.service}
          alt="service"
          className="simple-service__photo"
        />
        <h2 className="simple-service__title">
          By the same illusion which lifts the horizon.
        </h2>
        <p className="simple-service__subtitle">
          By the same illusion which lifts the horizon of the sea to the level
          of the spectator on a hillside.
        </p>
      </div>
    </>
  );
}
