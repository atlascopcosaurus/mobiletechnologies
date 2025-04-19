import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
export default function App() {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="small" color="green" animating={true} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
