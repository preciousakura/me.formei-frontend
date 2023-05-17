import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../pages/Home";
import { Hour } from "../pages/Hour";
import { Discipline } from "../pages/Discipline";
import { Profile } from "../pages/Profile";
import { TabNavigatorParamList } from "../types/types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

const tabSize = Dimensions.get('screen').height * 0.08

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#277BC0",
        tabBarInactiveTintColor: "#2C3333",
        tabBarLabelStyle: {
          fontFamily: "Nunito-Bold",
          fontSize: tabSize * 0.2,
          paddingBottom: 5,
        },
        tabBarStyle: {
          height: tabSize,
        },
      }}
    >
      <Tab.Screen
        name="Início"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: (props) => (
            <MaterialCommunityIcons
              name="home-outline"
              size={tabSize * 0.5}
              color={props.focused ? "#277BC0" : "#2C3333"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Disciplinas"
        component={Discipline}
        options={{
          headerShown: false,
          tabBarIcon: (props) => (
            <MaterialCommunityIcons
              name="book-open-outline"
              size={tabSize * 0.5}
              color={props.focused ? "#277BC0" : "#2C3333"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Horário"
        component={Hour}
        options={{
          headerShown: false,
          tabBarIcon: (props) => (
            <MaterialCommunityIcons
              name="clock-time-four-outline"
              size={tabSize * 0.5}
              color={props.focused ? "#277BC0" : "#2C3333"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: (props) => (
            <MaterialCommunityIcons
              name="account-outline"
              size={tabSize * 0.5}
              color={props.focused ? "#277BC0" : "#2C3333"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
