// eslint-disable-next-line no-unused-vars
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
import useLocalStorage from "../../utilis/LocalStorageHook";
export default function FirstStep() {
  const [contactMethod, setContactMethod] = useState("");
  const [name, setName] = useLocalStorage("name", "");
  const [lastName, setLastName] = useLocalStorage("lastName", "");
  const [city, setCity] = useLocalStorage("city", "");
  const [postalCode, setPostalCode] = useLocalStorage("postalCode", "");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleContactMethodChange = (event) => {
    setContactMethod(event.target.value);
  };

  return (
    <Box>
      <Typography variant="h6" mb={3}>
        Podaj swoje dane do kontaku
      </Typography>
      <Grid
        container
        direction="rows"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        mb={3}
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
            onChange={(e) => {
              setName(e.target.value);
            }}
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
            onChange={(e) => {
              setLastName(e.target.value);
            }}
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
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </Grid>

        <Grid item sx={12} sm={5}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Kod pocztowy"
            placeholder="XX-XXX"
            fullWidth
            autoComplete="shipping postal-code"
            variant="outlined"
            onChange={(e) => {
              setPostalCode(e.target.value);
            }}
          />
        </Grid>
      </Grid>
      <Typography variant="h6" mb={3}>
        Jak mamy się z Tobą kontaktować?
      </Typography>
      <Grid
        container
        direction="columns"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        mb={3}
      >
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={contactMethod}
            onChange={handleContactMethodChange}
            fullWidth
          >
            <FormControlLabel
              value="email"
              control={<Radio />}
              label="E-mail"
            />
            {contactMethod === "email" && (
              <TextField
                id="email"
                label="Adres e-mail"
                fullWidth
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
              />
            )}
            <FormControlLabel
              value="phone"
              control={<Radio />}
              label="Telefon"
            />
            {contactMethod === "phone" && (
              <TextField
                id="phone"
                label="Numer telefonu"
                fullWidth
                variant="outlined"
                onChange={(e) => setPhone(e.target.value)}
              />
            )}
          </RadioGroup>
        </FormControl>
      </Grid>
    </Box>
  );
}
