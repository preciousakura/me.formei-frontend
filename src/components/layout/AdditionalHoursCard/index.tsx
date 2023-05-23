import { TouchableHighlight, View } from "react-native";
import { Container } from "./styles";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { H5 } from "../../shared/text";
import { Swipeable } from "react-native-gesture-handler";
import { DeleteButton } from "../DeleteButton";
import { AdditionalHour } from "AdditionalHours";
import { EditButton } from "../EditButton";

interface AdditionalHoursCardProps {
  data: AdditionalHour;
  item_key: number;
  rowRefs: Map<number, Swipeable>;
  onSwipeableWillOpen: () => void;
  handleRight: () => void;
  handleLeft: () => void;
}

export function AdditionalHoursCard({
  data,
  item_key,
  rowRefs,
  onSwipeableWillOpen,
  handleRight,
  handleLeft,
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
      onSwipeableRightOpen={handleRight}
      onSwipeableLeftOpen={handleLeft}
      onSwipeableWillOpen={onSwipeableWillOpen}
    >
      <TouchableHighlight
        style={{ borderRadius: 10, margin: 0 }}
        activeOpacity={0.9}
        onPress={() => navigation.navigate(data.linkTo)}
      >
        <Container>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
            <Icon
              as={FontAwesome}
              name={data.isValid ? "check" : "question"}
              size={5}
              color={
                data.isValid ? theme.color.primaryColor : theme.color.grayDark
              }
            />
            <H5>{data.title}</H5>
          </View>
          <H5>{data.hour}hs</H5>
        </Container>
      </TouchableHighlight>
    </Swipeable>
  );
}
