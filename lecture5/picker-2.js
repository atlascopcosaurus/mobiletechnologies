import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";

const dietaryPreferences = ["Veg", "Non-Veg", "Vegan"];
export default function App() {
  {
    /*the state preference will store the currently selected dietary preference from the picker*/
  }
  const [preference, setPrefrence] = useState("Veg");
  const handleValueChange = (itemValue, itemIndex) => setPrefrence(itemValue);
  return (
    <View style={styles.container}>
      <Text>Choose your dietary preference{"\n\n"}</Text>
      {/* maps over the dietaryPreferences array, which contains the options "Veg", "Non-Veg", and "Vegan" */}
      <Picker selectedValue={preference} onValueChange={handleValueChange}>
        {dietaryPreferences.map((preference) => (
          <Picker.Item key={preference} label={preference} value={preference} />
        ))}
      </Picker>
      <Text> You selected {preference} </Text>
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
