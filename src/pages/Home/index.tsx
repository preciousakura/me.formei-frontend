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

export function Home() {
  const options = [
    {
      name: "Horas complementares",
      icon: MaterialCommunityIcons,
      nameIcon: "timelapse",
      linkTo: "AdditionalHours",
    },
    {
      name: "Professores",
      icon: Feather,
      nameIcon: "book",
      linkTo: "Teacher",
    },
    {
      name: "Períodos",
      icon: Feather,
      nameIcon: "calendar",
      linkTo: "Periods",
    },
  ];

  function renderCard(
    item: { name: string; icon: IIconProps; nameIcon: string; linkTo: string },
    i: number
  ) {
    return <ButtonHomeCard key={`${item.name}_${i}`} {...item} />;
  }

  const { toggleColorMode } = useTheme();

  return (
    <Container
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <Button onPress={toggleColorMode}>Trocar</Button>
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
