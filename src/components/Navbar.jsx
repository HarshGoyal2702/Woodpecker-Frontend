import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import CycloneRoundedIcon from "@mui/icons-material/CycloneRounded";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import HomeIcon from "@mui/icons-material/Home";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FloodIcon from "@mui/icons-material/Flood";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const NavList = [
    { name: "Home", icon: <HomeIcon />, link: "/" },
    { name: "DashBoard", icon: <SpaceDashboardIcon />, link: "/dashboard" },
    { name: "Find By Location", icon: <LocationOnIcon />, link: "/" },
    { name: "Map", icon: <LocationSearchingIcon />, link: "/map" },
    { name: "Admin", icon: <AdminPanelSettingsIcon />, link: "/admin" },
    { name: "Disaster", icon: <FloodIcon />, link: "/disaster" },
    { name: "Precautions", icon: <FavoriteIcon />, link: "/precautions" },
  ];
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {NavList.map((item, index) => (
          <ListItem key={item.name} disablePadding>
            <Link to={item.link}>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Admin", "Disaster", "Precautions"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button
        onClick={toggleDrawer(true)}
        style={{
          backgroundColor: "white",
          margin: "4px ",
        }}
      >
        <CycloneRoundedIcon />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
