import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
export default function App() {
  return (
    <View style={[styles.container, styles.horizontal]}>
      {/*hidesWhenStopped set to true/false whether the indicator should hide
when not animating */}
      <ActivityIndicator
        size="large"
        color="green"
        animating={false}
        hidesWhenStopped={false}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
