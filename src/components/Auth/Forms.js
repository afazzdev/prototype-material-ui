import React from "react";
import clsx from "clsx";

import {
  Container,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  FilledInput,
  InputAdornment,
  IconButton,
  OutlinedInput,
  makeStyles
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import ButtonStyled from "../ButtonStyled/Button";

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
    width: 200
  }
}));

const Forms = ({ Auth, whatFor, value, label, error, onSubmit }) => {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <>
      <Container>
        <form
          onSubmit={onSubmit}
          style={{
            display: "grid",
            placeItems: "center",
            gridAutoFlow: "row"
          }}
        >
          <Typography variant="h4">{whatFor}</Typography>
          {whatFor &&
            Auth[whatFor.toLowerCase()].map(log => {
              const isPassword = () => {
                if (log === "Password" || log === "Confirm password") {
                  if (values.showPassword) {
                    return "text";
                  }
                  return "password";
                } else {
                  return "text";
                }
              };
              return (
                <FormControl
                  key={log}
                  className={clsx(classes.margin, classes.textField)}
                  variant="outlined"
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
                    value={value}
                    onChange={handleChange(
                      `${log.toLowerCase().replace(/\s+/g, "")}`
                    )}
                    endAdornment={
                      log === "Password" || log === "Confirm password" ? (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {values.showPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ) : null
                    }
                    labelWidth={70}
                  />
                </FormControl>
              );
            })}
          <ButtonStyled type="submit">Submit</ButtonStyled>
        </form>
      </Container>
    </>
  );
};

export default Forms;
