import { StatusBar } from "react-native";
import { Container } from "../styles";
import { useTheme } from "styled-components";
import { Header, SearchInput } from "../../../components/layout";

export function PeriodsHome() {
  const theme = useTheme();
  return (
    <Container
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle="dark-content"
      />
      <Header
        backButton
        colorIcon={theme.colors.text}
        colorText={theme.colors.text}
        title="Períodos"
      />
      <SearchInput title="período" />
    </Container>
  );
}
