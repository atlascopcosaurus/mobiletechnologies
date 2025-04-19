import React from "react";
import { StyleSheet, Text, View, Alert, Button, Pressable } from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Alert Dialog{"\n"}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Alert1" onPress={() => Alert.alert("Invalid data!")} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Alert2"
          onPress={() => Alert.alert("Invalid data", "Data is incorrect")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Alert3"
          onPress={() =>
            Alert.alert("Invalid data", "Data is incorrect", [
              { text: "Later", onPress: () => console.log("Later pressed") },
              { text: "Cancel", onPress: () => console.log("Cancel pressed") },
              { text: "Ok", onPress: () => console.log("Ok pressed") },
            ])
          }
        />
      </View>
      <View style={styles.buttonContainer}>
        <Text onPress={() => Alert.alert("Text Alert - Invalid data!")}>
          Text Alert
        </Text>
      </View>
      <Pressable onPress={() => Alert.alert("Invalid data!")}>
        <Text style={styles.buttonStyle}>Pressable 1</Text>
      </Pressable>
      <Pressable
        style={styles.buttonStyle}
        onPress={() =>
          Alert.alert("Invalid data", "Data is incorrect", [
            { text: "Later", onPress: () => console.log("Later pressed") },
            { text: "Cancel", onPress: () => console.log("Cancel pressed") },
            { text: "Ok", onPress: () => console.log("Ok pressed") },
          ])
        }
      >
        <Text>Pressable 2</Text>
      </Pressable>
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
    marginBottom: 20,
  },
  buttonStyle: {
    marginBottom: 20,
  },
});
