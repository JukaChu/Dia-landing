import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { MainContent } from "./components/MainContent/MainContent";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div id="root">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </>
  );
}

export default App;
