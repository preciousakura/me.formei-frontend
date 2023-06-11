import { Container } from "./styles";
import { Divider, HStack, VStack, useTheme } from "native-base";
import { H5 } from "../../shared/text";
import { DisciplineByPeriod } from "Discipline";
import { SwipedDisciplineCard } from "../SwipedDisciplineCard";
import { DisciplineProp } from "../../../types/types";
import { useNavigation } from "@react-navigation/native";

interface SwipedDisciplinesByPeriodProps {
  data: DisciplineByPeriod;
}

export function SwipedDisciplinesByPeriod({
  data,
}: SwipedDisciplinesByPeriodProps) {
  const theme = useTheme();
  const navigation = useNavigation<DisciplineProp>();

  let rowRefs = new Map();

  const swipeOpen = (index: number) => {
    [...rowRefs.entries()].forEach(([key, ref]) => {
      if (key !== index && ref) ref.close();
    });
  };

  const handleRight = (index: number) => {};

  const handleLeft = (index: number) => {
    return <></>
  };

  return (
    <Container>
      <VStack space={3}>
        <HStack alignItems="center" space={3}>
          <H5 style={{ paddingVertical: 8 }} color={theme.colors.trueGray[400]}>
            {data.period}
            {data.period.toLowerCase() !== "período atual" && " PERÍODO"}
          </H5>
          <Divider />
        </HStack>
        {data.disciplines.map((d, i) => {
          const props = { data: d };
          return (
            <SwipedDisciplineCard
              onPress={() => navigation.navigate("DisciplineDetails", d)}
              handleLeft={handleLeft}
              handleRight={handleRight}
              onSwipeableWillOpen={swipeOpen}
              item_key={i}
              rowRefs={rowRefs}
              key={`${d.cod}_${i}`}
              {...props}
            />
          );
        })}
      </VStack>
    </Container>
  );
}
