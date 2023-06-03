import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AdditionalHour } from "AdditionalHours";

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
};

export type TabNavigatorProp = NativeStackNavigationProp<TabNavigatorParamList>;

export type AdditionalHoursParamList = {
  AdditionalHoursHome: undefined;
  AdditionalHoursRegister: undefined;
  AdditionalHoursEdit: AdditionalHour;
  AdditionalHoursDetails: AdditionalHour;
};

export type AdditionalHoursProp =
  NativeStackNavigationProp<AdditionalHoursParamList>;

export type PeriodsParamList = {
  PeriodsHome: undefined;
  PeriodsRegister: undefined;
  PeriodsEdit: undefined;
};

export type PeriodsProp = NativeStackNavigationProp<AdditionalHoursParamList>;

export type TeacherParamList = {
  TeacherHome: undefined;
  TeacherRegister: undefined;
  TeacherEdit: undefined;
};

export type TeacherProp = NativeStackNavigationProp<AdditionalHoursParamList>;

export type HourParamList = {
  HourHome: undefined;
};

export type HourProp = NativeStackNavigationProp<AdditionalHoursParamList>;

export type DisciplineParamList = {
  DisciplineHome: undefined;
  DisciplineRegister: undefined;
  DisciplineEdit: undefined;
};

export type DisciplineProp = NativeStackNavigationProp<DisciplineParamList>;

export type ProfileParamList = {
  ProfileHome: undefined;
  ProfileRegister: undefined;
  ProfileEdit: undefined;
};

export type ProfileProp = NativeStackNavigationProp<ProfileParamList>;
