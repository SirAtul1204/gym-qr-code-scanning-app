import React, { Component } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Linking,
} from "react-native";

export class Footer extends Component<{}, {}> {
  render() {
    return (
      <View style={style.majorContainer}>
        <Text style={style.followOn}>Follow On:</Text>
        <View style={style.imageContainer}>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://www.instagram.com/sir_atul_12/")
            }
          >
            <Image
              style={style.image}
              source={require("../Images/instagram.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://www.linkedin.com/in/atul-singh-2628431ab/"
              )
            }
          >
            <Image
              style={style.image}
              source={require("../Images/linkedin.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://github.com/SirAtul1204")}
          >
            <Image
              style={style.image}
              source={require("../Images/github.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  majorContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#000136",
    width: Dimensions.get("window").width,
  },
  followOn: {
    color: "#ffffff",
    fontFamily: "Quattrocento-Bold",
    fontSize: Dimensions.get("window").width / 20,
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: Dimensions.get("window").width,
  },
  image: {
    width: 44,
    height: 44,
  },
});
