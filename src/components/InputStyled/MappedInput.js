import React from "react";

import clsx from "clsx";

import {
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  OutlinedInput,
  FormHelperText,
  withStyles
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const OutlinedInputEdit = withStyles(theme => ({
  root: {
    background: "white",
    clipPath: theme.props.polygon
  }
}))(OutlinedInput);

const MappedInput = ({
  whatFor,
  Auth,
  values,
  error,
  complete,
  classes,
  handleChange,
  handleClickShowPassword
}) => {
  return Auth[whatFor.toLowerCase()].map(log => {
    const isPassword = () => {
      switch (log) {
        case "Password":
          if (values.showPassword) {
            return "text";
          }
          return "password";

        case "Confirm Password":
          if (values.showConfirmPassword) {
            return "text";
          }
          return "password";

        default:
          return "text";
      }
    };

    const isShowPassword = () => {
      if (log === "Password") {
        if (values.showPassword) {
          return <Visibility />;
        } else {
          return <VisibilityOff />;
        }
      } else {
        if (values.showConfirmPassword) {
          return <Visibility />;
        } else {
          return <VisibilityOff />;
        }
      }
    };

    const Name = `${log.toLowerCase().replace(/\s+/g, "")}`;

    return (
      <FormControl
        key={log}
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        error={error[Name] ? error[Name] : false}
        fullWidth
      >
        <InputLabel
          htmlFor="outlined-adornment-password"
          style={{
            background: "#fff",
            width: "auto",
            paddingRight: "0"
          }}
        >
          {log}
        </InputLabel>
        <div className={classes.cuttedEdge}>
          <OutlinedInputEdit
            id="outlined-adornment-password"
            type={isPassword()}
            value={values[Name] || ""}
            style={{
              width: "100%"
            }}
            className={classes.textField}
            onChange={handleChange(Name)}
            name={whatFor.toLowerCase()}
            endAdornment={
              (log === "Password" || log === "Confirm Password") && (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => handleClickShowPassword(log)}
                  >
                    {isShowPassword()}
                  </IconButton>
                </InputAdornment>
              )
            }
            labelWidth={0}
          />
        </div>
        {error[Name] ? (
          <FormHelperText
            id="component-helper-text"
            variant="outlined"
            error={error}
          >
            {error[Name]}
          </FormHelperText>
        ) : complete[Name] ? (
          <FormHelperText id="component-helper-text" variant="outlined">
            {complete[Name]}
          </FormHelperText>
        ) : null}
      </FormControl>
    );
  });
};

export default MappedInput;
