import { ActivityIndicator } from "react-native";
import { useTheme } from "../../../hooks/useTheme";
import { CustomizedStatusBar } from "../CustomizedStatusBar";
import { Container } from "./styles";

export function Loading() {
  const { theme } = useTheme();
  return (
    <Container>
      <CustomizedStatusBar backgroundColor={theme.colors.red[500]} />
      <ActivityIndicator size="large" color={theme.colors.white} />
    </Container>
  );
}
