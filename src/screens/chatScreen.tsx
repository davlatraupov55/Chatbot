import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import AnswerComponent from "../components/AnswerComponent";
import { renderSend, renderInputToolbar } from "../RenderComponents";
import { height, width } from "../consts/dimentions";
import { Data } from "../consts/data";
import { useFonts } from "expo-font";
import { BlurView } from "expo-blur";
import shortid from "shortid";

export default function ChatScreen() {
  const [messages, setMessages] = useState([{}]);
  const DATA = Data.damage;
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "",
          avatar: "",
        },
      },
      {
        _id: 2,
        text: "Вы хотите сообщить о неисправности?",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "",
          avatar: "",
        },
      },
    ]);
  }, []);

  const QuestionVariant = (props: any) => {
    const Click = (text: string) => {};
    const [fontsLoaded] = useFonts({
      MR: require("../fonts/Manrope-SemiBold.ttf"),
    });
    if (fontsLoaded) {
      return (
        <View>
          {DATA.map((item) => (
            <TouchableOpacity
              onPress={() => Click(item.text)}
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
  };

  const QuestionComponent = (props: any) => {
    const time = props.currentMessage.createdAt.toString();

    const [fontsLoaded] = useFonts({
      MR: require("../fonts/Manrope-SemiBold.ttf"),
    });
    if (fontsLoaded) {
      return (
        <View style={styles.Qcontainer}>
          <View style={styles.QmessageContainer}>
            <View style={styles.QmessageView}>
              <Text style={[styles.Qtext, { fontFamily: "MR" }]}>
                {props.currentMessage.text}
              </Text>
            </View>
            <View style={styles.QdateView}>
              <Text style={[styles.QtextDate, { fontFamily: "MR" }]}>
                {time.slice(15, 21)}
              </Text>
            </View>
          </View>
        </View>
      );
    }
  };

  const buble = (props: any) => {
    if (props.currentMessage.user._id === 2) {
      return <AnswerComponent {...props} />;
    }
    return props.currentMessage._id === 1 ? (
      <QuestionVariant {...props.currentMessage} />
    ) : (
      <QuestionComponent {...props} />
    );
  };

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    // <BlurView intensity={100}>
    <View
      style={{
        height: height,
        width: width,
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{ _id: 1 }}
        renderBubble={buble}
        alwaysShowSend
        renderSend={renderSend}
        renderInputToolbar={(props) => renderInputToolbar(props)}
        messagesContainerStyle={{ backgroundColor: "white" }}
        renderAvatar={null}
        minInputToolbarHeight={height / 8}
        placeholder={"Сообщение..."}
      />
    </View>
    // </BlurView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    maxWidth: "95%",
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
  Qcontainer: {
    backgroundColor: "#E3EAF0",
    borderRadius: 8,
    maxWidth: "100%",
    alignSelf: "flex-end",
    flexDirection: "row",
    paddingHorizontal: 10,
    marginHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 10,
    marginTop: height / 30,
  },
  QmessageContainer: {
    maxWidth: "95%",
    alignSelf: "flex-end",
    flexDirection: "row",
  },
  QmessageView: {
    backgroundColor: "transparent",
    maxWidth: "90%",
  },
  QdateView: {
    backgroundColor: "transparent",
    justifyContent: "flex-end",
    paddingLeft: 5,
  },
  Qtext: {
    alignSelf: "flex-start",
    fontSize: width / 22.5,
    color: "#363F52",
    textAlign: "left",
    fontWeight: "600",
  },
  QtextDate: {
    fontSize: width / 28.3,
    color: "#5E637A",
    alignSelf: "flex-end",
  },
});
