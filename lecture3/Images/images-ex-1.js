import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://img.icons8.com/parakeet/48/user.png",
        }}
      />
      <Text>Username</Text>
      <TextInput style={styles.input} placeholder="" />
      <Text>Password</Text>
      <TextInput style={styles.input} secureTextEntry={true} />
      <View style={styles.buttonContainer}>
        <Button style={styles.buttonContainer} title="Submit" />
      </View>
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
    width: 50,
    height: 50,
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    width: 200,
    height: 100,
    margin: 20,
  },
});
