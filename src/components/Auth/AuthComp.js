import React from "react";
import { Grid, Hidden, Divider, makeStyles } from "@material-ui/core";

import Bg2 from "../../assets/bg2.jpg";

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
      <Grid
        container
        className={classes.root}
        style={{
          padding: "0 1rem"
        }}
        direction="row"
      >
        <Grid item xs sm className={classes.forms}>
          <LogicForm
            render={(state, handleChange, handleClick, handleSubmit) => (
              <Forms
                whatFor={state.isNewAccount ? "Register" : "Login"}
                Auth={state.Auth}
                values={state.values}
                error={state.error}
                complete={state.complete}
                handleChange={handleChange}
                handleClickShowPassword={handleClick}
                handleSubmit={handleSubmit}
              />
            )}
          />
        </Grid>
        {/* <Hidden smDown>
          <Divider orientation="vertical" className={classes.divider} />
        </Hidden>
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
                error={state.error}
                complete={state.complete}
                handleChange={handleChange}
                handleClickShowPassword={handleClickShowPassword}
                handleSubmit={handleSubmit}
              />
            )}
          />
        </Grid> */}
      </Grid>
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
          <Grid item sm={8} className={classes.imageGrid}>
            <img src={Bg2} alt="none" className={classes.image} />
          </Grid>
        </Hidden>
        <Grid item xs sm={4} className={classes.root}>
          <IsFirstTime classes={classes} />
        </Grid>
      </Grid>
    </>
  );
};

export default AuthComp;
