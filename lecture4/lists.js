import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
export default function App() {
  const data = [
    {
      id: "1",
      description: "Cheese Burger",
    },
    {
      id: "2",
      description: "Bol 5",
    },
    {
      id: "3",
      description: "Pizza",
    },
  ];
  return (
    <View style={styles.container}>
      {data.map((item) => {
        return (
          <View key={item.id} style={styles.item}>
            <Text>{item.description}</Text>
          </View>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "left",
    justifyContent: "center",
  },
  innerText: {
    textAlign: "justify",
  },
  item: {
    backgroundColor: "lightblue",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
