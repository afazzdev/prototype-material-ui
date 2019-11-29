import { createStore, applyMiddleware } from "redux";
import Thunk from "redux-thunk";

import CombinedReducers from "./redux/reducers";

export const ConfiguredStore = () =>
  createStore(CombinedReducers, {}, applyMiddleware(Thunk));
