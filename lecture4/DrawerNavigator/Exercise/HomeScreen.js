import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home{"\n"}</Text>
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
});
