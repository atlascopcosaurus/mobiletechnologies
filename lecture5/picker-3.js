import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
const dietaryPreferences = [
  {
    label: "Veg",
    images: [
      require("/assets/food/image1.jpg"),
      require("/assets/food/image2.jpg"),
    ],
  },
  {
    label: "Non-Veg",
    images: [
      require("/assets/food/image3.jpg"),
      require("/assets/food/image4.jpg"),
    ],
  },
  {
    label: "Vegan",
    images: [
      require("/assets/food/image5.jpg"),
      require("/assets/food/image6.jpg"),
    ],
  },
];
export default function App() {
  const [preference, setPreference] = useState(dietaryPreferences[0]);
  const handleValueChange = (itemValue, itemIndex) => {
    const selectedPreference = dietaryPreferences.find(
      (p) => p.label === itemValue
    );
    setPreference(selectedPreference);
  };
  return (
    <View style={styles.container}>
      <Text>Choose your dietary preference{"\n\n"}</Text>
      <Picker
        selectedValue={preference.label}
        onValueChange={handleValueChange}
      >
        {dietaryPreferences.map(({ label }) => (
          <Picker.Item key={label} label={label} value={label} />
        ))}
      </Picker>
      <Text>You selected: {preference.label}</Text>
      <View style={styles.imageContainer}>
        {preference.images.map((imageName, index) => (
          <Image key={index} source={imageName} style={styles.image} />
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  imageContainer: {
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 20,
  },
  image: {
    flexDirection: "row",
    width: 100,
    height: 100,
    marginVertical: 10,
  },
});
