import { StatusBar } from "react-native";
import { Container } from "../styles";
import { useTheme } from "styled-components";
import { Header, SearchInput } from "../../../components/layout";

export function TeacherHome() {
  const theme = useTheme();
  return (
    <Container
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <StatusBar
        backgroundColor={theme.color.background}
        barStyle="dark-content"
      />
      <Header
        backButton
        colorIcon={theme.color.text}
        colorText={theme.color.text}
        title="Professores"
      />
      <SearchInput title="professor" />
    </Container>
  );
}
