import {
  Box,
  Container,
  Button,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import hero_dog from "../../src/img/hero_dog2.jpg";

const HeroSection = () => {
  const containerStyle = {
    position: "relative",
    zIndex: 1,
    color: "white",
    height: "100%",
  };
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("lg"));

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
            justifyContent={isSmallScreen ? "center" : "flex-start"}
            alignItems="center"
            style={{ height: "100%" }}
          >
            <Grid item xs={12} md={8} lg={6}>
              <Typography
                component="h1"
                variant={isSmallScreen ? "h4" : isLargeScreen ? "h2" : "h3"}
                my={3}
                sx={{
                  color: "#4F4A45",
                  marginLeft: isSmallScreen ? "auto" : 0,
                }}
              >
                ADOPTuj nie kupuj!
              </Typography>
              <Typography
                variant={isSmallScreen ? "body2" : isLargeScreen ? "h5" : "h5"}
                sx={{
                  color: "#4F4A45",
                  marginLeft: isSmallScreen ? "auto" : 0,
                }}
              >
                Adopcja psa, kota czy innego zwierzaka nigdy nie była tak
                prosta! Wypełnij ankietę i znajdź swojego przyjaciela!
              </Typography>
              <Box my={3}>
                <Button
                  component={Link}
                  to="/adopt"
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
