import "./App.css";

import NavigationBar from "./Components/navigationBar";
import HomePage from "./Components/homePage";
import { Box } from "@mui/material";
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
