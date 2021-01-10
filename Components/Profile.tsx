import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { State, ProfileProps } from "../Types";
import { Footer } from "./Footer";
import { clearUserData, updateIsScanned } from "../Redux/Actions";
import { connect } from "react-redux";
import { HeaderBackButton } from "@react-navigation/stack";

class Profile extends Component<ProfileProps, {}> {
  componentDidMount = () => {
    this.props.navigation.setOptions({
      headerLeft: () => (
        <HeaderBackButton
          onPress={() => {
            this.goBack();
          }}
          tintColor="#ffffff"
        />
      ),
      headerRight: () => <View />,
    });
  };

  goBack = () => {
    this.props.clearUserData();
    this.props.updateIsScanned(false);
    this.props.navigation.goBack();
  };
  render() {
    return (
      <View style={profileStyle.container}>
        <View style={profileStyle.info}>
          <Text style={profileStyle.text}>
            Name: {this.props.userData.name}
          </Text>
          <Text style={profileStyle.text}>Age: {this.props.userData.age}</Text>
          <Text style={profileStyle.text}>
            Gender: {this.props.userData.gender.toUpperCase()}
          </Text>
          <Text style={profileStyle.text}>
            Height: {this.props.userData.height}
          </Text>
          <Text style={profileStyle.text}>
            Weight: {this.props.userData.weight}
          </Text>
        </View>
        <Footer />
      </View>
    );
  }
}

const profileStyle = StyleSheet.create({
  container: {
    backgroundColor: "#004A6E",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  info: {
    flex: 5,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  text: {
    paddingTop: 15,
    color: "#ffffff",
    fontFamily: "Quattrocento-Bold",
    fontSize: Dimensions.get("window").width / 12,
  },
});

const mapStateToProps = (state: State) => ({
  userData: state.userData,
});

const mapDispatchToProps = (): object => {
  return { clearUserData: clearUserData, updateIsScanned: updateIsScanned };
};

export default connect(mapStateToProps, mapDispatchToProps())(Profile);
