import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FifthStep from "./FifthStep";

const steps = ["Twoje dane", "Styl życia", "Ankieta", "Wynik"];

function getContent(step) {
  switch (step) {
    case 1:
      return <FirstStep />;
    case 2:
      return <SecondStep />;
    case 3:
      return <ThirdStep />;
    default:
      return <FifthStep />;
  }
}

export default function Survey() {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleNext = () => {
    const newActiveStep = activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = { ...completed };
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Box
        sx={{ width: "80%", marginBlockEnd: "50px", marginBlockStart: "10px" }}
      >
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Box sx={{ width: isSmallScreen ? "90%" : "50%" }}>
        {getContent(activeStep + 1)}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          justifyContent: "space-between",
          mt: 5,
          width: "80%",
          marginInline: "auto",
        }}
      >
        <Button
          sx={{ mb: isSmallScreen ? 2 : 0 }}
          disabled={activeStep === 0}
          onClick={handleBack}
        >
          Wstecz
        </Button>
        {activeStep < steps.length - 1 ? (
          <Button onClick={handleComplete}>Dalej</Button>
        ) : null}
      </Box>
    </Grid>
  );
}
