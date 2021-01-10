import { Action, State, UserData } from "../Types";

export const isScanned = (
  state: State["isScanned"] = false,
  action: Action
): boolean => {
  switch (action.type) {
    case "UPDATE_IS_SCANNED":
      return action.payload;
    default:
      return state;
  }
};

export const scannedData = (
  state: State["scannedData"] = "",
  action: Action
): string => {
  switch (action.type) {
    case "UPDATE_SCANNED_DATA":
      return action.payload;
    default:
      return state;
  }
};

const initialUserData: UserData = {
  age: "",
  email: "",
  gender: "male",
  height: "",
  name: "",
  phoneNumber: "",
  weight: "",
};

export const userData = (
  state: UserData = initialUserData,
  action: Action
): UserData => {
  switch (action.type) {
    case "GET_USER_DATA":
      return {
        age: action.payload.age,
        email: action.payload.email,
        gender: action.payload.gender,
        height: action.payload.height,
        weight: action.payload.weight,
        name: action.payload.name,
        phoneNumber: action.payload.phoneNumber,
      };
    case "CLEAR_USER_DATA":
      return initialUserData;
    default:
      return state;
  }
};
