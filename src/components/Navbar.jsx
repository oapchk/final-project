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

const MenuButton = (props) => (
  <Button
    {...props}
    sx={{
      color: "#4F4A45",
      "&:hover": { color: "#fff", backgroundColor: "#FF9130" },
    }}
  />
);

export const Navbar = () => {
  return (
    <AppBar position="fixed" color="transparent" zIndex={42} elevation={0}>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <PetsIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{
            color: "#4F4A45",
            flexGrow: 1,
            fontWeight: 400,
            marginLeft: -1,
          }}
        >
          ADOPT
        </Typography>
        <Stack direction="row" spacing={2}>
          <MenuButton>Nasi Pupile</MenuButton>
          <MenuButton>Jak to działa?</MenuButton>
          <MenuButton>Schroniska</MenuButton>
          <MenuButton>Adoptuj</MenuButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};