import { Slider, Typography, Switch, Box, Grid } from "@mui/material";
import NaturePeopleOutlinedIcon from "@mui/icons-material/NaturePeopleOutlined";
import ParkOutlinedIcon from "@mui/icons-material/ParkOutlined";
import LuggageOutlinedIcon from "@mui/icons-material/LuggageOutlined";
import useLocalStorage from "../../utilis/LocalStorageHook";

const SecondStep = () => {
  const [outdoor, setOutdoor] = useLocalStorage("outdoor", false);
  const [nearPark, setNearPark] = useLocalStorage("nearPark", false);
  const [travelFrequently, setTravelFrequently] = useLocalStorage(
    "travelFrequently",
    false
  );

  const [company, setCompany] = useLocalStorage("company", 50);
  const [cooking, setCooking] = useLocalStorage("cooking", 90);
  const [parties, setParties] = useLocalStorage("parties", 10);
  const [travel, setTravel] = useLocalStorage("travel", 40);
  const [physicalActivity, setPhysicalActivity] = useLocalStorage(
    "physicalActivity",
    30
  );
  const [bedtime, setBedtime] = useLocalStorage("bedtime", 50);

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
            onChange={() => setOutdoor(!outdoor)}
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
            checked={nearPark}
            onChange={() => setNearPark(!nearPark)}
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
            checked={travelFrequently}
            onChange={() => setTravelFrequently(!travelFrequently)}
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
            value={company}
            onChange={(event, newValue) => setCompany(newValue)}
          />
        </Grid>
        <Grid item sx={12} sm={6}>
          <Typography gutterBottom>Gotuję w domu</Typography>
          <Slider
            fullWidth
            defaultValue={90}
            aria-label="Default"
            valueLabelDisplay="auto"
            value={cooking}
            onChange={(event, newValue) => setCooking(newValue)}
          />
        </Grid>
        <Grid item sx={12} sm={6}>
          <Typography gutterBottom>Lubię chodzić na imprezy</Typography>
          <Slider
            fullWidth
            defaultValue={10}
            aria-label="Default"
            valueLabelDisplay="auto"
            value={parties}
            onChange={(event, newValue) => setParties(newValue)}
          />
        </Grid>
        <Grid item sx={12} sm={6}>
          <Typography gutterBottom>Często podróżuję</Typography>
          <Slider
            fullWidth
            defaultValue={40}
            aria-label="Default"
            valueLabelDisplay="auto"
            value={travel}
            onChange={(event, newValue) => setTravel(newValue)}
          />
        </Grid>
        <Grid item sx={12} sm={6}>
          <Typography gutterBottom>Lubię aktywność fizyczną</Typography>
          <Slider
            fullWidth
            defaultValue={30}
            aria-label="Default"
            valueLabelDisplay="auto"
            value={physicalActivity}
            onChange={(event, newValue) => setPhysicalActivity(newValue)}
          />
        </Grid>
        <Grid item sx={12} sm={6}>
          <Typography gutterBottom>Wcześnie chodzę spać</Typography>
          <Slider
            fullWidth
            defaultValue={50}
            aria-label="Default"
            valueLabelDisplay="auto"
            value={bedtime}
            onChange={(event, newValue) => setBedtime(newValue)}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SecondStep;
