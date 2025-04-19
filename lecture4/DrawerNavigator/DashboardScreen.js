import { StyleSheet, Text, View } from "react-native";
export default function DashboardScreen({ route }) {
  return (
    <View style={styles.container}>
      <Text>Dashboard Screen</Text>
      <Text>
        {"\n"}Received = {route.params?.result}
      </Text>
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
