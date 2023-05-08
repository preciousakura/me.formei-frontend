import { Button, FormControl, VStack } from "native-base";
import { H5, Subtitle } from "../../components/shared/subtitle";
import { Container, ContentForm, ContainerLogo } from "./styles";
import { StatusBar, Image } from "react-native";
import { InputPassword, InputText } from "../../components/layout/UI";
import { Link } from "@react-navigation/native";

export default function Login() {
  return (
    <Container>
      <StatusBar backgroundColor="#277BC0" barStyle="dark-content" />

      <ContainerLogo>
        <Image
          source={require("../../assets/img/logo-home.png")}
          resizeMode="contain"
          style={{
            height: "60%",
            bottom: "-50%",
          }}
        />
      </ContainerLogo>

      <ContentForm>
        <Subtitle>Faça seu login</Subtitle>

        <VStack space={3} mt="5" paddingBottom={30}>
          <FormControl>
            <InputText label="Usuário" />
          </FormControl>

          <FormControl>
            <InputPassword label="Senha" />
          </FormControl>

          <Button marginTop={30} backgroundColor="#277BC0">
            <H5>Entrar</H5>
          </Button>
        </VStack>

        <H5 color="#2C3333">
          Ainda não tem uma conta? <Link to=""><H5 color="#277BC0">Registre-se!</H5></Link>
        </H5>
      </ContentForm>
    </Container>
  );
}
