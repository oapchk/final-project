// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import "../src/App.scss";
import { Navbar } from "./components/Navbar";
import Survey from "./components/survey/Survey";
import { ThemeProvider, createTheme } from "@mui/material";
import Shelters from "./components/Shelters";
import HowItWorks from "./components/HowItWorks";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF9130",
      contrastText: "#fff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/adopt" element={<Survey />} />
          <Route path="/shelters" element={<Shelters />} />
          <Route path="/howitworks" element={<HowItWorks />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
