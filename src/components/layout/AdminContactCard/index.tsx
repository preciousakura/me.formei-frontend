import { TouchableHighlight, View } from "react-native";
import { Container } from "./styles";
import { useTheme } from "styled-components";
import { Icon } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export function AdminContactCard() {
  const theme = useTheme();

  return (
    <TouchableHighlight
      style={{ borderRadius: 10, margin: 0 }}
      activeOpacity={0.9}
    >
      <Container>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
          <Icon
            as={MaterialCommunityIcons}
            name="warning"
            size={5}
            color={theme.colors.primary[500]}
          />
        </View>
        <MaterialCommunityIcons
          name="chevron-right"
          size={25}
          color={theme.colors.text}
        />
      </Container>
    </TouchableHighlight>
  );
}
