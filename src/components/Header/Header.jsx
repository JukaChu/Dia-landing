import React from "react";
import "./Header.css";
import { Container } from "../Container/Container";
import { SiteNav } from "../SiteNav/SiteNav";
import { MainInfoCard } from "../MainInfoCard/MainInfoCard";

export function Header() {
  return (
    <header>
      <div className="header__background"></div>
      <Container>
        <SiteNav />
        <MainInfoCard />
      </Container>
    </header>
  );
}
