import React from "react";
import "./ClientCard.css";

export function ClientCard(props) {
  return (
    <div className="client-card">
      <img
        src={props.clientBefore}
        alt=""
        className="client-card__before-photo"
      />
      <img src={props.photo} alt="client" className="client-card__photo" />
      <p className="client-card__text">
        “By the same illusion which lifts the horizon of the sea to the level of
        the spectator on a hillside.”
      </p>
      <hr
        className={`client-card__underline client-card__underline--${props.i +
          1}`}
      />
      <p className="client-card__client-name">John Wayne</p>
      <h2
        className={`client-card__client-position client-card__client-position--${props.i +
          1}`}
      >
        ceo
      </h2>
    </div>
  );
}
