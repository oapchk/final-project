// import { useState } from "react";
// import {
//   FormControlLabel,
//   Checkbox,
//   Typography,
//   FormGroup,
// } from "@mui/material";

// const FourthStep = () => {
//   const [checkboxValues, setCheckboxValues] = useState({
//     option1: false,
//     option2: false,
//     option3: false,
//     option4: false,
//     option5: false,
//     option6: false,
//     option7: false,
//   });

//   const handleCheckboxChange = (name) => (event) => {
//     setCheckboxValues({ ...checkboxValues, [name]: event.target.checked });
//   };

//   return (
//     <div>
//       <Typography variant="h5">Co jeszcze jest dla Ciebie ważne?</Typography>
//       <FormGroup>
//         <FormControlLabel
//           control={
//             <Checkbox
//               checked={checkboxValues.option1}
//               onChange={handleCheckboxChange("option1")}
//             />
//           }
//           label="Opcja 1"
//         />
//         <FormControlLabel
//           control={
//             <Checkbox
//               checked={checkboxValues.option2}
//               onChange={handleCheckboxChange("option2")}
//             />
//           }
//           label="Opcja 2"
//         />
//         <FormControlLabel
//           control={
//             <Checkbox
//               checked={checkboxValues.option3}
//               onChange={handleCheckboxChange("option3")}
//             />
//           }
//           label="Opcja 3"
//         />
//         <FormControlLabel
//           control={
//             <Checkbox
//               checked={checkboxValues.option4}
//               onChange={handleCheckboxChange("option34")}
//             />
//           }
//           label="Opcja 4"
//         />
//         <FormControlLabel
//           control={
//             <Checkbox
//               checked={checkboxValues.option5}
//               onChange={handleCheckboxChange("option5")}
//             />
//           }
//           label="Opcja 5"
//         />
//         <FormControlLabel
//           control={
//             <Checkbox
//               checked={checkboxValues.option6}
//               onChange={handleCheckboxChange("option6")}
//             />
//           }
//           label="Opcja 6"
//         />
//         <FormControlLabel
//           control={
//             <Checkbox
//               checked={checkboxValues.option7}
//               onChange={handleCheckboxChange("option7")}
//             />
//           }
//           label="Opcja 7"
//         />
//       </FormGroup>
//     </div>
//   );
// };

// export default FourthStep;
