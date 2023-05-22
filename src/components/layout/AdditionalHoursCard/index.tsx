import { TouchableHighlight, View } from "react-native";
import { Container } from "./styles";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { H5 } from "../../shared/text";

export interface AdditionalHoursCardProps {
  linkTo: string;
  title: string;
  hour: number;
  isValid: boolean;
}

export function AdditionalHoursCard({
  linkTo,
  title,
  hour,
  isValid = false,
}: AdditionalHoursCardProps) {
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
            as={FontAwesome}
            name={isValid ? "check" : "question"}
            size={5}
            color={isValid ? theme.color.primaryColor : theme.color.grayDark}
          />
          <H5>{title}</H5>
        </View>
        <H5>{hour}hs</H5>
      </Container>
    </TouchableHighlight>
  );
}
