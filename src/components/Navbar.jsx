import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Drawer,
  ListItem,
  ListItemText,
  List,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import { Link } from "react-router-dom";
import { useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
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
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <AppBar position="fixed" color="transparent" zIndex={42} elevation={0}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            component={Link}
            to="/"
          >
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
            adopt me.
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <MenuButton>Nasi Pupile</MenuButton>
            <MenuButton component={Link} to="/howitworks">
              Jak to działa?
            </MenuButton>
            <MenuButton component={Link} to="/shelters">
              Schroniska
            </MenuButton>
            <MenuButton component={Link} to="/adopt">
              ADOPTUJ
            </MenuButton>
          </Stack>
          <IconButton
            size="large"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={toggleDrawer}
          >
            <MenuOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItem onClick={toggleDrawer} component={Link} to="/shelters">
            <ListItemText primary="SCHRONISKA" />
          </ListItem>
          <ListItem onClick={toggleDrawer} component={Link} to="/adopt">
            <ListItemText primary="ADOPTUJ" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};
