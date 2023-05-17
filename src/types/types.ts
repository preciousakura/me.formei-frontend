import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type UserLoginNavigatorParamList = {
  Login: undefined;
  AccountInfo: undefined;
  GeneralInfo: undefined;
  SucessRegister: undefined;
  FailedRegister: undefined;
  Tab: undefined;
};

export type UserLoginNavigationProp =
  NativeStackNavigationProp<UserLoginNavigatorParamList>;


export type TabNavigatorParamList = {
  Início: undefined;
  Horário: undefined;
  Disciplinas: undefined;
  Perfil: undefined;
}

export type TabNavigatorProp = NativeStackNavigationProp<TabNavigatorParamList>;