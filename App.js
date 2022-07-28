import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Button,
  View,
  TouchableHighlight,
  Image,
  SafeAreaView,
  Alert,
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
      <Button
        title="Click Me"
        onPress={() =>
          Alert.alert("Recipe", "Mac and Cheese", [
            { text: "Yes", onPress: () => console.log("yes") },
            { text: "No", onPress: () => console.log("yes") },
          ])
        }
      />
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
