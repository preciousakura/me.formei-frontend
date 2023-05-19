import { Dimensions } from "react-native";
import { Container, IconContent, TextContent } from "./styles";
import { H5, Subtitle, Title } from "../../../shared/text";
import { Button, Icon } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "styled-components";

export function SucessRegister() {
  const theme = useTheme();
  
  return (
    <Container>
      <IconContent style={{ height: Dimensions.get("window").height / 2.5 }}>
        <Icon
          as={AntDesign}
          name="checkcircle"
          size="120"
          color={theme.color.background}
        />
      </IconContent>
      <TextContent style={{ height: Dimensions.get("window").height / 1 }}>
        <Title>Tudo certo!</Title>
        <Subtitle style={{ paddingTop: 20 }} size={14} color={theme.color.text}>
          Seu cadastro foi concluído com sucesso! Agora você pode acessar a
          plataforma.
        </Subtitle>
        <Button borderRadius={10} backgroundColor={theme.color.primaryColor} width={100} marginTop={5}>
          <H5 color={theme.color.textButton}>Começar</H5>
        </Button>
      </TextContent>
    </Container>
  );
}
