import { Icon } from "native-base";
import { Container } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

interface CreateButtonProps {
  onPress: () => void;
}

export function CreateButton({onPress}: CreateButtonProps) {
  return (
    <Container onPress={onPress} activeOpacity={0.9}>
      <Icon as={MaterialIcons} name="add" size="6" color="#ffffff" />
    </Container>
  );
}
