import React from "react";
import { View, Pressable, Image, Text, StyleSheet } from "react-native";
const handlePress = () => {
  // Add your onPress logic here
  console.log("Proceed to checkout button pressed");
};
export default function App() {
  const logoImg = require("./assets/icons8-checkout-64.png");
  return (
    <View style={styles.container}>
      <Pressable onPress={handlePress} style={styles.button}>
        <Image source={logoImg} style={styles.logo} resizeMode="contain" />
        <Text style={styles.text}>Proceed to checkout</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end", // Align items at the bottom of the screen
    marginBottom: 20, // Adjust this value as needed
  },
  button: {
    flexDirection: "row", // Arrange logo and text horizontally
    alignItems: "center", // Align items in a row vertically
    justifyContent: "center", // Center content horizontally
    backgroundColor: "#007bff", // Example background color
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 24,
    width: "100%", // Make the button take the full width of the screen
  },
  logo: {
    width: 24, // Adjust the width of the logo as needed
    height: 24, // Adjust the height of the logo as needed
    marginRight: 8, // Add some spacing between logo and text
  },
  text: {
    color: "#fff", // Example text color
    fontSize: 16, // Example font size
    fontWeight: "bold", // Example font weight
  },
});
