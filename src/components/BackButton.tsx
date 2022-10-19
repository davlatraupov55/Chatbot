import { StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";
import { height, width } from "../consts/dimentions";
import { useFonts } from "expo-font";

export default function BackButton():any {
  const [fontsLoaded] = useFonts({
    MR: require("../fonts/Manrope-SemiBold.ttf"),
  });
  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.container}>
          <Image
            style={styles.icon}
            source={require("../icons/backIcon.png")}
          />
          <Text style={[styles.text, { fontFamily: "MR" }]}>Назад</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  icon: {
    height: height / 25,
    width: height / 45,
  },
  text: {
    fontSize: width / 18,
    marginLeft: width / 70,
    color: "#5E637A",
  },
});
