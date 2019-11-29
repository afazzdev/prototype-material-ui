import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

import Login from "./Login";

const useStyle = makeStyles({
  root: {
    flexGrow: 1,
    textAlign: "center",
    height: "100vh"
  }
});

const AuthComp = () => {
  const classes = useStyle();
  return (
    <>
      <Grid
        className={classes.root}
        container
        direction="row"
        alignItems="center"
        justify="center"
      >
        <Grid item xs>
          <Login />
        </Grid>
      </Grid>
    </>
  );
};

export default AuthComp;
