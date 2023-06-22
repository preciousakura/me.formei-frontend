import { TouchableHighlight, Text } from "react-native";
import { Container } from "./styles";
import { VStack, useTheme as useThemeNative } from "native-base";
import { H5, Subtitle } from "../../shared/text";
import { Discipline } from "Discipline";
import { useTheme } from "../../../hooks/useTheme";
import { AdminInfo } from "User";

interface AdminCardProps {
  data: AdminInfo;
  onPress: () => void;
}

export function AdminCard({ data, onPress }: AdminCardProps) {
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
          <Subtitle color={theme.colors.text} size={19}>
            {data.name} {data.lastname}
          </Subtitle>
          <H5 >
            Username:
            <H5 weight="regular" color={theme.colors.text}> {data.username}</H5>
          </H5>
          <H5>
            Email:
            <H5 weight="regular"> {data.email}</H5>
          </H5>
        </VStack>
      </Container>
    </TouchableHighlight>
  );
}
