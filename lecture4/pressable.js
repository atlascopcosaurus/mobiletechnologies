import { StyleSheet, Text, View, Image, Pressable } from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => console.log("Text pressed")}>
        <Text>Proceed to next screen</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
