import { Container, Content } from "../styles";
import { useTheme } from "../../../hooks/useTheme";
import { CustomizedStatusBar } from "../../../components/layout/CustomizedStatusBar";
import { AdminContactCard, Header } from "../../../components/layout";

export function ListAvailable() {
  const { theme } = useTheme();

  return (
    <Container>
      <CustomizedStatusBar backgroundColor={theme.colors.background} />
      <Header
        backButton
        colorIcon={theme.colors.text}
        colorText={theme.colors.white}
      />
      <Content>
        <AdminContactCard />
      </Content>
    </Container>
  );
}
