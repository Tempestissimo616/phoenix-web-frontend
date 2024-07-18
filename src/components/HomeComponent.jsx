import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  AccountBox,
  Add,
  Home,
  Mail,
  Margin,
  Settings,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";

export const HomeComponent = () => {
  const [open, setOpen] = useState(false);

  const BlueButton = styled(Button)({
    backgroundColor: "skyblue",
    color: "#888",
    margin: 5,
    "&:hover": {
      backgroundColor: "lightblue",
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
    borderBlockColor: "gray",
  }));

  const Icon = styled("div")(({ theme }) => ({
    display: "flex",
    gap: "20px",
  }));

  return (
    <>
      <Typography variant="h4" component="div" gutterBottom>
        HomePage
      </Typography>

      <Button variant="contained" color="primary" size="large">
        Hello World
      </Button>
      <Button startIcon={<SettingsIcon />} variant="contained" color="success">
        123
      </Button>
      <Button startIcon={<Add />} variant="contained" color="otherColor">
        123
      </Button>
      <Button variant="text" size="small">
        niude
      </Button>
      <Button variant="outlined" disabled>
        niude
      </Button>
      <Typography variant="h1" component="h2">
        Hello
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "skyblue",
          color: "#888",
          margin: 5,
          "&:hover": {
            backgroundColor: "lightblue",
          },
          "&:disabled": {
            backgroundColor: "gray",
            color: "white",
          },
        }}
      >
        HAHAHA
      </Button>

      <BlueButton>BLUE BUTTON</BlueButton>

      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Hello
      </Typography>
      <Search>
        <InputBase placeholder="search...">1</InputBase>
      </Search>
      <Icon>
        <Badge badgeContent={3} color="primary">
          <Settings color="action" onClick={(e) => setOpen(true)} />
        </Badge>
        <Badge badgeContent={3} color="primary">
          <Mail color="action" />
        </Badge>
        {/* <Avatar sx={{width:30, height:30}} src="/images/shuodedaoli.gif" alt="Shuo De Dao Li" /> */}
      </Icon>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>

      {/* <div> <img src="/images/shuodedaoli.gif" alt="Public Animation" /> </div> */}

      <Box
        bgcolor="white"
        flex={1}
        p={2}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="HomePage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </>
  );
};
