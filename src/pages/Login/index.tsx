import { Button, FormControl, VStack, View } from "native-base";
import { H5, Subtitle } from "../../components/shared/text";
import { Container, ContentForm, ContainerLogo } from "./styles";
import {
  Image,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { InputPassword, InputText } from "../../components/layout/UI";
import { useNavigation } from "@react-navigation/native";
import { UserLoginNavigationProp } from "../../types/types";
import * as yup from "yup";
import { Formik } from "formik";
import { useTheme } from "styled-components";
import { CustomizedStatusBar } from "../../components/layout/CustomizedStatusBar";

export default function Login() {
  const theme = useTheme();
  const navigation = useNavigation<UserLoginNavigationProp>();

  interface LoginInformation {
    user: String;
    password: String
  }

  let loginValidationSchema = yup.object().shape({
    user: yup.string().required("O usuário é obrigatório"),
    password: yup
      .string()
      .min(6, ({ min }) => `A senha deve conter pelo menos ${min} caracteres.`)
      .required("A senha é obrigatório"),
  });

  const handleLogin = ({ user, password }: LoginInformation) => {
    if (user === 'admin@gmail.com' && password === 'admin123') {
      navigation.navigate("Admin")
    } else {
      navigation.navigate("Tab")
    }
  }

  const path_img = () => {
    return theme.isDark
      ? require("../../assets/img/dark-logo-home.png")
      : require("../../assets/img/light-logo-home.png");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: theme.colors.background }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Container
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <CustomizedStatusBar backgroundColor={theme.colors.primary[500]} />
        <ContainerLogo>
          <Image
            source={path_img()}
            resizeMode="contain"
            style={{
              height: Dimensions.get("screen").height / 6,
            }}
          />
        </ContainerLogo>

        <Formik
          initialValues={{ user: "admin@gmail.com", password: "admin123" }}
          onSubmit={handleLogin}
          validateOnMount
          validationSchema={loginValidationSchema}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            isValid,
            errors,
          }) => (
            <ContentForm>
              <Subtitle align="center">Faça seu login</Subtitle>

              <VStack space={3} mt="5" paddingBottom={30}>
                <FormControl>
                  <InputText
                    label="Usuário"
                    touched={touched.user}
                    isValid={isValid}
                    errors={errors.user}
                    config={{
                      placeholder: "Digite seu usuário",
                      onChangeText: handleChange("user"),
                      onBlur: handleBlur("user"),
                      value: values.user,
                    }}
                  />
                </FormControl>

                <FormControl>
                  <InputPassword
                    label="Senha"
                    touched={touched.password}
                    isValid={isValid}
                    errors={errors.password}
                    config={{
                      placeholder: "Digite sua senha",
                      onChangeText: handleChange("password"),
                      onBlur: handleBlur("password"),
                      value: values.password,
                    }}
                  />
                </FormControl>

                <Button marginTop={30} onPress={() => handleSubmit()}>
                  <H5 color={theme.colors.white}>Entrar</H5>
                </Button>
              </VStack>

              <H5 align="center" color={theme.colors.text}>
                Ainda não tem uma conta?{" "}
                <H5
                  onPress={() => navigation.navigate("AccountInfo")}
                  color={theme.colors.primary[500]}
                >
                  Registre-se!
                </H5>
              </H5>
            </ContentForm>
          )}
        </Formik>
      </Container>
    </KeyboardAvoidingView>
  );
}
