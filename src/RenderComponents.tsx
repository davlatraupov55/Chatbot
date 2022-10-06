import { Send, InputToolbar } from "react-native-gifted-chat";
import { Image } from "react-native";
import { height, width } from "./consts/dimentions";

export const renderSend = (props: any) => {
  return (
    <Send {...props}>
      <Image
        style={{
          height: height / 28,
          width: height / 22,
          marginBottom: height / 90,
          marginRight: width / 40,
        }}
        source={require("./icons/send.png")}
      />
    </Send>
  );
};

export const renderInputToolbar = (props: any) => {
  return (
    <InputToolbar
      {...props}
      containerStyle={{
        backgroundColor: "#F0F0F0",
        borderTopColor: "#E8E8E8",
        borderTopWidth: 0,
        borderRadius: 8,
      }}
      primaryStyle={{
        padding: height / 200,
      }}
      textInputStyle={{
        color: "#5E637A",
        fontSize: width / 20.3,
        paddingLeft: width / 50,
      }}
    />
  );
};
