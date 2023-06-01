import { View } from "native-base";
import { StatusBar } from "react-native";
import { useTheme } from "../../../hooks/useTheme";

interface CustomizedStatusBar {
  backgroundColor?: string;
}

export function CustomizedStatusBar({ backgroundColor }: CustomizedStatusBar) {
  const theme = useTheme();
  const bg = backgroundColor ? backgroundColor : theme.theme.colors.background;
  return (
    <View background={bg}>
      <StatusBar
        backgroundColor={bg}
        barStyle={theme.isDark ? "light-content" : "dark-content"}
      />
    </View>
  );
}
