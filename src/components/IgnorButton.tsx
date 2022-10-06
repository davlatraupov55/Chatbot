import { StyleSheet, TouchableOpacity, Image, View } from "react-native";
import { height } from "../consts/dimentions";

export default function IgnorButton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.icon} source={require("../icons/ignorIcon.png")} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  icon: {
    height: height / 28,
    width: height / 28,
  },
});
