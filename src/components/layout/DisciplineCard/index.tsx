import { TouchableHighlight } from "react-native";
import { Container } from "./styles";
import { VStack, useTheme as useThemeNative } from "native-base";
import { H5, Subtitle } from "../../shared/text";
import { Discipline } from "Discipline";
import { useTheme } from "../../../hooks/useTheme";

interface DisciplineCardProps {
  data: Discipline;
  onPress: () => void;
}

export function DisciplineCard({ data, onPress }: DisciplineCardProps) {
  const { colors } = useThemeNative();
  const { theme } = useTheme();

  return (
    <TouchableHighlight
      style={{ borderRadius: 10, margin: 0 }}
      activeOpacity={0.9}
      onPress={onPress}
    >
      <Container>
        <VStack space={1}>
          <H5 color={colors.trueGray[400]}>#{data.cod}</H5>
          <Subtitle color={theme.colors.text} size={19}>
            {data.name}
          </Subtitle>
          <H5 color={theme.colors.text}>Carga horária: {data.workload}h</H5>
          <H5 color={theme.colors.text}>
            Pré-requisitos:{" "}
            {data.prerequisites.length > 0
              ? data.prerequisites.map((pr, i) => (
                  <H5 key={`${pr.cod}_${i}`} color={theme.colors.primary[500]}>
                    {pr.name}
                    {i !== data.prerequisites.length - 1 && ", "}
                  </H5>
                ))
              : "-"}
          </H5>
        </VStack>
      </Container>
    </TouchableHighlight>
  );
}
