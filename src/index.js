import React from "react";
import ReactDOM from "react-dom";

import {CssBaseline, Typography} from "@material-ui/core"

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Typography>
        test
      </Typography>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
