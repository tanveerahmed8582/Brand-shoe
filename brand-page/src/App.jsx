import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navigation from "./components/navigation";
import HeroSection from "./components/Hero";

function App() {
  return (
    <>
      <div>
        <Navigation></Navigation>
        <HeroSection></HeroSection>
      </div>
    </>
  );
}

export default App;
