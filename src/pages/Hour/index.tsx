import { View, Text } from "react-native";
import { Container } from "./styles";

export function Hour() {
  return (
    <Container
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View>
        <Text>Aqui é a hour</Text>
      </View>
    </Container>
  );
}
