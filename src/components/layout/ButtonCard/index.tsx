import { useTheme } from "styled-components";
import { H5 } from "../../shared/text";
import { Container } from "./styles";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { IIconProps, Icon } from "native-base";

interface ButtonCardProps {
  name: string;
  icon: IIconProps;
  nameIcon: string;
}

export function ButtonCard({ name, icon, nameIcon }: ButtonCardProps) {
  const theme = useTheme();
  return (
    <Container>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
        <Icon
          as={icon}
          name={nameIcon}
          size={5}
          color={theme.color.primaryColor}
        />
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
