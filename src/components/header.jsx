import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Buttons from "./button";
import LogoImage from "../assets/PtpLogo.svg";
import "./header-style.css";
import { useNavigate, useLocation } from "react-router-dom";
import NavBar from "../pages/NavBar";
import { getWithExpiry } from "../utils/localStorage";
import { ABOUT, SIGN_IN } from "../constants";

const pages = [
  {
    name: "Support",
    // url: `${SUPPORT}`
    url: ``
  },
  {
    name: "About",
    url: `${ABOUT}`
  },
];

function ResponsiveAppBar() {
  const isLoggedIn = getWithExpiry('isLoggedIn')
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [setLoggedIn] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleOpenNavMenu = () => {
    setToggle(!toggle);
  };

  // const loginState = localStorage.getItem("token");

  const handleClickHandle = () => {
    setToggle(false);
    navigate(`${SIGN_IN}`);
  };

  const handleLogout = () => {
    setToggle(false);
    localStorage.clear("token");
    navigate("/");
  };
  const onClickMain = (url) => {
    setToggle(false);
    navigate(url);
  };
  

  return (
    <AppBar
      sx={{ backgroundColor: "transparent", boxShadow: "none", width: "100vw", left: 0 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src={LogoImage}
            alt="Logo"
            style={{
              display: "flex",
              alignItems: "center",
              height: "6vw", // Adjust the height as needed
              marginLeft: "4rem",
              marginTop: "1rem", // Add margin-left to push the logo to the left
              cursor: "pointer",
            }}
            onClick={()=> {onClickMain('/')}}
          />
          <Box sx={{ flexGrow: 1 }} />
          {/* <Box sx={{ display: { xs: "none", sm: "flex" }, marginRight: 3 }}>
            {pages.map((page) => (
              <Button onClick={onClickMain} sx={{ color: "white" }}>
                {page}
              </Button>
            ))}
          </Box>
          <Box
            sx={{ display: { xs: "none", sm: "flex" }, marginRight: 3 }}
            onClick={handleClickHandle}
          >
            <Buttons text={loginState ? "Logout" : "SIGN IN"} />
          </Box>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick ={handleOpenNavMenu}
          >
            <MenuIcon />
          </IconButton> */}
          <div style={{display: 'flex', gap: 25}}>
          {pages.map((page) => (
              <Button onClick={()=> {onClickMain(page.url)}} sx={{ color: "white" }} style={{fontSize: '1vw', fontWeight: 600}}>
                {page.name}
              </Button>
            ))}
             {isLoggedIn ? <Buttons onClickButton={handleLogout} text={"Logout" } style={{fontSize: '1vw', fontWeight: 600}}/>
             :<Buttons onClickButton={handleClickHandle} text={"SIGN IN"} style={{fontSize: '1vw', fontWeight: 600}}/>}
             <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick ={handleOpenNavMenu}
          >
            <MenuIcon  style={{width: '1.8em', height:'1.8em'}}/>
          </IconButton>
          </div>
        </Toolbar>
      </Container>
      {/* <Menu      
        onClose={onClickMain}
      ></Menu> */}
      <NavBar toggle={toggle} handleOpenNavMenu={handleOpenNavMenu}/>
    </AppBar>
  );
}

export default ResponsiveAppBar;
