import { Container, ContentForm } from "../styles";
import { Header } from "../../../components/layout";
import { Button, FormControl, VStack } from "native-base";
import { ConfirmPassword, InputText } from "../../../components/layout/UI";
import { H5, Subtitle } from "../../../components/shared/text";
import { useNavigation } from "@react-navigation/native";
import { UserLoginNavigationProp } from "../../../types/types";
import { useTheme } from "styled-components";
import { CustomizedStatusBar } from "../../../components/layout/CustomizedStatusBar";
import { KeyboardAvoidingView } from "react-native";
import { Platform } from "react-native";

export default function AccountInfo() {
  const theme = useTheme();
  const navigation = useNavigation<UserLoginNavigationProp>();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: theme.colors.background }}
      behavior={Platform.OS === 'ios' ? "padding" : undefined}
    >
      <Container
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <CustomizedStatusBar backgroundColor={theme.colors.primary[500]} />
        <Header backButton />
        <ContentForm>
          <Subtitle align="center">Crie uma nova conta</Subtitle>
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
              mt="5"
            >
              <H5 color={theme.colors.white}>Próximo</H5>
            </Button>
          </VStack>
        </ContentForm>
      </Container>
    </KeyboardAvoidingView>
  );
}
