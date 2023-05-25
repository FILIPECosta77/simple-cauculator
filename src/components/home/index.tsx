import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import MyHeader from "../header";
import { Box, Container } from "@mui/material";
import Calculator from "../calculator";

const Home = () => {
  return (
    <>
      <CssBaseline />
      <header>
        <MyHeader />
      </header>
      <main>
        <Container>
          <Box
            sx={{
              width: "100%",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Calculator />
          </Box>
        </Container>
      </main>
    </>
  );
};

export default Home;
