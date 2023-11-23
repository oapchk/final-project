// import { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";

import animalData from "./animals.json";

const FifthStep = () => {
  const selectedBreed = localStorage.getItem("question_1") || "";

  // useEffect(() => {
  //   const storedValue = localStorage.getItem("value");

  //   if (storedValue !== null && storedValue !== undefined) {
  //     setSelectedBreed(storedValue);
  //   }
  // }, []);
  // console.log("Selected Breed:", selectedBreed);

  const matchingAnimal = animalData.animals.find(
    (animal) =>
      animal.breed.toLowerCase() ===
      (selectedBreed ? selectedBreed.toLowerCase() : "")
  );

  console.log("Matching Animal:", matchingAnimal);

  if (!matchingAnimal) {
    return null;
  }

  return (
    <Box position={"relative"} textAlign={"center"}>
      <img
        src={matchingAnimal.image}
        style={{
          display: "block",
          margin: "auto",
          width: "600px",
          borderRadius: "4px",
        }}
      />
      <Box
        position="absolute"
        bottom="15%"
        right="60%"
        width="70%"
        sx={{ borderRadius: "4px", backgroundColor: "#fff" }}
      >
        <Typography
          component="h1"
          variant="h4"
          pt={2}
          sx={{
            color: "#4F4A45",
          }}
        >
          Poznaj {matchingAnimal.name}!
        </Typography>
        <Typography
          variant="body1"
          pb={2}
          paddingInline={2}
          sx={{
            color: "#4F4A45",
          }}
        >
          {matchingAnimal.description}
        </Typography>
        <Button sx={{ marginBottom: 2 }}> DOWIEDZ SIĘ WIĘCEJ</Button>
      </Box>
    </Box>
  );
};

export default FifthStep;
