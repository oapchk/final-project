// import { TextField } from "@mui/material";

// const FirstStep = () => {
//   return (
//     <div>
//       <div>
//         <TextField label="Imię" variant="outlined" />
//       </div>
//       <div>
//         <TextField label="Nazwisko" variant="outlined" />
//       </div>
//       <div>
//         <TextField label="Imię" variant="outlined" />
//       </div>
//       <div></div>
//     </div>
//   );
// };

// export default FirstStep;
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {
  Box,
  FormControl,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
} from "@mui/material";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";

export default function AddressForm() {
  const [contactMethod, setContactMethod] = useState("");

  const handleContactMethodChange = (event) => {
    setContactMethod(event.target.value);
  };
  return (
    <Box sx={{}}>
      <Typography variant="h6" gutterBottom>
        Podaj swoje dane do kontaku
      </Typography>
      <Grid
        container
        // direction="column"
        // justifyContent="center"
        // alignItems="center"
        spacing={3}
        // style={{ margin: "auto" }}
      >
        <Grid item sx={12} sm={5}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Imię"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
          />
        </Grid>
        <Grid item sx={12} sm={5}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Nazwisko"
            fullWidth
            autoComplete="family-name"
            variant="outlined"
          />
        </Grid>
        <Grid item sx={12} sm={5}>
          <TextField
            id="address1"
            name="address1"
            label="Adres"
            fullWidth
            autoComplete="shipping address-line1"
            variant="outlined"
          />
        </Grid>
        <Grid item sx={12} sm={5}>
          <TextField
            required
            id="city"
            name="city"
            label="Miejscowość"
            fullWidth
            autoComplete="shipping address-level2"
            variant="outlined"
          />
        </Grid>

        <Grid item sx={12} sm={5}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="outlined"
          />
        </Grid>
      </Grid>
      <Typography variant="subtitle1" gutterBottom>
        Jak mamy się z Tobą kontaktować?
      </Typography>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={contactMethod}
          onChange={handleContactMethodChange}
        >
          <FormControlLabel value="email" control={<Radio />} label="E-mail" />
          {contactMethod === "email" && (
            <TextField
              id="email"
              label="Adres e-mail"
              fullWidth
              variant="outlined"
              // Add any additional props or styling as needed
            />
          )}
          <FormControlLabel value="phone" control={<Radio />} label="Telefon" />
          {contactMethod === "phone" && (
            <TextField
              id="phone"
              label="Numer telefonu"
              fullWidth
              variant="outlined"
              // Add any additional props or styling as needed
            />
          )}
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
