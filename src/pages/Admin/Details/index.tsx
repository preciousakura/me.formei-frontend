import {
  BorderedContent,
  ScrollContainer,
  DisciplineButtonStyle,
} from "../styles";
import { useTheme } from "../../../hooks/useTheme";
import { CustomizedStatusBar } from "../../../components/layout/CustomizedStatusBar";
import { Header } from "../../../components/layout";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { AdminParamList, AdminProp } from "../../../types/types";
import { H5, Subtitle } from "../../../components/shared/text";
import { Text } from 'react-native';
import {
  Divider,
  HStack,
  Icon,
  VStack,
  useTheme as useThemeNative,
} from "native-base";
import { Entypo } from "@expo/vector-icons";

export function AdminDetails() {
  const { colors } = useThemeNative();
  const { theme } = useTheme();
  // const { params } =
  //   useRoute<RouteProp<AdminParamList, "AdminDetails">>();
  // const navigation = useNavigation<AdminProp>();

  // const values = [
  //   { title: "CARGA HORÁRIA", value: `${params.workload}h` },
  //   {
  //     title: "EMENTA",
  //     value: params.menu ?? "NENHUM",
  //   },
  // ];

  return (
    <ScrollContainer
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <CustomizedStatusBar />
      <Header
        backButton
        colorIcon={theme.colors.text}
        colorText={theme.colors.white}
      />
      <BorderedContent>
        <Text>Detalhes</Text>
      </BorderedContent>
    </ScrollContainer>
  );
}
