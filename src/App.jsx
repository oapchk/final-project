import HeroSection from "./components/HeroSection";
import "../src/App.scss";
import { Navbar } from "./components/Navbar";
import Survey from "./components/survey/Survey";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Survey />
    </>
  );
}

export default App;
