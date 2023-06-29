import { Container } from "./styles";
import { Divider, HStack, VStack, useTheme } from "native-base";
import { H5 } from "../../shared/text";
import { Discipline } from "Discipline";
import { DisciplineCard } from "../DisciplineCard";
import { useNavigation } from "@react-navigation/native";
import { DisciplineProp } from "../../../types/types";

interface DisciplinesByPeriodProps {
  data: Discipline;
}

export function DisciplinesByPeriod({ data }: DisciplinesByPeriodProps) {
  const theme = useTheme();
  const navigation = useNavigation<DisciplineProp>();

  return (
    <Container>
      <VStack space={3}>
        <HStack alignItems="center" space={3}>
          <H5 style={{ paddingVertical: 8 }} color={theme.colors.trueGray[400]}>
            {data.period + ' '}PERÍODO
          </H5>
          <Divider />
        </HStack>
        {data.disciplines.map((d, i) => {
          const props = { data: d };
          return (
            <DisciplineCard
              onPress={() => navigation.navigate("DisciplineDetails", d)}
              key={`${d.cod}_${i}`}
              {...props}
            />
          );
        })}
      </VStack>
    </Container>
  );
}
