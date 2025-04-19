import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
export default function App() {
  {
    /*the state selectedValue will store the currently selected value
preference from the picker*/
  }
  const [selectedValue, setSelectedValue] = useState("Veg");
  return (
    <View style={styles.container}>
      <Text>Choose your dietary preference{"\n\n"}</Text>
      {/*When the selected value changes, it updates the selectedValue state
using the onValueChange callback. */}
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item key="Veg" label="Veg" value="veg" />
        <Picker.Item key="Non-Veg" label="Non-Veg" value="non-veg" />
        <Picker.Item key="Vegan" label="Vegan" value="vegan" />
      </Picker>
      <Text> You selected {selectedValue} </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
