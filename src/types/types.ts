import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type UserLoginNavigatorParamList = {
  Login: undefined;
  AccountInfo: undefined;
  GeneralInfo: undefined;
  SucessRegister: undefined;
  FailedRegister: undefined;
};

export type UserLoginNavigationProp =
  NativeStackNavigationProp<UserLoginNavigatorParamList>;
