import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
export default function App() {
  const [name, setName] = useState("");
  const clickHandler = () => {
    setName("Button pressed");
  };
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Update" onPress={clickHandler} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Press me"
          color="#ffa000"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Button is disabled"
          disabled
          onPress={() => Alert.alert("Cannot press this one")}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginVertical: 10,
  },
});
