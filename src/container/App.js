import React from "react";

import Auth from "./Auth";

import {
  CssBaseline,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core";

const App = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#20B2AA"
      }
    },
    fontFamily: `'Open Sans',"Roboto", "Helvetica", "Arial", sans-serif`
  });
  console.log(theme);
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Auth />
    </MuiThemeProvider>
  );
};

export default App;
