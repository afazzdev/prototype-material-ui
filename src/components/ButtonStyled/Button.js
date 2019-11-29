import React from "react";

import { Button, makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
  root: {
    clipPath: theme.props.polygon
  },
  dropShadow: {
    marginTop: "2rem",
    filter: "drop-shadow(0px 0px 3px rgba(0,0,0,0.5))"
  }
}));

const ButtonStyled = ({ children }) => {
  const classes = useStyle();

  return (
    <div className={classes.dropShadow}>
      <Button
        variant="contained"
        color="primary"
        classes={{
          root: classes.root
        }}
      >
        {children}
      </Button>
    </div>
  );
};

export default ButtonStyled;
