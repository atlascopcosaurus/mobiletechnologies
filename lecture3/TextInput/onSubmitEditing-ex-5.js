import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
export default function App() {
  const [person, setPerson] = useState({ name: "Mario", age: 40 });
  const clickHandler = () => {
    setPerson({ name: "Sam", age: 45 });
  };
  return (
    <View style={styles.container}>
      <Text>
        His name is {person.name} and his age is {person.age}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Update state" onPress={clickHandler} />
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
    margin: 20,
  },
});
