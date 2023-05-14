import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import UserLoginNavigator from "./userLogin";

export default function Routes() {
  return (
    <NavigationContainer>
      <UserLoginNavigator />
    </NavigationContainer>
  );
}
