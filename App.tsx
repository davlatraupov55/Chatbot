import { StyleSheet, View } from "react-native";
import AlertComponent from "./src/components/AlertComponent";
import ErrorComponent from "./src/components/ErrorComponent";
import StackNavigator from "./src/Navigators/StackNavigator";
 

export default function App() {

  return (
    <View style={styles.container}>
      <StackNavigator />
      {/* <AlertComponent/> */}
      {/* <ErrorComponent/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
