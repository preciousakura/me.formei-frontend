import { TouchableHighlight, View } from "react-native";
import { Container } from "./styles";
import { useTheme } from "styled-components";
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
  onPress: () => void;
}

export function AdditionalHoursCard({
  data,
  item_key,
  rowRefs,
  onSwipeableWillOpen,
  handleRight,
  handleLeft,
  onPress
}: AdditionalHoursCardProps) {
  const theme = useTheme();

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
        onPress={onPress}
      >
        <Container>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
            <Icon
              as={FontAwesome}
              name={
                data.situation === "Deferido"
                  ? "check"
                  : data.situation === "Indeferido"
                  ? "remove"
                  : "question"
              }
              size={5}
              color={
                data.situation === "Deferido"
                  ? theme.color.primaryColor
                  : data.situation === "Indeferido"
                  ? theme.color.errorColor
                  : theme.color.grayDark
              }
            />
            <View style={{ width: "70%" }}>
              <H5>{data.activity_title}</H5>
            </View>
          </View>
          <H5>{data.amount_hours}hs</H5>
        </Container>
      </TouchableHighlight>
    </Swipeable>
  );
}
