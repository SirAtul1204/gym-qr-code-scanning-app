import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";

export type StackParamList = {
  Home: undefined;
  Profile: undefined;
};

const Stack = createStackNavigator<StackParamList>();

let customFonts = {
  "Quattrocento-Bold": require("./Fonts/Quattrocento-Bold.ttf"),
};

const StackHeaderStyle = {
  headerStyle: {
    backgroundColor: "#000136",
  },
  headerTintColor: "#ffffff",
  headerTitleStyle: {
    alignSelf: "center" as const,
    fontFamily: "Quattrocento-Bold",
  },
};

class App extends Component<{}, { fontLoaded: boolean }> {
  state = {
    fontLoaded: false,
  };

  _loadFontsAsync = async () => {
    await Font.loadAsync(customFonts);
    this.setState({ fontLoaded: true });
  };

  componentDidMount = () => {
    this._loadFontsAsync();
  };
  render() {
    if (this.state.fontLoaded) {
      return (
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                name="Home"
                component={Home}
                options={StackHeaderStyle}
              />
              <Stack.Screen
                name="Profile"
                component={Profile}
                options={StackHeaderStyle}
              />
            </Stack.Navigator>
          </NavigationContainer>
          <StatusBar style="light" />
        </Provider>
      );
    } else {
      return <AppLoading />;
    }
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
