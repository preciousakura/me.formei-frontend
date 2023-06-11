import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../pages/Home";
import { DisciplineHome } from "../pages/Discipline/Home";
import { ProfileHome } from "../pages/Profile/Home";
import { TabAdminNavigatorParamList } from "../types/types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Dimensions, Platform } from "react-native";
import { useTheme } from "styled-components";
import { HourHome } from "../pages/Hour/Home";
import { UsersHome } from "../pages/Users/Home";

const Tab = createBottomTabNavigator<TabAdminNavigatorParamList>();

const height = Platform.OS === "ios" ? 20 : 0;
const tabSize = Dimensions.get("screen").height * 0.08;

export function TabAdminNavigator() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary[500],
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelStyle: {
          fontFamily: "Nunito-Bold",
          fontSize: 14,
          marginBottom: 5,
        },
        tabBarStyle: {
          height: tabSize + height,
          backgroundColor: theme.colors.background,
        },
        tabBarItemStyle: {
          height: tabSize,
          alignItems: "center",
          justifyContent: "space-between",
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
              color={
                props.focused ? theme.colors.primary[500] : theme.colors.text
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Disciplinas"
        component={DisciplineHome}
        options={{
          headerShown: false,
          tabBarIcon: (props) => (
            <MaterialCommunityIcons
              name="book-open-outline"
              size={tabSize * 0.5}
              color={
                props.focused ? theme.colors.primary[500] : theme.colors.text
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Usuários"
        component={DisciplineHome}
        options={{
          headerShown: false,
          tabBarIcon: (props) => (
            <MaterialCommunityIcons
              name="message-outline"
              size={tabSize * 0.5}
              color={
                props.focused ? theme.colors.primary[500] : theme.colors.text
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileHome}
        options={{
          headerShown: false,
          tabBarIcon: (props) => (
            <MaterialCommunityIcons
              name="account-outline"
              size={tabSize * 0.5}
              color={
                props.focused ? theme.colors.primary[500] : theme.colors.text
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
