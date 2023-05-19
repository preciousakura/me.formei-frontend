import { Container, Content, TopContent } from "./styles";
import { ProgressCourse, UserInfo } from "../../components/layout";
import { ButtonCard } from "../../components/layout/ButtonCard";
import { Feather,MaterialCommunityIcons } from "@expo/vector-icons";
import { Icon } from "native-base";
import { useTheme } from "styled-components";
export function Home() {
  const theme = useTheme();
  const options = [
    {
      name: "Horas complementares",
      icon: () => (
        <Icon as={MaterialCommunityIcons} name="timelapse" size={5} color={theme.color.text} />
      ),
    },
    {
      name: "Professores",
      icon: () => (
        <Icon as={Feather} name="book" size={5} color={theme.color.text} />
      ),
    },
    {
      name: "Períodos",
      icon: () => (
        <Icon as={Feather} name="calendar" size={5} color={theme.color.text} />
      ),
    },
  ];
  return (
    <Container
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <TopContent>
        <UserInfo />
      </TopContent>
      <Content>
        <ProgressCourse />
        {options.map((o) => {
          return <ButtonCard key={o.name} {...o} />;
        })}
      </Content>
    </Container>
  );
}
