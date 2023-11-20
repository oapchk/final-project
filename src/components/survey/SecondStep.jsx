import { useState } from "react";
import { Slider, Typography, Switch, Box, Grid } from "@mui/material";
import NaturePeopleOutlinedIcon from "@mui/icons-material/NaturePeopleOutlined";
import ParkOutlinedIcon from "@mui/icons-material/ParkOutlined";
import LuggageOutlinedIcon from "@mui/icons-material/LuggageOutlined";

const SecondStep = () => {
  const [switchStates, setSwitchStates] = useState({
    outdoor: false,
    nearPark: false,
    travelFrequently: false,
  });

  const handleChangeSwitch = (key) => (event) => {
    setSwitchStates((prevStates) => ({
      ...prevStates,
      [key]: event.target.checked,
    }));
  };

  return (
    <Box>
      <Typography variant="h6" mb={3}>
        Przesuń suwak zgodnie ze swoim stylem życia
      </Typography>
      <Grid container spacing={5} marginBottom={5}>
        <Grid
          item
          sx={12}
          sm={4}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <NaturePeopleOutlinedIcon />
          <Typography>Wolę być na świeżym powietrzu</Typography>
          <Switch
            fullWidth
            checked={switchStates.outdoor}
            onChange={handleChangeSwitch("outdoor")}
            inputProps={{ "aria-label": "controlled" }}
          />
        </Grid>
        <Grid
          item
          sx={12}
          sm={4}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <ParkOutlinedIcon />
          <Typography>Mieszkam blisko parku</Typography>
          <Switch
            fullWidth
            checked={switchStates.nearPark}
            onChange={handleChangeSwitch("nearPark")}
            inputProps={{ "aria-label": "controlled" }}
          />
        </Grid>
        <Grid
          item
          sx={12}
          sm={4}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <LuggageOutlinedIcon />
          <Typography>Często podróżuje służbowo</Typography>
          <Switch
            fullWidth
            checked={switchStates.travelFrequently}
            onChange={handleChangeSwitch("travelFrequently")}
            inputProps={{ "aria-label": "controlled" }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={5}>
        <Grid item sx={12} sm={6}>
          <Typography gutterBottom>Lubię towarzystwo</Typography>
          <Slider
            fullWidth
            defaultValue={50}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
        </Grid>
        <Grid item sx={12} sm={6}>
          <Typography gutterBottom>Gotuję w domu</Typography>
          <Slider
            fullWidth
            defaultValue={90}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
        </Grid>
        <Grid item sx={12} sm={6}>
          <Typography gutterBottom>Lubię chodzić na imprezy</Typography>
          <Slider
            fullWidth
            defaultValue={10}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
        </Grid>
        <Grid item sx={12} sm={6}>
          <Typography gutterBottom>Często podróżuję</Typography>
          <Slider
            fullWidth
            defaultValue={40}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
        </Grid>
        <Grid item sx={12} sm={6}>
          <Typography gutterBottom>Lubię aktywność fizyczną</Typography>
          <Slider
            fullWidth
            defaultValue={30}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
        </Grid>
        <Grid item sx={12} sm={6}>
          <Typography gutterBottom>Wcześnie chodzę spać</Typography>
          <Slider
            fullWidth
            defaultValue={50}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SecondStep;
