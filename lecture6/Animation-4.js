import { StyleSheet, Text, View, Animated, Pressable } from "react-native";
import React, { useState } from "react";
import { Marquee } from "@animatereactnative/marquee";
export default function App() {
  return (
    <View style={styles.container}>
      <Marquee spacing={100} speed={1}>
        <Text>Using Animation Libraries</Text>
      </Marquee>
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
