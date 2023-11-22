// import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
// import useLocalStorage from "../../utilis/LocalStorageHook";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";
import FifthStep from "./FifthStep";
import { Grid } from "@mui/material";
import { useState } from "react";

const steps = ["Twoje dane", "Styl życia", "Ankieta", "Osobowość", "Wynik"];

function getContent(step) {
  switch (step) {
    case 1:
      return <FirstStep />;
    case 2:
      return <SecondStep />;
    case 3:
      return <ThirdStep />;
    case 4:
      return <FourthStep />;
    default:
      return <FifthStep />;
  }
}

export default function Survey() {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  // const totalSteps = () => {
  //   return steps.length;
  // };

  // const completedSteps = () => {
  //   return Object.keys(completed).length;
  // };

  // const isLastStep = () => {
  //   return activeStep === totalSteps() - 1;
  // };

  // const allStepsCompleted = () => {
  //   return completedSteps() === totalSteps();
  // };
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

  // const handleComplete = () => {
  //   const newCompleted = completed;
  //   newCompleted[activeStep] = true;
  //   setCompleted(newCompleted);
  //   handleNext();
  // };
  const handleComplete = () => {
    const newCompleted = { ...completed };
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };
  // const saveDataToLocalStorage = () => {
  //   const surveyData = {
  //     activeStep,
  //     completed,
  //   };
  //   localStorage.setItem("surveyData", JSON.stringify(surveyData));
  // };
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Box sx={{ width: "80%", marginBlockEnd: "100px" }}>
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
      <Box>{getContent(activeStep + 1)}</Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 5,
          width: "400px",
        }}
      >
        <Button disabled={activeStep === 0} onClick={handleBack}>
          Wstecz
        </Button>
        {activeStep < steps.length - 1 ? (
          <Button onClick={handleComplete}>Dalej</Button>
        ) : null}
      </Box>
    </Grid>
  );
}
