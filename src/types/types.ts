import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AdditionalHour } from "AdditionalHours";
import { Discipline } from "Discipline";
import { AccountInfo } from "User";
import { AdminParam } from "User";

export type UserLoginNavigatorParamList = {
  Login: undefined;
  AccountInfo: undefined;
  GeneralInfo: AccountInfo;
  SucessRegister: undefined;
  FailedRegister: undefined;
  Tab: undefined;
  TabAdmin: undefined;
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

export type TabAdminNavigatorParamList = {
  Início: undefined;
  Disciplinas: undefined;
  Perfil: undefined;
  Admins: undefined;
};

export type TabAdminNavigatorProp = NativeStackNavigationProp<TabAdminNavigatorParamList>;

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

export type HourParamList = {
  HourHome: undefined;
  HoursList: undefined;
};

export type HourProp = NativeStackNavigationProp<HourParamList>;

export type DisciplineAdminParamList = {
  DisciplineAdminDetails: Discipline;
  DisciplineAdminList: undefined;
  DisciplineAdminRegister: undefined;
};

export type DisciplineAdminProp = NativeStackNavigationProp<DisciplineAdminParamList>;

export type DisciplineParamList = {
  DisciplineHome: undefined;
  ListAvailable: undefined;
  FormationPlan: undefined;
  DisciplineDetails: Discipline;
  DisciplineRegister: undefined;
};

export type DisciplineProp = NativeStackNavigationProp<DisciplineParamList>;

export type ProfileParamList = {
  ProfileHome: undefined;
  ProfileRegister: undefined;
  ProfileEdit: undefined;
};

export type ProfileProp = NativeStackNavigationProp<ProfileParamList>;

export type AdminParamList = {
  AdminList: undefined;
  AdminDetails: AdminParam;
  AdminRegister: undefined;
};

export type AdminProp = NativeStackNavigationProp<AdminParamList>;
