import { StatusBar } from "react-native";
import { Container } from "../styles";
import { useTheme } from "styled-components";
import { Header, SearchInput } from "../../../components/layout";

export function AdditionalHoursHome() {
  const theme = useTheme();
  const data = [
    {
      title: "Monitoria de Compiladores",
      hour: 64,
      linkTo: "",
      isValid: false,
    },
    { title: "Líder de Turma", hour: 24, linkTo: "", isValid: true },
    { title: "Estágio Insight", hour: 96, linkTo: "", isValid: true },
  ];

  return (
    <Container>
      <StatusBar
        backgroundColor={theme.color.background}
        barStyle="dark-content"
      />
      <Header
        backButton
        colorIcon={theme.color.text}
        colorText={theme.color.text}
        title="Horas Complementares"
      />
      <SearchInput title="hora complementar" />
    </Container>
  );
}
