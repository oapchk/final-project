import { Box, Container, Button, Grid, Typography } from "@mui/material";
import hero_dog from "../../src/img/hero_dog2.jpg";

const HeroSection = () => {
  const containerStyle = {
    position: "relative",
    zIndex: 1,
    color: "white",
    height: "100%",
    // Set text color to white or your preferred color
  };

  return (
    <div>
      <Box style={{ position: "relative", height: "100vh" }}>
        <img
          src={hero_dog}
          alt="Picture of the dog with paw up"
          style={{
            position: "absolute",
            zIndex: -1,
            width: "100%",
            height: "100vh",
            objectFit: "cover",
          }}
        />
        <Container style={containerStyle}>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            style={{ height: "100%", width: "50%" }}
          >
            <Grid item xs={12}>
              <Typography
                component="h1"
                variant="h3"
                my={3}
                sx={{ color: "#4F4A45" }}
              >
                ADOPTuj nie kupuj!
              </Typography>
              <Typography variant="h5" sx={{ color: "#4F4A45" }}>
                Adopcja psa, kota czy innego zwierzaka nigdy nie była tak
                prosta! Wypełnij ankietę i znajdź swojego przyjaciela!
              </Typography>
              <Box my={3}>
                <Button
                  href=""
                  variant="contained"
                  sx={{
                    backgroundColor: "#FF5B22",
                    "&:hover": { backgroundColor: "#FF9130" },
                  }}
                >
                  ADOPTUJ
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default HeroSection;
