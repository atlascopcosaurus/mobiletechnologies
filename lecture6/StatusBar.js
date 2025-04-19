import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Status Bar</Text>
      <StatusBar
        backgroundColor="lightgreen"
        barStyle="dark-content"
        hidden={false}
      />
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
