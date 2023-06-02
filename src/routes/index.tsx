import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import UserLoginNavigator from "./userLogin";
import { TabNavigator } from "./tabNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AdditionalHoursNavigator from "./additionalHours";
import PeriodsNavigator from "./periods";
import TeacherNavigator from "./teacher";
import HourNavigator from "./hour";

const Navigation = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigation.Navigator>
        <Navigation.Screen
          name="Account"
          component={UserLoginNavigator}
          options={{ headerShown: false }}
        />
        <Navigation.Screen
          name="Tab"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Navigation.Screen
          name="AdditionalHours"
          component={AdditionalHoursNavigator}
          options={{ headerShown: false }}
        />
        <Navigation.Screen
          name="Periods"
          component={PeriodsNavigator}
          options={{ headerShown: false }}
        />
        <Navigation.Screen
          name="Teacher"
          component={TeacherNavigator}
          options={{ headerShown: false }}
        />
        <Navigation.Screen
          name="Hour"
          component={HourNavigator}
          options={{ headerShown: false }}
        />
      </Navigation.Navigator>
    </NavigationContainer>
  );
}
