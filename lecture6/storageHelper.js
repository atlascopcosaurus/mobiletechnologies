import AsyncStorage from "@react-native-async-storage/async-storage";

// Function to store data
export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log("Error Storing data", error);
  }
};

// Function to get the item
export const getItemFor = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.log("Error Storing data", error);
  }
};
