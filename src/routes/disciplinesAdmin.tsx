import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DisciplineAdminParamList } from "../types/types";
import { DisciplineHome } from "../pages/Discipline/Home";
import { DisciplineAdminList } from "../pages/DisciplineAdmin/List";
import { DisciplineAdminRegister }  from "../pages/DisciplineAdmin/Register";
import { DisciplineAdminDetails } from "../pages/DisciplineAdmin/Details";

const DisciplinesAdmin = createNativeStackNavigator<DisciplineAdminParamList>();

export default function DisciplineAdminNavigator() {
  return (
    <DisciplinesAdmin.Navigator initialRouteName="DisciplineAdminList">
      <DisciplinesAdmin.Screen
        name="DisciplineAdminList"
        component={DisciplineAdminList}
        options={{ headerShown: false }}
      />
      <DisciplinesAdmin.Screen
        name="DisciplineAdminDetails"
        component={DisciplineAdminDetails}
        options={{ headerShown: false }}
      />
      <DisciplinesAdmin.Screen
        name="DisciplineAdminRegister"
        component={DisciplineAdminRegister}
        options={{ headerShown: false }}
      />
    </DisciplinesAdmin.Navigator>
  );
}
