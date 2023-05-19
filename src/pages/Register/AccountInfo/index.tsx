import { StatusBar } from "react-native";
import { Container, ContentForm } from "../styles";
import { Header } from "../../../components/layout";
import { Button, FormControl, VStack } from "native-base";
import { ConfirmPassword, InputText } from "../../../components/layout/UI";
import { H5, Subtitle } from "../../../components/shared/text";
import { useNavigation } from "@react-navigation/native";
import { UserLoginNavigationProp } from "../../../types/types";
import { useTheme } from "styled-components";

export default function AccountInfo() {
  const theme = useTheme();
  const navigation = useNavigation<UserLoginNavigationProp>();

  return (
    <Container
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <StatusBar backgroundColor={theme.color.primaryColor} barStyle="dark-content" />
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

          <Button
            onPress={() => navigation.navigate("GeneralInfo")}
            marginTop={30}
            backgroundColor={theme.color.primaryColor}
            mt="5"
          >
            <H5 color={theme.color.textButton}>Próximo</H5>
          </Button>
        </VStack>
      </ContentForm>
    </Container>
  );
}
