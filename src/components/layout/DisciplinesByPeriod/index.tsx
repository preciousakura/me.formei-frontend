import { Container } from "./styles";
import { Divider, HStack, VStack, useTheme } from "native-base";
import { H5 } from "../../shared/text";
import { Discipline, DisciplineByPeriod } from "Discipline";

interface DisciplinesByPeriodProps {
  data: DisciplineByPeriod;
  Card: (data: { data: Discipline }) => JSX.Element;
}

export function DisciplinesByPeriod({ data, Card }: DisciplinesByPeriodProps) {
  const theme = useTheme();

  return (
    <Container>
      <VStack space={3}>
        <HStack alignItems="center" space={3}>
          <H5 style={{ paddingVertical: 8 }} color={theme.colors.trueGray[400]}>
            {data.period}{data.period.toLowerCase() !== "período atual" && ' PERÍODO'}
          </H5>
          <Divider />
        </HStack>
        {data.disciplines.map((d, i) => {
          const props = { data: d };
          return <Card key={`${d.cod}_${i}`} {...props} />;
        })}
      </VStack>
    </Container>
  );
}
