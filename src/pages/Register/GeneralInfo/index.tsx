import { Container, ContentForm } from "../styles";
import { Header } from "../../../components/layout";
import { Button, VStack } from "native-base";
import { InputSelect } from "../../../components/layout/UI";
import { H5, Subtitle } from "../../../components/shared/text";
import { useNavigation } from "@react-navigation/native";
import { UserLoginNavigationProp } from "../../../types/types";
import { useTheme } from "styled-components";
import { CustomizedStatusBar } from "../../../components/layout/CustomizedStatusBar";

export default function GeneralInfo() {
  const theme = useTheme();
  const navigation = useNavigation<UserLoginNavigationProp>();
  return (
    <Container
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <CustomizedStatusBar backgroundColor={theme.colors.primary[500]} />
      <Header backButton />
      <ContentForm>
        <Subtitle align="center">Informações gerais</Subtitle>
        <VStack space={3} mt="5" paddingBottom={30}>
          <InputSelect
            config={{ placeholder: "Selecione seu estado" }}
            values={[{ label: "Ceará", value: "Ceará" }]}
            label="Estado"
          />

          <InputSelect
            config={{ placeholder: "Selecione seu município" }}
            values={[{ label: "Fortaleza", value: "Fortaleza" }]}
            label="Município"
          />

          <InputSelect
            config={{ placeholder: "Selecione sua univerdade" }}
            values={[
              {
                label: "Universidade Federal do Ceará",
                value: "Universidade Federal do Ceará",
              },
            ]}
            label="Universidade"
          />

          <InputSelect
            config={{ placeholder: "Selecione seu curso" }}
            values={[
              {
                label: "Ciência da Computação",
                value: "Ciência da Computação",
              },
            ]}
            label="Curso"
          />

          <InputSelect
            config={{
              placeholder: "Selecione o ano",
            }}
            values={[{ label: "2020", value: "2020" }]}
            label="Ano de entrada"
          />

          <InputSelect
            config={{
              placeholder: "Seleciona o período",
            }}
            values={[{ label: "1", value: "1" }]}
            label="Período de entrada"
          />

          <Button
            onPress={() => navigation.navigate("SucessRegister")}
            marginTop={30}
            mt="5"
          >
            <H5 color={theme.colors.white}>Criar</H5>
          </Button>
        </VStack>
      </ContentForm>
    </Container>
  );
}
