import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DisciplineAdminParamList } from "../types/types";
import { DisciplineHome } from "../pages/Discipline/Home";
import { ListDisciplineAdmin } from "../pages/DisciplineAdmin/ListDisciplineAdmin";
import  AddDisciplineAdmin  from "../pages/DisciplineAdmin/AddDisciplineAdmin";
import { DisciplineDetails } from "../pages/Discipline/Details";

const DisciplineAdmin = createNativeStackNavigator<DisciplineAdminParamList>();

export default function DisciplineAdminNavigator() {
  return (
    <DisciplineAdmin.Navigator initialRouteName="DisciplineHomeAdmin">
      <DisciplineAdmin.Screen
        name="DisciplineHomeAdmin"
        component={DisciplineHome}
        options={{ headerShown: false }}
      />
      <DisciplineAdmin.Screen
        name="ListDisciplineAdmin"
        component={ListDisciplineAdmin}
        options={{ headerShown: false }}
      />
      <DisciplineAdmin.Screen
        name="DisciplineDetails"
        component={DisciplineDetails}
        options={{ headerShown: false }}
      />
       <DisciplineAdmin.Screen
        name="AddDisciplineAdmin"
        component={AddDisciplineAdmin}
        options={{ headerShown: false }}
      />
    </DisciplineAdmin.Navigator>
  );
}
