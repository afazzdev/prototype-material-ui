import React from "react";

import {
  CssBaseline,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core";

export const MuiProvider = WrappedComp => {
  class Wrapped extends React.Component {
    theme = createMuiTheme({
      palette: {
        primary: {
          main: "#20B2AA",
          dark: "#167c76",
          contrastText: "#fff"
        },
        text: {
          // primary: "#fff"
        }
      },
      fontFamily: `'Open Sans',"Roboto", "Helvetica", "Arial", sans-serif`,
      props: {
        polygon:
          "polygon(.5rem 0%, calc(100% - .5rem) 0%, 100% calc(0% + .5rem), 100% calc(100% - .5rem), calc(100% - .5rem) 100%, calc(0% + .5rem) 100%, 0% calc(100% - .5rem), 0% calc(0% + .5rem))"
      }
    });

    render() {
      console.log("this is theme from styles/index", this.theme);
      return (
        <MuiThemeProvider theme={this.theme}>
          <CssBaseline />
          <WrappedComp {...this.props} />
        </MuiThemeProvider>
      );
    }
  }
  return Wrapped;
};
