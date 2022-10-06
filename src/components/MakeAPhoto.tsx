import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { height, width } from "../consts/dimentions";
import { useFonts } from "expo-font";

export default function MakeAPhoto() {
  const [fontsLoaded] = useFonts({
    MR: require("../fonts/Manrope-SemiBold.ttf"),
  });
  if (fontsLoaded) {
    return (
      <TouchableOpacity style={styles.opacity}>
        <View style={styles.container}>
          <View style={styles.messageContainer}>
            <Image
              style={{
                height: height / 35,
                width: height / 28,
                marginRight: 10,
              }}
              source={require("../icons/camera.png")}
            />
            <Text style={[styles.text, { fontFamily: "MR" }]}>
              Сделать фото
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    maxWidth: "80%",
    alignSelf: "flex-end",
    flexDirection: "row",
    paddingHorizontal: 10,
    marginHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 10,
    marginTop: height / 30,
    borderWidth: 2,
    borderColor: "#2761A4",
  },
  opacity: {
    alignSelf: "flex-end",
  },
  messageContainer: {
    maxWidth: "80%",
    alignSelf: "flex-end",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    alignSelf: "flex-start",
    fontSize: width / 22.5,
    color: "#2761A4",
    textAlign: "center",
    fontWeight: "600",
  },
});
