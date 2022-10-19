import { StyleSheet, Text, View } from "react-native";
import { height, width } from "../consts/dimentions";
import { useFonts } from "expo-font";
import shortid from "shortid";

export default function AnswerComponent(props: any): any {
  const DATA = props.data
  // console.log(DATA)
  const [fontsLoaded] = useFonts({
    MR: require("../fonts/Manrope-SemiBold.ttf"),
  });
  if (fontsLoaded) {
    return (
      <>
      {DATA.map((item: { text: string; date: string | number; isLeft:boolean }) => (
      <View key={shortid.generate()} style={[styles.container, {alignSelf: item.isLeft?"flex-start":"flex-end",  backgroundColor:item.isLeft?"#E3EAF0":"#E5E5E5" }]}>
        <View style={styles.messageContainer}>
          <View style={styles.messageView}>
            <Text style={[styles.text, { fontFamily: "MR" }]}>
              {item.text}
            </Text>
          </View>
          <View style={styles.dateView}>
            <Text style={[styles.textDate, { fontFamily: "MR" }]}>
             {item.date}
            </Text>
          </View>
        </View>
      </View>
      ))}
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    maxWidth: "80%",
    flexDirection: "row",
    paddingHorizontal: 10,
    marginHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 10,
    marginTop: height / 30,
  },
  messageContainer: {
    maxWidth: "150%",
    alignSelf: "flex-start",
    flexDirection: "row",
    paddingRight: 30,
  },
  messageView: {
    backgroundColor: "transparent",
    maxWidth: "200%",
  },
  dateView: {
    backgroundColor: "transparent",
    justifyContent: "flex-start",
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  text: {
    alignSelf: "flex-end",
    fontSize: width / 22.5,
    color: "#363F52",
    textAlign: "left",
    fontWeight: "600",
    paddingRight: 10,
  },
  textDate: {
    fontSize: width / 30.3,
    color: "#5E637A",
    alignSelf: "flex-start",
    position: "relative",
    marginLeft: 10,
  },
});
