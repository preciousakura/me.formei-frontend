import { TouchableHighlight, View } from "react-native";
import { Container } from "./styles";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { H5 } from "../../shared/text";
import { Swipeable } from "react-native-gesture-handler";
import { EditButton } from "../EditButton";
import { DeleteButton } from "../DeleteButton";

export interface AdditionalHoursCardProps {
  linkTo: string;
  title: string;
  hour: number;
  isValid: boolean;
  item_key?: number;
  rowRefs?: any;
  onSwipeableWillOpen?: () => void
}

export function AdditionalHoursCard({
  linkTo,
  title,
  hour,
  isValid = false,
  item_key,
  rowRefs,
  onSwipeableWillOpen
}: AdditionalHoursCardProps) {
  const theme = useTheme();
  const navigation = useNavigation<any>();

  return (
    <Swipeable
      key={item_key}
      ref={(ref) => {
        if (ref && !rowRefs.get(item_key)) {
          rowRefs.set(item_key, ref);
        }
      }}
      renderLeftActions={EditButton}
      renderRightActions={DeleteButton}
      onSwipeableWillOpen={onSwipeableWillOpen}
    >
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
    </Swipeable>
  );
}
