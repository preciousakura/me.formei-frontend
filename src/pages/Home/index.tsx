import { Container, Content, TopContent } from "./styles";
import {
  ProgressCourse,
  UserInfo,
  TodayClasses,
} from "../../components/layout";
import { ButtonHomeCard } from "../../components/layout/ButtonHomeCard";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { Button, IIconProps, useColorMode } from "native-base";
import { useTheme } from "../../hooks/useTheme";
import { CustomizedStatusBar } from "../../components/layout/CustomizedStatusBar";

export function Home() {
  const options = [
    {
      name: "Horas complementares",
      icon: MaterialCommunityIcons,
      nameIcon: "timelapse",
      root: "AdditionalHours",
      linkTo: "AdditionalHoursHome",
    },
    {
      name: "Professores",
      icon: Feather,
      nameIcon: "book",
      root: "Teacher",
      linkTo: "TeacherHome",
    },
    {
      name: "Períodos",
      icon: Feather,
      nameIcon: "calendar",
      root: "Periods",
      linkTo: "PeriodsHome",
    },
  ];

  function renderCard(
    item: {
      name: string;
      icon: IIconProps;
      nameIcon: string;
      linkTo: string;
      root: string;
    },
    i: number
  ) {
    return <ButtonHomeCard key={`${item.name}_${i}`} {...item} />;
  }

  const { theme } = useTheme();

  return (
    <Container
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <CustomizedStatusBar backgroundColor={theme.colors.primary[500]} />
      <TopContent>
        <UserInfo />
      </TopContent>
      <Content>
        <ProgressCourse />
        {options.map(renderCard)}
        <TodayClasses />
      </Content>
    </Container>
  );
}
