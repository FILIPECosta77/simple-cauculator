import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const MyHeader = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Toolbar variant="dense">
          <Typography
            variant="h4"
            color="inherit"
            component="div"
            sx={{ p: 2 }}
          >
            Calculadora
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MyHeader;
