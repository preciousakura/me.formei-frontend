import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type UserLoginNavigatorParamList = {
  Login: undefined;
  Register: undefined;
};

export type HomeScreenNavigationProp =
  NativeStackNavigationProp<UserLoginNavigatorParamList>;
