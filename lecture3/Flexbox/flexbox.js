import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "red" }} />
      <View style={{ flex: 2, backgroundColor: "darkorange" }} />
      <View style={{ flex: 3, backgroundColor: "green" }} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#fff",
  },
});
