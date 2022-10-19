import { StyleSheet, TouchableOpacity, Image, View } from "react-native";
import { height } from "../consts/dimentions";
import { clearMessage } from "../redux/reducer";
import { useDispatch } from "react-redux";

export default function IgnorButton() {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>dispatch(clearMessage())} >
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
