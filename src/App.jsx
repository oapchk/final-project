import HeroSection from "./components/HeroSection";
import "../src/App.scss";
import { Navbar } from "./components/Navbar";
// import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  );
}

export default App;
