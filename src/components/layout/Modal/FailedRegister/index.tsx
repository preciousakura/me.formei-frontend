import { Dimensions, StatusBar } from "react-native";
import { Container, IconContent, TextContent } from "./styles";
import { H5, Subtitle, Title } from "../../../shared/text";
import { Button, Icon } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { UserLoginNavigationProp } from "../../../../types/types";
import { useTheme } from "styled-components";

export function FailedRegister() {
  const navigation = useNavigation<UserLoginNavigationProp>();
  const theme = useTheme();

  return (
    <Container>
      <StatusBar
        backgroundColor={theme.colors.red[500]}
        barStyle="dark-content"
      />
      <IconContent style={{ height: Dimensions.get("window").height / 2.5 }}>
        <Icon
          as={AntDesign}
          name="closecircle"
          size="120"
          color={theme.colors.background}
        />
      </IconContent>
      <TextContent style={{ height: Dimensions.get("window").height / 1 }}>
        <Title color={theme.colors.red[500]}>Ops!</Title>
        <Subtitle align="center" style={{ paddingTop: 20 }} size={14} color={theme.colors.text}>
          Seu cadastro não pôde ser finalizado devido a uma falha no nosso
          sistema.
        </Subtitle>
        <Button
          onPress={() => navigation.navigate("Login")}
          borderRadius={10}
          backgroundColor={theme.colors.red[500]}
          width={100}
          marginTop={5}
        >
          <H5 color={theme.colors.white}>Voltar</H5>
        </Button>
      </TextContent>
    </Container>
  );
}
