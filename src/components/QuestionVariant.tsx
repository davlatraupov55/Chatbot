import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { height, width } from "../consts/dimentions";
import { useFonts } from "expo-font";
import { Data } from "../consts/data";
import shortid from "shortid";

export default function QuestionVariant() {
  const DATA = Data.damage;
  const [fontsLoaded] = useFonts({
    MR: require("../fonts/Manrope-SemiBold.ttf"),
  });
  if (fontsLoaded) {
    return (
      <View>
        {DATA.map((item) => (
          <TouchableOpacity
            onPress={() => console.log(item.text)}
            key={shortid.generate()}
            style={styles.opacity}
          >
            <View style={styles.container}>
              <View style={styles.messageContainer}>
                <Text style={[styles.text, { fontFamily: "MR" }]}>
                  {item.text}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    maxWidth: "90%",
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
    maxWidth: "90%",
    alignSelf: "flex-end",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dateView: {
    backgroundColor: "transparent",
    justifyContent: "flex-end",
  },
  text: {
    alignSelf: "flex-start",
    fontSize: width / 22.5,
    color: "#2761A4",
    textAlign: "center",
    fontWeight: "600",
  },
  textDate: {
    fontSize: width / 28.3,
    color: "#5E637A",
    alignSelf: "flex-end",
  },
});
