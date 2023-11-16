// // // import { Box, Stepper, Step, StepLabel } from "@mui/material";
// // // import FirstStep from "./FirstStep";
// // // import SecondStep from "./SecondStep";
// // // import ThirdStep from "./ThirdStep";
// // // import FourthStep from "./FourthStep";
// // // import FifthStep from "./FifthStep";
// // // import SixthStep from "./SixthStep";

// // // const Survey = () => {
// // //   const steps = [
// // //     "Twoje dane",
// // //     "Aktywność",
// // //     "Ankieta",
// // //     "Styl życia",
// // //     "Osobowość",
// // //     "Wynik",
// // //   ];
// // //   const [currentStep, setCurrentStep] = useState(1);
// // //   return (
// // //     <Box sx={{ width: "100%" }}>
// // //       <Stepper style={{ width: "60%" }} activeStep={0} alternativeLabel>
// // //         {steps.map((label) => (
// // //           <Step key={label}>
// // //             <StepLabel>{label}</StepLabel>
// // //           </Step>
// // //         ))}
// // //       </Stepper>
// // //       {/* {handleNextStep(2)} */}
// // //       {/* <FirstStep />
// // //     <SecondStep />
// // //     <ThirdStep />
// // //     <FourthStep />
// // //     <FifthStep />
// // //     <SixthStep /> */}
// // //     </Box>
// // //   );
// // // };
// // // export default Survey;

// // // // function Survey() {
// // // //   function getContent(step) {
// // // //     switch (step) {
// // // //       case 1:
// // // //         return <FirstStep />;
// // // //       case 2:
// // // //         return <SecondStep />;
// // // //       case 3:
// // // //         return <ThirdStep />;
// // // //       case 4:
// // // //         return <FourthStep />;
// // // //       case 5:
// // // //         return <FifthStep />;
// // // //       case 6:
// // // //         return <SixthStep />;
// // // //     }
// // // //   }

import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";
import FifthStep from "./FifthStep";

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
    case 5:
      return <FifthStep />;
  }
}

export default function Survey() {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box sx={{ width: "60%", margin: "auto" }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </>
        ) : (
          <>
            <Box>{getContent(activeStep + 1)}</Box>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                WSTECZ
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                DALEJ
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography
                    variant="caption"
                    sx={{ display: "inline-block" }}
                  >
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? "Wyślij"
                      : "Complete Step"}
                  </Button>
                ))}
            </Box>
          </>
        )}
      </div>
    </Box>
  );
}
