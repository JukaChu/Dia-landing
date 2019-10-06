import React from "react";
import "./Footer.css";
import { Container } from "../Container/Container";
import { MessageForm } from "../MessageForm/MessageForm";
import { Contacts } from "../Contacts/Contacts";
import { SiteNavFooter } from "../SiteNavFooter/SiteNavFooter";

export function Footer() {
  return (
    <footer>
      <Container>
        <div className="footer__company-contacts">
          <MessageForm />
          <Contacts />
        </div>
        <SiteNavFooter />
      </Container>
    </footer>
  );
}
