import React from "react";

import clsx from "clsx";

import {
  Typography,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  OutlinedInput,
  FormHelperText,
  makeStyles
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

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
    width: 300
  }
}));

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
  // console.log(values);
  return (
    <>
      <Typography variant="h4">{whatFor}</Typography>
      {whatFor &&
        Auth[whatFor.toLowerCase()].map(log => {
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
              <OutlinedInput
                id="outlined-adornment-password"
                type={isPassword()}
                value={values[Name] || ""}
                className={classes.textField}
                onChange={handleChange(Name)}
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
        })}
    </>
  );
};

export default InputStyled;
