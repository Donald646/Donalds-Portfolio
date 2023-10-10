import "./App.css";
import { useState } from "react";
import NavigationBar from "./Components/navigationBar";
import HomePage from "./Components/homePage";
import { Box, Paper } from "@mui/material";
import AboutPage from "./aboutPage";
import EducationPage from "./Components/educationPage";

function App() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <NavigationBar />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <HomePage />
          <AboutPage />
          <EducationPage />
        </Box>
      </Box>
    </>
  );
}

export default App;
