import { StatusBar } from "react-native";
import { Container, ContentForm } from "./styles";
import { Header } from "../../components/layout/Header";
import { Button, FormControl, VStack } from "native-base";
import { ConfirmPassword, InputText } from "../../components/layout/UI";
import { H5, Subtitle } from "../../components/shared/subtitle";

export default function Register() {
  return (
    <Container showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor="#277BC0" barStyle="dark-content" />
      <Header backButton />
      <ContentForm>
        <Subtitle>Crie uma nova conta</Subtitle>
        <VStack space={3} mt="5" paddingBottom={30}>
          <FormControl>
            <InputText
              label="Nome"
              config={{ placeholder: "Digite seu nome" }}
            />
          </FormControl>

          <FormControl>
            <InputText
              label="Sobrenome"
              config={{ placeholder: "Digite seu sobrenome" }}
            />
          </FormControl>

          <FormControl>
            <InputText
              label="Email"
              config={{
                placeholder: "Digite seu nome",
                keyboardType: "email-address",
              }}
            />
          </FormControl>

          <ConfirmPassword />

          <Button marginTop={30} backgroundColor="#277BC0" mt="5">
            <H5>Criar</H5>
          </Button>
        </VStack>
      </ContentForm>
    </Container>
  );
}
