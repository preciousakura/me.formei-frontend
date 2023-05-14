import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { UserLoginNavigatorParamList } from "../types/types";

const UserLogin = createNativeStackNavigator<UserLoginNavigatorParamList>();

export default function UserLoginNavigator () {
  return (
      <UserLogin.Navigator>
        <UserLogin.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <UserLogin.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
      </UserLogin.Navigator>
  );
}
