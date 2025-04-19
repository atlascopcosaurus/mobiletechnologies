import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
export default function App() {
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <Text>Write name.</Text>
      <TextInput
        style={styles.input}
        onSubmitEditing={(value) => setName(value.nativeEvent.text)}
      />
      <Text>Welcome, {name}!</Text>
      <StatusBar style="auto" />
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
  input: {
    height: 80,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
