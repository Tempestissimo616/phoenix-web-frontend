import { Button, Typography } from "@mui/material";
import React from "react";

export const HomeComponent = () => {
  return (
    <>
      <Typography variant="h4" component="div" gutterBottom>
        HomePage
      </Typography>

      <Button variant="contained" color="primary" size="large">
        Hello World
      </Button>
      <Button variant="contained">123</Button>
      <Button variant="text" size="small">
        niude
      </Button>
      <Button variant="outlined" disabled>
        niude
      </Button>

      {/* <div> <img src="/images/shuodedaoli.gif" alt="Public Animation" /> </div> */}
    </>
  );
};
