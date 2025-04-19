import React, { useState } from "react";
import { View, Button, ActivityIndicator, StyleSheet } from "react-native";
const MyActivityIndicator = () => {
  const [isLoading, setIsLoading] = useState(false);
  const toggleLoading = () => {
    setIsLoading((prevState) => !prevState);
  };
  return (
    <View style={styles.container}>
      <ActivityIndicator
        animating={isLoading}
        size="large"
        color="#0000ff"
        hidesWhenStopped={true} // This prop hides the activity indicator when it's not animating
      />
      <Button
        title={isLoading ? "Stop Loading" : "Start Loading"}
        onPress={toggleLoading}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default MyActivityIndicator;
