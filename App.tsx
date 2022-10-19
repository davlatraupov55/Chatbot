import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import StackNavigator from "./src/Navigators/StackNavigator";
import { store } from "./src/redux/store";

  

export default function App() {

  return (
<Provider store={store}>
      <StackNavigator />
</Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
