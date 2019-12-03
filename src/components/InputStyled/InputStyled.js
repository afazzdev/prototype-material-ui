import React from "react";
import MappedInput from "./MappedInput";

import { Typography, Paper, makeStyles, withStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    //  clipPath: theme.props.polygon,
  },
  cuttedEdge: {
    clipPath: theme.props.polygon,
    padding: "1px",
    background: theme.palette.grey.A100
  },
  dropShadow: {
    background: "black"
  },
  authLabel: {
    color: theme.palette.primary.main,
    margin: "0 2rem",
    padding: "1rem 0"
  },
  labelBorder: {
    background: theme.palette.primary.main,
    padding: "3px",
    clipPath: theme.props.polygonHalfRem,
    margin: "3rem"
  }
}));

const PaperEdit = withStyles(theme => ({
  root: {
    clipPath: theme.props.polygonHalfRemMinThreePx,
    background: theme.palette.common.white
  }
}))(Paper);

const PaperEditFinish = ({ children, classes }) => {
  return (
    <div className={classes.labelBorder}>
      <PaperEdit>{children}</PaperEdit>
    </div>
  );
};

const InputStyled = ({
  whatFor,
  Auth,
  values,
  error,
  complete,
  handleChange,
  handleClickShowPassword
}) => {
  const classes = useStyles();

  return (
    <>
      <PaperEditFinish classes={classes}>
        <Typography variant="h4" className={classes.authLabel}>
          {whatFor}
        </Typography>
      </PaperEditFinish>
      {whatFor && (
        <MappedInput
          whatFor={whatFor}
          Auth={Auth}
          values={values}
          error={error}
          complete={complete}
          classes={classes}
          handleChange={handleChange}
          handleClickShowPassword={handleClickShowPassword}
        />
      )}
    </>
  );
};

export default InputStyled;
