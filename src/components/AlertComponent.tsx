import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { height, width } from "../consts/dimentions";
import { useFonts } from "expo-font";

export default function AlertComponent() {
  const [fontsLoaded] = useFonts({
    MB: require("../fonts/Manrope-Bold.ttf"),
    MR: require("../fonts/Manrope-Regular.ttf"),
  });
  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <View style={styles.titleWrap}>
          <View style={styles.circle}>
            <Text
              style={{
                color: "#2761A4",
                fontSize: width / 18.5,
                fontWeight: "bold",
              }}
            >
              !
            </Text>
          </View>
          <Text style={[styles.title, { fontFamily: "MB" }]}>
            Подтвердите действие
          </Text>
        </View>
        <View style={styles.messageContainer}>
          <Text style={[styles.text, { fontFamily: "MR" }]}>
            Пожалуйста, выберите один из вариантов
          </Text>
        </View>

        <View style={styles.wrap}>
          <TouchableOpacity>
            <View style={styles.cancel}>
              <Text style={[styles.variantText, { fontFamily: "MB" }]}>
                Отмена
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.confirm}>
              <Text style={[styles.variantText, { fontFamily: "MB" }]}>
                Подтвердить
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    top: height / 2.5,
    left: width / 9,
    borderRadius: 8,
    width: width / 1.3,
    height: height / 4,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    height: height / 25,
    width: height / 25,
    backgroundColor: "#E3EAF0",
    borderRadius: height / 25,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#CEE2FF",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
  titleWrap: {
    flexDirection: "row",
  },
  title: {
    fontSize: width / 22,
    fontWeight: "600",
    marginLeft: width / 40,
    marginTop: height / 400,
    color: "#363F52",
  },
  messageContainer: {
    maxWidth: "82%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: height / 50,
  },
  text: {
    fontSize: width / 22.5,
    color: "#5C6880",
    textAlign: "left",
    fontWeight: "600",
  },
  wrap: {
    flexDirection: "row",
    marginTop: height / 40,
  },
  cancel: {
    height: height / 20,
    width: width / 4,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#2761A4",
    justifyContent: "center",
    alignItems: "center",
  },
  confirm: {
    height: height / 20,
    width: width / 3.1,
    borderRadius: 8,
    backgroundColor: "#E3EAF0",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: width / 15,
  },
  variantText: {
    fontSize: width / 23,
    color: "#5C6880",
    textAlign: "left",
    fontWeight: "600",
  },
});
