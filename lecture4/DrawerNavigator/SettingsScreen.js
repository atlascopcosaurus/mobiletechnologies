import { StyleSheet, Text, View, Button } from "react-native";
export default function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
      <Button
        title="Go to Dashboard Screen"
        onPress={() =>
          navigation.navigate("DashboardScreen", {
            result: "Received from Setting",
          })
        }
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
