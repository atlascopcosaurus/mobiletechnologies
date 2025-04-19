import React from "react";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";
const SampleComponent = (props) => {
  return (
    <Text onPress={props.doSomething} style={styles.text}>
      {props.value}
    </Text>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 26,
    color: "black",
    fontFamily: "Roboto",
    margin: 20,
  },
});
export default SampleComponent;
