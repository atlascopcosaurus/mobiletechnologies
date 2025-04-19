import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text>Item 1</Text>
      </View>
      <View style={styles.item}>
        <Text>Item 2</Text>
      </View>
      <View style={styles.item}>
        <Text>Item 3</Text>
      </View>
      <View style={styles.item}>
        <Text>Item 4</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
  },
  item: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
