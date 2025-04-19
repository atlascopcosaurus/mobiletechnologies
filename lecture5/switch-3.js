import { StyleSheet, Text, View, Switch } from "react-native";
import { useState } from "react";
export default function App() {
  const [isEnable, setEnable] = useState(false);
  return (
    <View
      style={{
        backgroundColor: isEnable ? "black" : "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Switch
        value={isEnable}
        onValueChange={() => setEnable((previousState) => !previousState)}
        trackColor={{ false: "blue", true: "green" }}
        thumbColor="white"
      />
      <Text style={{ color: isEnable ? "white" : "black" }}>
        {isEnable ? "Dark Mode : On" : "Dark Mode : Off"}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({});
