import { Container, Content } from "../styles";
import { useTheme } from "../../../hooks/useTheme";
import { CustomizedStatusBar } from "../../../components/layout/CustomizedStatusBar";
import { Header, ProgressDiscipline } from "../../../components/layout";
import { ButtonHomeCard } from "../../../components/layout/ButtonHomeCard";

export function UsersHome() {
  const { theme } = useTheme();

  const options = [
    {
      name: "Meu plano de formação",
      linkTo: "FormationPlan",
      root: "Discipline",
    },
    {
      name: "Ver disciplinas disponíveis",
      linkTo: "ListAvailable",
      root: "Discipline",
    },
  ];

  function renderCard() {
    return (
     <></>
    );
  }

  return (
    <Container>
      <CustomizedStatusBar backgroundColor={theme.colors.primary[500]} />
      <Text>Users</Text>
    </Container>
  );
}
