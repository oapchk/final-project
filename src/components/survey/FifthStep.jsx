import { Box, Button, Typography } from "@mui/material";
import dog_outdoors from "/src/img/dog_outdoors.jpg";

const FifthStep = () => {
  return (
    <Box position={"relative"} textAlign={"center"}>
      <img
        src={dog_outdoors}
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
          Poznaj Lemona!
        </Typography>
        <Typography
          variant="body1"
          pb={2}
          paddingInline={2}
          sx={{
            color: "#4F4A45",
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
          velit minima obcaecati suscipit temporibus ducimus, veritatis earum
          odio minus laborum.
        </Typography>
        <Button sx={{ marginBottom: 2 }}> DOWIEDZ SIĘ WIĘCEJ</Button>
      </Box>
    </Box>
  );
};

export default FifthStep;
// import { useState, useEffect } from "react";
// import { Box, Button, Typography } from "@mui/material";
// import dog_outdoors from "/src/img/dog_outdoors.jpg";

// const FifthStep = ({ selectedOptions }) => {
//   const [animalData, setAnimalData] = useState(null);

//   useEffect(() => {
//     // Tutaj załaduj dane o zwierzęciu na podstawie wybranych opcji z pliku JSON
//     const fetchData = async () => {
//       try {
//         // Załaduj dane z pliku JSON
//         const response = await fetch(
//           `https://mocki.io/v1/6aba0cd8-0e02-4e88-9168-f1993f65464f`
//         );
//         const data = await response.json();

//         // Znajdź dane odpowiedniego zwierzęcia na podstawie wyborów
//         const selectedAnimal = data.find((animal) => {
//           // Tutaj dostosuj warunki do struktury swojego pliku JSON
//           return (
//             animal.breed.toLowerCase() === selectedOptions[1].toLowerCase() &&
//             animal.traits.includes(selectedOptions[4].toLowerCase())
//           );
//         });

//         setAnimalData(selectedAnimal);
//       } catch (error) {
//         console.error("Error fetching animal data:", error);
//       }
//     };

//     fetchData();
//   }, [selectedOptions]);

//   if (!animalData) {
//     return null; // Możesz tutaj dodać jakąś informację o ładowaniu danych
//   }

//   return (
//     <Box position={"relative"} textAlign={"center"}>
//       <img
//         src={dog_outdoors}
//         style={{
//           display: "block",
//           margin: "auto",
//           width: "600px",
//           borderRadius: "4px",
//         }}
//       />
//       <Box
//         position="absolute"
//         bottom="15%"
//         right="60%"
//         width="70%"
//         sx={{ borderRadius: "4px", backgroundColor: "#fff" }}
//       >
//         <Typography
//           component="h1"
//           variant="h4"
//           pt={2}
//           sx={{
//             color: "#4F4A45",
//           }}
//         >
//           Poznaj {animalData.name}!
//         </Typography>
//         <Typography
//           variant="body1"
//           pb={2}
//           paddingInline={2}
//           sx={{
//             color: "#4F4A45",
//           }}
//         >
//           {animalData.description}
//         </Typography>
//         <Button sx={{ marginBottom: 2 }}> DOWIEDZ SIĘ WIĘCEJ</Button>
//       </Box>
//     </Box>
//   );
// };

// export default FifthStep;
