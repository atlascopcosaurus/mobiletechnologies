import { StyleSheet, Text, View, Switch } from "react-native";
import { useState } from "react";
export default function App() {
  const [isEnable, setEnable] = useState(false);
  return (
    <View style={styles.container}>
      <Text>Toggle Switch</Text>
      <View style={styles.switchContainer}>
        <Text style={styles}> Switch </Text>
        <Switch
          value={isEnable}
          onValueChange={() => setEnable((previousState) => !previousState)}
          trackColor={{ false: "blue", true: "green" }}
          thumbColor="white"
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
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});
