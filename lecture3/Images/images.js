import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>My app</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://img.icons8.com/parakeet/48/user.png",
        }}
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
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
