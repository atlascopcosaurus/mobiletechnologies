import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

const html =
  '<meta name="viewport" content="width=device-width"><h1>Hello World</h1>';

export default function App() {
  return (
    <View style={styles.container}>
      <WebView
        style={styles.WebView}
        originWhitelist={["*"]}
        source={{ html }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  WebView: {
    flex: 1,
  },
});
