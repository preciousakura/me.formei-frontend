import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AdminParamList } from "../types/types";
import { AdminList } from "../pages/Admin/List";
import { AdminDetails } from "../pages/Admin/Details";
import {AdminRegister} from "../pages/Admin/Register";

const Admin = createNativeStackNavigator<AdminParamList>();

export default function AdminNavigator() {
  return (
    <Admin.Navigator initialRouteName="AdminList">
      <Admin.Screen
        name="AdminList"
        component={AdminList}
        options={{ headerShown: false }}
      />
      <Admin.Screen
        name="AdminDetails"
        component={AdminDetails}
        options={{ headerShown: false }}
      />
      <Admin.Screen
        name="AdminRegister"
        component={AdminRegister}
        options={{ headerShown: false }}
      />
    </Admin.Navigator>
  );
}
