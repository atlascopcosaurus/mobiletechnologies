import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
} from "reactnative";
export default function App() {
  const items = [
    {
      key: "1",
      description: "Cheese Burger",
    },
    {
      key: "2",
      description: "Bol 5",
    },
    {
      key: "3",
      description: "Pizza Margherita",
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View key={item.key}>
            <Text style={styles.item}>{item.description}</Text>
          </View>
        )}
      />
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
