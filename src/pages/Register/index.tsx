import { StatusBar } from "react-native";
import { Subtitle } from "../../components/shared/subtitle";
import { Container, ContainerForm, ContainerTop } from "./styles";
import { Button, ButtonText } from "../../components/shared/button";

export default function Register() {
  return (
    <Container>
      <StatusBar backgroundColor="#277BC0" barStyle="dark-content" />
      <ContainerTop />
      <ContainerForm>
        <Subtitle>Crie uma conta nova</Subtitle>
        
        <Button>
          <ButtonText>Criar</ButtonText>
        </Button>
      </ContainerForm>
    </Container>
  );
}
