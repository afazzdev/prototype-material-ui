import React from "react";
import Routes from "../routes/routes";

import { MuiProvider } from "../styles";

const App = () => {
  return <Routes />;
};

export default MuiProvider(App);
