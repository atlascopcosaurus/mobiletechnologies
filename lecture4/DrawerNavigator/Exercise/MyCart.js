import { StyleSheet, View, Button, Text, Alert } from "react-native";
export default function MyCart({ navigation, route }) {
  const isChecked1 = route.params ? route.params.isChecked1 : false;
  const isChecked2 = route.params ? route.params.isChecked2 : false;
  const price1 = route.params ? route.params.price1 : 0;
  const price2 = route.params ? route.params.price2 : 0;
  //Calculate total
  const total = (isChecked1 ? price1 : 0) + (isChecked2 ? price2 : 0);
  return (
    <View style={styles.container}>
      <Text>My Cart{"\n"}</Text>
      <Text>Selected Item Rs {total} </Text>
      <Button
        title="Proceed to Checkout"
        color="orange"
        onPress={() => Alert.alert("Items submitted")}
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
