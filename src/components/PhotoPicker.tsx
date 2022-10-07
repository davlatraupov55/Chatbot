import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  PanResponder,
} from "react-native";
import { height, width } from "../consts/dimentions";
import { Data } from "../consts/data";
import { useFonts } from "expo-font";

import shortid from "shortid";

export const PhotoPickerComponent = (props: any) => {
  const [counter, setCounter] = useState(0);
  const [active, setActive] = useState(["0"]);
  const item = props.data;
  const touchHandler = (data: any) => {
    if (active[0] !== data) {
      setActive([data]);
      setCounter(counter + 1);
    } else {
      setActive([]);
      setCounter(counter - 1);
    }
  };

  const [fontsLoaded] = useFonts({
    MB: require("../fonts/Manrope-Bold.ttf"),
  });
  if (fontsLoaded) {
    return (
      <TouchableOpacity
        onPress={() => touchHandler(item.text)}
        style={styles.opacity}
      >
        <View
          style={[
            styles.container,
            {
              alignItems: item.text === "1" ? "center" : "baseline",
              justifyContent: item.text === "1" ? "center" : "flex-start",
            },
          ]}
        >
          <Image
            style={[
              styles.Camera,
              { display: item.text === "1" ? "flex" : "none" },
            ]}
            source={require("../icons/CameraIcon.png")}
          />
          <View
            style={[
              styles.messageContainer,
              {
                display: item.text === "1" ? "none" : "flex",
                backgroundColor: active[0] === item.text ? "white" : "#C4C4C4",
              },
            ]}
          >
            <Text
              style={[
                styles.text,
                {
                  fontFamily: "MB",
                  display: active[0] === item.text ? "flex" : "none",
                },
              ]}
            >
              {counter}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
};

export default class PhotoPicker extends Component {
  panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: this.handlePanResponderMove.bind(this),
  });
  refView: any;

  handlePanResponderMove(e: any, gestureState: { dy: any }) {
    const { dy } = gestureState;
    const y = dy + height / 2.2;
    console.log((y * 100) / height);
    this.refView.setNativeProps({ style: { top: y } });
  }
  render() {
    const DATA = Data.image;

    return (
      <View
        ref={(component: any) => (this.refView = component)}
        style={styles.wrap}
      >
        <View
          style={{
            zIndex: 1,
            marginBottom: height / 50,
            width: width,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            {...this.panResponder.panHandlers}
            style={styles.gesture}
          ></View>
        </View>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            alignContent: "center",
            flexDirection: "row",
            flexWrap: "wrap",
            paddingTop: height / 900,
            paddingBottom: height / 10,
          }}
        >
          {DATA.map((item) => (
            <PhotoPickerComponent data={item} key={shortid.generate()} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    height: height / 1,
    width: width / 1,
    justifyContent: "center",
    flexDirection: "column",
    alignContent: "center",
    marginRight: width / 50,
    position: "absolute",
    backgroundColor: "white",
    bottom: 0,
    left: 0,
    borderRadius: 8,
    paddingTop: height / 90,
    top: height / 2.2,
  },
  container: {
    backgroundColor: "#C4C4C4",
    borderRadius: 8,
    width: width / 3.13,
    height: width / 3.4,
    paddingHorizontal: 10,
    marginHorizontal: width / 200,
    paddingTop: 5,
    paddingBottom: 10,
    marginTop: height / 290,
  },
  opacity: {
    alignSelf: "flex-end",
  },
  messageContainer: {
    minHeight: height / 35,
    minWidth: height / 35,
    borderRadius: height / 40,
    borderWidth: 1,
    borderColor: "white",
    alignSelf: "flex-end",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 0,
  },
  text: {
    alignSelf: "flex-start",
    fontSize: width / 25.5,
    color: "#2761A4",
    textAlign: "center",
    fontWeight: "600",
  },
  Camera: {
    height: height / 25,
    width: height / 22,
  },
  gesture: {
    height: height / 90,
    width: width / 4,
    marginTop: height / 150,
    backgroundColor: "#E4E2E3",
    position: "absolute",
    borderRadius: 5,
    zIndex: 1,
  },
});
