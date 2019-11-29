import React from "react";
import { Grid, Hidden, Divider, makeStyles } from "@material-ui/core";

import Bg1 from "../../assets/bg1.jpg";

import Forms from "./Forms";

const useStyle = makeStyles({
  root: {
    flexGrow: 1,
    textAlign: "center",
    height: "100vh"
  },
  imageGrid: {
    height: "100vh",
    overflow: "hidden",
    boxSizing: "border-box",
    display: "grid",
    placeItems: "flex-end center",
    background: "#fff"
  },
  image: {
    width: "100%"
  },
  forms: {
    display: "grid",
    placeItems: "center",
    gridAutoFlow: "column",
    height: "100vh",
    width: "300px"
  },
  divider: {
    height: "80vh",
    margin: "auto"
  }
});

const IsFirstTime = ({ classes, Auth }) => {
  return (
    <>
      <Grid item xs sm direction="row" className={classes.forms}>
        <Forms Auth={Auth} whatFor="Register" />
      </Grid>
      <Divider orientation="vertical" className={classes.divider} />
      <Grid item xs sm className={classes.forms}>
        <Forms Auth={Auth} whatFor="Login" />
      </Grid>
    </>
  );
};

const AuthComp = ({ state: { Auth, isNewAcccount } }) => {
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
        <Hidden smDown>
          <Grid item sm={4} className={classes.imageGrid}>
            <img src={Bg1} alt="none" className={classes.image} />
          </Grid>
        </Hidden>
        <Grid item xs sm={8} className={classes.root}>
          <Grid container className={classes.root}>
            <IsFirstTime classes={classes} Auth={Auth} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default AuthComp;
