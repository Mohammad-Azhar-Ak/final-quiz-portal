import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles(() => ({
  menuStyle:{
    top:"33px", 
    left:"-15px",
  },
  gridStyle:{
    padding:"10px",
  }
}))

const HeaderComponent = ({ anchorEl, handleClose, handleMenu, token}) => {
  const classes = useStyle();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Quiz Portal
          </Typography>
          <div>
            {token &&
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle fontSize="large" />
              </IconButton>
            }
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              className={classes.menuStyle}
            >
              <Grid className={classes.gridStyle}>
                <Grid> <MenuItem onClick={() => handleClose(1)}>Profile</MenuItem></Grid>
                <Grid> <MenuItem onClick={() => handleClose(2)}>Home</MenuItem></Grid>
                <Grid> <MenuItem onClick={() => handleClose(3)}>LogOut</MenuItem></Grid>
              </Grid>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default HeaderComponent