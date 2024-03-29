import React from "react";
import "./Button.css";

export function Button(props) {
  return <button className={`${props.class} button`}>{props.text}</button>;
}
