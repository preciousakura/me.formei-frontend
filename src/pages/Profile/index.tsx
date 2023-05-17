import { View, Text } from "react-native";
import { Container } from "./styles";

export function Profile() {
  return (
    <Container
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View>
        <Text>Aqui é o perfil</Text>
      </View>
    </Container>
  );
}
