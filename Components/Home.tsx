import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { State, ScannedObj, HomeProps, UserData } from "../Types";
import {
  updateIsScanned,
  updateScannedData,
  getUserData,
} from "../Redux/Actions";
import { connect } from "react-redux";
import { Footer } from "./Footer";
import { REACT_NATIVE_BACKEND_API_KEY } from "@env";

class Home extends Component<HomeProps, {}> {
  fetchData = async (): boolean => {
    try {
      let endPoint = new URL(
        "https://gym-website-dummy-backend.herokuapp.com/findByQR"
      );
      endPoint.searchParams.append("API_KEY", REACT_NATIVE_BACKEND_API_KEY);
      endPoint.searchParams.append("id", this.props.scannedData);
      let res = await fetch(String(endPoint));
      let data = await res.json();
      let userData: UserData = {
        age: data.age,
        email: data.email,
        gender: data.gender,
        height: data.height,
        name: data.name,
        phoneNumber: data.phoneNumber,
        weight: data.weight,
      };
      await this.props.getUserData(userData);
      return true;
    } catch (e) {
      console.error("Error in Fetching Data : ", e);
      return false;
    }
  };

  handleBarCodeScan = async (obj: ScannedObj) => {
    if (!this.props.isScanned) {
      await this.props.updateScannedData(obj.data);
      await this.props.updateIsScanned(true);
      if (this.fetchData()) {
        this.props.navigation.navigate("Profile");
      }
    }
  };

  render() {
    return (
      <View style={style.container}>
        <Text style={style.text}>Scan Your QR Code</Text>
        <BarCodeScanner
          style={style.camera}
          barCodeTypes={BarCodeScanner.Constants.BarCodeType.QR}
          onBarCodeScanned={this.handleBarCodeScan}
        />
        <Footer />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#004A6E",
  },
  text: {
    paddingTop: 15,
    color: "#ffffff",
    fontFamily: "Quattrocento-Bold",
    fontSize: Dimensions.get("window").width / 12,
  },
  camera: {
    width: Dimensions.get("window").width - 50,
    height: Dimensions.get("window").height - 200,
  },
});

const mapStateToProps = (state: State) => ({
  isScanned: state.isScanned,
  scannedData: state.scannedData,
  userData: state.userData,
});

const mapDispatchToProps = (): object => {
  return {
    updateIsScanned,
    updateScannedData,
    getUserData,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Home);
