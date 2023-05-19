import { useTheme } from "styled-components";
import { H5 } from "../../shared/text";
import { Container } from "./styles";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";

interface ButtonCardProps {
  name: string;
  icon: () => JSX.Element;
}

export function ButtonCard({ name, icon }: ButtonCardProps) {
  const theme = useTheme();
  const Icon = icon;
  return (
    <Container>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
        <Icon />
        <H5>{name}</H5>
      </View>
      <MaterialCommunityIcons
        name="chevron-right"
        size={25}
        color={theme.color.text}
      />
    </Container>
  );
}
