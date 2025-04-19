import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { storeData, getItemFor } from "./storageHelper";
import { useEffect, useState } from "react";

const HAS_LAUNCHED = "HAS_LAUNCHED"; //constant stored in async-storage

export default function App() {
  const [hasLaunched, setHasLaunched] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const hasLaunched = await getItemFor(HAS_LAUNCHED);
      if (hasLaunched) {
        setHasLaunched(true);
      } else {
        await storeData(HAS_LAUNCHED, "true");
      }
    };

    getData().catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>
        {hasLaunched
          ? "Welcome Back"
          : "Welcome! First time launching this application"}
        {"\n"}
      </Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://img.icons8.com/?size=100&id=GgyRdUL5k1fr&format=png&color=000000",
        }}
      />

      <StatusBar style="auto" />
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

  tinyLogo: {
    width: 100,
    height: 100,
  },
});
