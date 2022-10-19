import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { height, width } from "../consts/dimentions";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../redux/reducer";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import AnswerComponent from "../components/AnswerComponent";
import shortid from "shortid";
import moment from 'moment';


export default function ChatScreen() {

 const message =  useSelector((state: any) => state.message)

  const [text, setText] = useState("");

  const [Messages, setMessages] = useState(message.message);
  useEffect(()=> {
    setMessages(message.message)
  })

  const dispatch = useDispatch();

  const handlePress = () => {
    setText('')
    const sendMessage = {
      last_name: "davlat",
      first_name: "raupov",
      userId: shortid.generate(),
      messageId: shortid.generate(),
      text: text,
      isLeft: false,
      date: moment().format('h:mm')
    };
    dispatch(setMessage(sendMessage));
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{marginBottom: height/35}} contentContainerStyle={{paddingBottom: height/50}}>
<AnswerComponent data={Messages} />
</ScrollView>
      <TextInput
        style={styles.textinput}
        value={text}
        placeholder={"Сообщение..."}
        placeholderTextColor={"#8997A8"}
        onChangeText={(typed) => setText(typed)}
        multiline={true}
      />
   
      <TouchableOpacity
        onPress={() => handlePress()}
        style={{
          height: width/15.5,
          width: width/12,
          bottom: height/26,
          right: width/17,
          position: "absolute",
          display: text===''?'none':'flex'
        }}
      >
       <Image style={{height: width/15.5, width: width/12, position: 'relative'}} source={require('../icons/send.png')} /> 
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  textinput: {
    height: height / 15,
    paddingLeft: width / 50,
    paddingRight: width / 10,
    width: width - width / 12,
    backgroundColor: "#D6D6D7",
    borderRadius: 6,
    position: "relative",
    bottom: height / 50,
    color: "#8997A8",
    fontSize: width/20,
    left: width/25
  },
});
