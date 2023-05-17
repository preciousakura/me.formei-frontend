import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import UserLoginNavigator from "./userLogin";
import { TabNavigator } from "./tabNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Navigation = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigation.Navigator>
        <Navigation.Screen name="Account" component={UserLoginNavigator} options={{ headerShown: false }} />
        <Navigation.Screen name="Tab" component={TabNavigator} options={{ headerShown: false }}/>
      </Navigation.Navigator>
    </NavigationContainer>
  );
}
