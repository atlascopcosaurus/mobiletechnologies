import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
export default function App() {
  // Sample array of local image file paths
  const images = [
    require("./assets/food/1.jpg"),
    require("./assets/food/2.jpg"),
    require("./assets/food/3.jpg"),
    require("./assets/food/4.jpg"),
    require("./assets/food/5.jpg"),
    require("./assets/food/6.jpg"),
    // Add more local image file paths as needed
  ];
  return (
    <View style={styles.container}>
      <ScrollView>
        {images.map((image, index) => (
          <Image key={index} source={image} style={styles.image} />
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "left",
    justifyContent: "center",
  },
  innerText: {
    textAlign: "justify",
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
});
