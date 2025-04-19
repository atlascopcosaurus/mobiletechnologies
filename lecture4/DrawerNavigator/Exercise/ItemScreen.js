import React, { useState } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import Checkbox from "expo-checkbox";
export default function ItemScreen({ navigation }) {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const price1 = 100; // price of product
  const price2 = 200; // price of product
  const toggleCheckBox1 = () => {
    setIsChecked1(!isChecked1);
  };
  const toggleCheckBox2 = () => {
    setIsChecked2(!isChecked2);
  };
  return (
    <View style={styles.container}>
      <Text>Rs 100 Burger{"\n"}</Text>
      <Checkbox value={isChecked1} onValueChange={toggleCheckBox1} />
      <Text>
        {isChecked1 ? "Checked" : "Unchecked"}
        {"\n"}
      </Text>
      <Text>Rs 200 Burger{"\n"}</Text>
      <Checkbox value={isChecked2} onValueChange={toggleCheckBox2} />
      <Text>
        {isChecked2 ? "Checked" : "Unchecked"}
        {"\n"}
      </Text>
      <Button
        color="orange"
        title="Proceed to My Cart"
        onPress={() =>
          navigation.navigate("MyCart", {
            isChecked1,
            isChecked2,
            price1,
            price2,
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
