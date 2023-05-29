import { Container } from "../styles";
import { useTheme } from "styled-components";
import { Header, SearchInput } from "../../../components/layout";
import { CustomizedStatusBar } from "../../../components/layout/CustomizedStatusBar";

export function TeacherHome() {
  const theme = useTheme();
  return (
    <Container
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <CustomizedStatusBar backgroundColor={theme.colors.background} />
      <Header
        backButton
        colorIcon={theme.colors.text}
        colorText={theme.colors.text}
        title="Professores"
      />
      <SearchInput title="professor" />
    </Container>
  );
}
