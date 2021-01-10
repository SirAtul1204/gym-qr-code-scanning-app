import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "./App";

export type Action = {
  type:
    | "UPDATE_SCANNED_DATA"
    | "UPDATE_IS_SCANNED"
    | "GET_USER_DATA"
    | "CLEAR_USER_DATA";
  payload?: any;
};

export interface State {
  isScanned: boolean;
  scannedData: string;
  userData: UserData;
}

export type UserData = {
  name: string;
  age: string;
  height: string;
  weight: string;
  phoneNumber: string;
  gender: "male" | "female" | "other";
  email: string;
};

export interface HomeProps {
  navigation: NavProp;
  isScanned: boolean;
  scannedData: string;
  updateScannedData(s: string): Action;
  updateIsScanned(b: boolean): Action;
  getUserData(userData: UserData): Action;
  userData: UserData;
}

export interface ScannedObj {
  data: string;
}

export type NavProp = StackNavigationProp<StackParamList, "Home">;

export interface ProfileProps {
  navigation: NavProp;
  userData: UserData;
  clearUserData(): Action;
  updateIsScanned(b: boolean): Action;
}
