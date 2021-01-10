import { Action, State } from "../Types";

export const updateScannedData = (
  scannedData: State["scannedData"]
): Action => {
  return {
    type: "UPDATE_SCANNED_DATA",
    payload: scannedData,
  };
};

export const updateIsScanned = (isScanned: State["isScanned"]): Action => {
  return {
    type: "UPDATE_IS_SCANNED",
    payload: isScanned,
  };
};

export const getUserData = (userData: State["userData"]): Action => {
  return {
    type: "GET_USER_DATA",
    payload: userData,
  };
};

export const clearUserData = (): Action => {
  return {
    type: "CLEAR_USER_DATA",
  };
};
