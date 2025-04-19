import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TextInput
        style={styles.input}
        placeholder="A new field"
        multiline={true}
        maxLength={50}
      />
      <TextInput
        style={styles.input}
        editable={false}
        value="This cannot be
edited"
      />
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
