import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";
import SampleComponent from "./components/FeatureComponent";
export default class App extends React.Component {
  state = {
    value: "Tap me!",
    value2: "Tap me!",
  };
  updateState = () => {
    this.setState({ value: "Hello Mate!" });
  };
  updateState2 = () => {
    this.setState({ value2: "Hello My friend!" });
  };
  render() {
    return (
      <View style={styles.container}>
        <SampleComponent
          value={this.state.value}
          doSomething={this.updateState}
        />
        <SampleComponent
          value={this.state.value2}
          doSomething={this.updateState2}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
