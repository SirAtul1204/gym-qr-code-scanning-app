import { createStore, combineReducers } from "redux";
import { isScanned, scannedData, userData } from "./Reducers";

const RootReducer = combineReducers({
  isScanned,
  scannedData,
  userData,
});

export const store = createStore(RootReducer);
