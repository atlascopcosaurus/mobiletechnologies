import { StyleSheet, Text, View, Image, Pressable } from "react-native";
const logoImg = require("./assets/icons8-checkout-64.png");
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Proceed to checkout</Text>
      <Pressable onPress={() => console.log("Image pressed")}>
        <Image source={logoImg} style={{ width: 50, height: 50 }} />
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
