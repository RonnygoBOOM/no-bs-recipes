import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  SafeAreaView,
} from "react-native";

export default function App() {
  // debug using console.log, but remove for production to prevent them from slowing down your app
  //console.log("app executed");
  let x = 1;
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TouchableHighlight onPress={() => console.log("tapped")}>
        <Image
          source={{
            width: 200,
            height: 200,
            uri: "https://picsum.photos/200/200",
          }}
        />
      </TouchableHighlight>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
