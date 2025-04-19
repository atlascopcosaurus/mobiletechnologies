import { StyleSheet, Text, View, Button, Modal } from "react-native";
import { useState } from "react";
export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Text>Touch to display Modal</Text>
      <Button
        title="Press"
        onPress={() => setIsModalVisible(true)}
        color="blue"
      />
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="none"
      >
        <View style={styles.modal}>
          <Text>Modal Content</Text>
          <Button
            title="Close"
            onPress={() => setIsModalVisible(false)}
            color="midnightblue"
          />
        </View>
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
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    padding: 60,
  },
});
