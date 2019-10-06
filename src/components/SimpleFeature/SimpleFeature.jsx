import React from "react";
import "./SimpleFeature.css";

export function SimpleFeature(props) {
  return (
    <div className="simple-feature">
      <img src={props.pic} alt="feature" className="simple-feature__picture" />
      <p className="simple-feature__text">{props.featureText}</p>
    </div>
  );
}
