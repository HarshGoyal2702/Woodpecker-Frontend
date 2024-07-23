import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import FloodIcon from "@mui/icons-material/Flood";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GeoMapLeaflet from "./Components/GeoChartLeaflet";
import Carousel from "./Components/Carousel";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import GeoChart from "./Components/GeoChart"
import About from "../components/About"

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
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

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {NavList.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton component={Link} to={item.link}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        
      >
        <Toolbar className="">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            ANALYTICS BOARD
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <div className="pt-[80px]">
          <div className="flex md:flex-row flex-col items-center justify-center max-h-[450px]">
            <div className="z-[10] flex flex-col gap-3 mb-8 mr-5 ">
              <Card sx={{ maxWidth: 600 }} className="shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Welcome to
                  </Typography>
                  <Typography variant="h5" component="div" className="text-green-500 font-semibold drop-shadow-xl">
                    Disaster Management & Prediction
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    AI-powered Insights
                  </Typography>
                  <Typography variant="body2">
                    Our advanced AI models detect and predict disasters based on
                    current weather conditions. Search by location to get
                    real-time updates and take necessary precautions.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>

              <div className="flex items-center justify-center my-4 gap-4">
                <Card sx={{ maxWidth: 320 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Feature
                    </Typography>
                    <Typography variant="h5" component="div">
                      Disaster Detection
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Real-time Analysis
                    </Typography>
                    <Typography variant="body2">
                      Our AI analyzes real-time data to detect potential
                      disasters, providing timely alerts and minimizing risks.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>

                <Card sx={{ maxWidth: 320 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Feature
                    </Typography>
                    <Typography variant="h5" component="div">
                      Search by Location
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Customized Reports
                    </Typography>
                    <Typography variant="body2">
                      Enter your location to receive customized disaster
                      predictions and safety measures specific to your area.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </div>
            </div>
            <div className="h-[50vh] w-[50vw]">
              {/* <GeoMapLeaflet /> */}
              <GeoChart/>
            </div>
          </div>
          <CssBaseline />
          <Carousel />
          <CssBaseline />
        </div>
        <About/>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
