import { useTheme } from "styled-components";
import { H5 } from "../../shared/text";
import { Container } from "./styles";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableHighlight, View } from "react-native";
import { IIconProps, Icon } from "native-base";
import { useNavigation } from "@react-navigation/native";

interface ButtonHomeCardProps {
  name: string;
  icon: IIconProps;
  nameIcon: string;
  linkTo: string;
}

export function ButtonHomeCard({ name, icon, nameIcon, linkTo }: ButtonHomeCardProps) {
  const theme = useTheme();
  const navigation = useNavigation<any>();

  return (
    <TouchableHighlight
      style={{ borderRadius: 10, margin: 0 }}
      activeOpacity={0.9}
      onPress={() => navigation.navigate(linkTo)}
    >
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
    </TouchableHighlight>
  );
}
