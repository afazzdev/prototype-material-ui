import React from "react";
import { Grid, Hidden, Divider, makeStyles } from "@material-ui/core";

import Bg1 from "../../assets/bg1.jpg";

import Forms from "./Forms";
import LogicForm from "./LogicForms";

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

const IsFirstTime = ({ classes }) => {
  return (
    <>
      <Grid item xs sm direction="row" className={classes.forms}>
        <LogicForm
          render={(
            state,
            handleChange,
            handleClickShowPassword,
            handleSubmit
          ) => (
            <Forms
              whatFor="Register"
              Auth={state.Auth}
              values={state.values}
              error={state.error}
              complete={state.complete}
              handleChange={handleChange}
              handleClickShowPassword={handleClickShowPassword}
              handleSubmit={handleSubmit}
            />
          )}
        />
      </Grid>
      {/* <Divider orientation="vertical" className={classes.divider} />
      <Grid item xs sm className={classes.forms}>
        <LogicForm
          render={(
            state,
            handleChange,
            handleClickShowPassword,
            handleSubmit
          ) => (
            <Forms
              whatFor="Login"
              Auth={state.Auth}
              values={state.values}
              handleChange={handleChange}
              handleClickShowPassword={handleClickShowPassword}
              handleSubmit={handleSubmit}
            />
          )}
        />
      </Grid> */}
    </>
  );
};

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
        <Hidden smDown>
          <Grid item sm={4} className={classes.imageGrid}>
            <img src={Bg1} alt="none" className={classes.image} />
          </Grid>
        </Hidden>
        <Grid item xs sm={8} className={classes.root}>
          <Grid container className={classes.root}>
            <IsFirstTime classes={classes} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default AuthComp;
