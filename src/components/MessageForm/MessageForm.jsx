import React from "react";
import "./MessageForm.css";
import { Button } from "../Button/Button";

export function MessageForm() {
  const classButton = "message-form__button";
  const textButton = "Send";

  return (
    <div className="message-form">
      <h1 className="message-form__title">Send us a message</h1>
      <form className="message-form__container">
        <input
          type="email"
          placeholder="Your email"
          name="email"
          className="message-form__input"
        />
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="message-form__input"
        />
        <input
          type="text"
          placeholder="Your message"
          name="text"
          className="message-form__input"
        />
        <Button text={textButton} class={classButton} />
      </form>
    </div>
  );
}
