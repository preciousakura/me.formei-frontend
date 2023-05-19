import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../pages/Home";
import { Hour } from "../pages/Hour";
import { Discipline } from "../pages/Discipline";
import { Profile } from "../pages/Profile";
import { TabNavigatorParamList } from "../types/types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { useTheme } from "styled-components";

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

const tabSize = Dimensions.get('screen').height * 0.08

export function TabNavigator() {
  const theme = useTheme()
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.color.primaryColor,
        tabBarInactiveTintColor: theme.color.text,
        tabBarLabelStyle: {
          fontFamily: "Nunito-Bold",
          fontSize: tabSize * 0.2,
          paddingBottom: 5,
        },
        tabBarStyle: {
          height: tabSize,
          backgroundColor: theme.color.background
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
              color={props.focused ? theme.color.primaryColor : theme.color.text}
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
              color={props.focused ? theme.color.primaryColor : theme.color.text}
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
              color={props.focused ? theme.color.primaryColor : theme.color.text}
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
              color={props.focused ? theme.color.primaryColor : theme.color.text}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
