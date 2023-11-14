import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
// import React from "react";

export const Navbar = () => {
  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <PetsIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: 400, marginLeft: -1 }}
        >
          ADOPT
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Nasi Pupile</Button>
          <Button color="inherit">Jak to działa?</Button>
          <Button color="inherit">Schroniska</Button>
          <Button color="inherit">Adoptuj</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
