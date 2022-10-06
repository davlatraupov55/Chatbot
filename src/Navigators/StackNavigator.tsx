import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatScreen from "../screens/chatScreen";
import BackButton from "../components/BackButton";
import IgnorButton from "../components/IgnorButton";

const HomeStack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Home"
          options={{
            headerLeft: () => <BackButton />,
            headerStyle: { backgroundColor: "white" },
            headerTitle: "",
            headerRight: () => <IgnorButton />,
          }}
          component={ChatScreen}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
