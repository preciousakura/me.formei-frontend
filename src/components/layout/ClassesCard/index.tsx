import { View } from "react-native";
import { Container } from "./styles";
import { Classe } from "Discipline";
import { H5 } from "../../shared/text";
import { useTheme } from "styled-components";
import { HStack } from "native-base";

export function ClassesCard({
  discipline_name,
  teacher_name,
  hour,
  isCurrent,
}: Classe) {
  const theme = useTheme();

  const start = ("0000" + hour.start).slice(-2);
  const end = ("0000" + hour.end).slice(-2);

  return (
    <Container current_class={isCurrent}>
      <HStack alignItems="center" justifyContent="space-between">
        <View style={{width: '70%'}}>
          <H5 color={isCurrent ? theme.color.textBgLight : undefined}>
            {discipline_name}
          </H5>
          <H5 color={isCurrent ? theme.color.textBgLight : undefined}>
            Prof. {teacher_name}
          </H5>
        </View>
        <View >
          <H5 color={isCurrent ? theme.color.textBgLight : undefined} size={16}>
            {start}:00-{end}:00
          </H5>
        </View>
      </HStack>
    </Container>
  );
}
