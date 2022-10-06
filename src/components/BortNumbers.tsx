import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { height, width } from "../consts/dimentions";
import { Data } from "../consts/data";
import { useFonts } from 'expo-font';
import shortid from "shortid";

export default function BortNumbers() {
  const DATA = Data.bort;
  const [fontsLoaded] = useFonts({
    'MB': require('../fonts/Manrope-Bold.ttf'),
  });
  if(fontsLoaded){
  return (
    <View style={styles.wrap}>
      {DATA.map((item) => (
        <TouchableOpacity
          onPress={() => console.log(item.text)}
          key={shortid.generate()}
          style={styles.opacity}
        >
          <View style={styles.container}>
            <View style={styles.messageContainer}>
              <Text style={[styles.text, {fontFamily: 'MB'}]}>{item.text}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
}

const styles = StyleSheet.create({
  wrap: {
    flexGrow: 1,
    maxHeight: height / 3.5,
    maxWidth: width / 1.35,
    justifyContent: "center",
    flexDirection: "row",
    alignContent: "center",
    flexWrap: "wrap",
    alignSelf: "flex-end",
    marginRight: width / 50,
  },
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    maxWidth: "90%",
    minWidth: "18%",
    alignSelf: "flex-end",
    paddingHorizontal: 10,
    marginHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 10,
    marginTop: height / 50,
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
    fontSize: width / 20.5,
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
