import React from "react";

import { Button, makeStyles, withStyles } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
  dropShadow: {
    marginTop: "2rem",
    marginBottom: "2rem",
    filter: "drop-shadow(0px 0px 3px rgba(0,0,0,0.5))"
  }
}));

const Styled = withStyles(theme => ({
  root: {
    clipPath: theme.props.polygon,
    margin: "0 .5rem"
  }
}))(Button);

const ButtonStyled = props => {
  const classes = useStyle();

  return (
    <div className={classes.dropShadow}>
      <Styled {...props}>{props.children}</Styled>
    </div>
  );
};

export default ButtonStyled;
