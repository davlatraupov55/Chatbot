import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { height, width } from "../consts/dimentions";
import { Data } from "../consts/data";
import { useFonts } from 'expo-font';
import shortid from "shortid";
import { MotiView, MotiText } from 'moti'

const PhotoPickerComponent = (props:any) => {
  const [counter, setCounter] = useState(0)
  const [active, setActive] = useState(['0'])
  const item = props.data;
  const touchHandler = (data:any) => {
    if(active[0] !== data){
setActive([data])
setCounter(counter+1)
    }else{
    setActive([])
    setCounter(counter-1)
    }
  } 

  const [fontsLoaded] = useFonts({
    'MB': require('../fonts/Manrope-Bold.ttf'),
  });
  if(fontsLoaded){
  return(
  <TouchableOpacity
  onPress={() => touchHandler(item.text)}
  style={styles.opacity}
>
  <View style={[styles.container, {alignItems: item.text==='1' ? 'center' : 'baseline', justifyContent: item.text==='1' ? 'center' : 'flex-start' }]}>
  <Image style={[styles.Camera, {display: item.text==='1' ? 'flex' :'none'}]} source={require('../icons/CameraIcon.png')} />
    <View style={[styles.messageContainer, {display: item.text==='1' ? 'none' :'flex',  backgroundColor: active[0]===item.text ? 'white' : '#C4C4C4' }]}>
      <Text style={[styles.text, {fontFamily: 'MB', display: active[0]===item.text ? 'flex' : 'none'}]}>{counter}</Text>
    </View>
  </View>
</TouchableOpacity>
  )
}
}


export default function PhotoPicker() {
  const DATA = Data.image;
  return (
    <View style={styles.wrap}>
      <View style={styles.gesture} ></View>
      {DATA.map((item) => (
<PhotoPickerComponent data={item} key={shortid.generate()} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexGrow: 1,
    height: height /2.15,
    width: width / 1,
    justifyContent: "center",
    flexDirection: "row",
    alignContent: "center",
    flexWrap: "wrap",
    marginRight: width / 50,
    position: 'absolute',
    backgroundColor: 'white',
    bottom: 0,
    left: 0,
    borderRadius: 8

  },
  container: {
    backgroundColor: "#C4C4C4",
    borderRadius: 8,
    width: width/3.2,
    height: width/3.4,
    paddingHorizontal: 10,
    marginHorizontal: width/200,
    paddingTop: 5,
    paddingBottom: 10,
    marginTop: height/290,
  },
  opacity: {
    alignSelf: "flex-end",
  },
  messageContainer: {
    height: height/35,
    width: height/35,
    borderRadius: height/40,
    borderWidth: 1,
    borderColor: 'white',
    alignSelf: "flex-end",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    alignSelf: "flex-start",
    fontSize: width / 25.5,
    color: "#2761A4",
    textAlign: "center",
    fontWeight: "600",
  },
  Camera: {
    height: height/25,
    width: height/22
  },
  gesture: {
    height: height/150, 
    width: width/4, 
    backgroundColor: '#E4E2E3',  
    position: 'absolute', 
    top: height/195, 
    left: width/2.7, 
    borderRadius: 5
  }
});



// const touchHandler = (data:string) => {
//   console.log(active)
// for(let a of active){
//   if(data == a){
//     active.splice(a, 1);
//     console.log('isActive')
//   }else{
//     console.log('notActive')
//    setCounter(counter+1)
//   }
// }
// }
