import { Icon } from "native-base";
import { H5 } from "../../shared/text";
import { Container } from "./styles";
import { Feather } from "@expo/vector-icons";
import { TouchableHighlight } from "react-native";

export function EditButton() {
  return (
    <TouchableHighlight
      style={{ borderRadius: 10, margin: 0 }}
      activeOpacity={0.9}
    >
      <Container>
        <Icon as={Feather} name="edit" size="4" color="#ffffff" />
        <H5 color="#ffffff" size={10}>
          Editar
        </H5>
      </Container>
    </TouchableHighlight>
  );
}
