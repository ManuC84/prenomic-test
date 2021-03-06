import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton, Menu, MenuItem } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { ColorModeContext } from "../context/ToggleColorMode";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export default function Header() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const isMobile = useMediaQuery("(max-width: 600px)");
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { cart } = useSelector((state) => state.cart);
  //reduce cart quantity property to total price
  const totalPrice = cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toLocaleString(
      {
        style: "currency",
        currency: "USD",
      },
      { minimumFractionDigits: 2, maximumFractionDigits: 2 }
    );
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <MenuItem sx={{ cursor: "pointer" }} component={Link} to={"/"}>
            <HomeIcon sx={{ marginRight: "5px" }} />
            {!isMobile && (
              <Typography variant="h6" component="div">
                Prenomics Ecommerce
              </Typography>
            )}
          </MenuItem>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6" component="div" sx={{ marginRight: 2 }}>
              {cart.length > 0 && (isMobile ? <p> {totalPrice}???</p> : <p>total: {totalPrice}???</p>)}
            </Typography>
            <Badge badgeContent={totalItems} color="secondary">
              <ShoppingCartIcon onClick={handleClick} sx={{ cursor: "pointer" }} fontSize="large" />
            </Badge>
            <IconButton
              aria-label={theme.palette.mode === "light" ? "Light Mode" : "Dark Mode"}
              sx={{ ml: 1 }}
              onClick={colorMode.toggleColorMode}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                component={Link}
                to={"/cart"}
                sx={{ textDecoration: "none" }}
                onClick={handleClose}
              >
                Go to cart
              </MenuItem>

              <MenuItem component={Link} to={"/favorites"} onClick={handleClose}>
                Go to favorites
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
