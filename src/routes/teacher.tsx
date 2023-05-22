import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TeacherParamList } from "../types/types";
import { TeacherHome } from "../pages/Teacher/Home";
import { TeacherRegister } from "../pages/Teacher/Register";
import { TeacherEdit } from "../pages/Teacher/Edit";

const Teacher = createNativeStackNavigator<TeacherParamList>();

export default function TeacherNavigator() {
  return (
    <Teacher.Navigator initialRouteName="TeacherHome">
      <Teacher.Screen
        name="TeacherHome"
        component={TeacherHome}
        options={{ headerShown: false }}
      />
      <Teacher.Screen
        name="TeacherRegister"
        component={TeacherRegister}
        options={{ headerShown: false }}
      />
      <Teacher.Screen
        name="TeacherEdit"
        component={TeacherEdit}
        options={{ headerShown: false }}
      />
    </Teacher.Navigator>
  );
}
