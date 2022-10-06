import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Checkbox from "expo-checkbox";
import { height, width } from "../consts/dimentions";
import { useFonts } from "expo-font";
import { Data } from "../consts/data";
import shortid from "shortid";

export default function RadioButtons() {
  const [isChecked, setChecked] = useState(false);
  const DATA = Data.radio;
  const [fontsLoaded] = useFonts({
    MR: require("../fonts/Manrope-SemiBold.ttf"),
  });
  if (fontsLoaded) {
    return (
      <View>
        {DATA.map((item) => (
          <View style={styles.container} key={shortid.generate()}>
            <View style={styles.messageContainer}>
              <Checkbox
                style={{ height: height / 30, width: height / 30 }}
                value={isChecked}
                onValueChange={setChecked}
              />
              <Text style={[styles.text, { fontFamily: "MR" }]}>
                {item.text}
              </Text>
            </View>
          </View>
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
    marginTop: height / 50,
    borderWidth: 2,
    borderColor: "#2761A4",
    justifyContent: "center",
    alignItems: "center",
  },
  messageContainer: {
    maxWidth: "90%",
    minHeight: height / 29,
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
    marginLeft: width / 30,
  },
});
