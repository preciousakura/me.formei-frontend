import { Dimensions, StatusBar } from "react-native";
import { Container, IconContent, TextContent } from "./styles";
import { H5, Subtitle, Title } from "../../../shared/text";
import { Button, Icon } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { UserLoginNavigationProp } from "../../../../types/types";

export function FailedRegister() {
  const navigation = useNavigation<UserLoginNavigationProp>();

  return (
    <Container>
      <StatusBar backgroundColor="#C02727" barStyle="dark-content" />
      <IconContent style={{ height: Dimensions.get("window").height / 2.5 }}>
        <Icon as={AntDesign} name="closecircle" size="120" color="#ffffff" />
      </IconContent>
      <TextContent style={{ height: Dimensions.get("window").height / 1 }}>
        <Title color="#C02727">Ops!</Title>
        <Subtitle style={{ paddingTop: 20 }} size={14} color="#2C3333">
          Seu cadastro não pôde ser finalizado devido a uma falha no nosso
          sistema.
        </Subtitle>
        <Button
          onPress={() => navigation.navigate("Login")}
          borderRadius={10}
          backgroundColor="#C02727"
          width={100}
          marginTop={5}
        >
          <H5>Voltar</H5>
        </Button>
      </TextContent>
    </Container>
  );
}
