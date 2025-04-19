import { StyleSheet, Text, View, Button, Modal, Image } from "react-native";
import { useState } from "react";
export default function App() {
  const logoImg = require("/assets/1.jpg");
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Button
        title="Chicken Salad"
        onPress={() => setIsModalVisible(true)}
        color="midnightblue"
      />
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="none"
      >
        <View style={styles.modal}>
          <View style={{ flex: 1, backgroundColor: "", alignItems: "center" }}>
            <Image source={logoImg} style={{ width: 100, height: 100 }} />
          </View>
          <View style={{ flex: 1, backgroundColor: "", padding: 10 }}>
            <Text>
              Calories : 400{"\n\n"}
              Ingredients : Chicken, Lettuce, Eggs, Olive and Cheese Modal
              Content{"\n\n"}
            </Text>
          </View>
        </View>
        <Button
          title="Close"
          onPress={() => setIsModalVisible(false)}
          color="midnightblue"
        />
      </Modal>
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
  modal: {
    flexDirection: "row",
    backgroundColor: "",
    alignItems: "center",
    justifyContent: "center",
  },
});
