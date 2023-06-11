import { Button, FormControl, VStack } from "native-base";
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
import { UserLogin } from "User";
import { useSignin } from "../../servicesHooks/useSignin";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";
import { Loading } from "../../components/layout";

export default function Login() {
  const theme = useTheme();
  const navigation = useNavigation<UserLoginNavigationProp>();

  let loginValidationSchema = yup.object().shape({
    username: yup.string().required("O usuário é obrigatório"),
    password: yup.string().required("A senha é obrigatória"),
  });

  const path_img = () => {
    return theme.isDark
      ? require("../../assets/img/dark-logo-home.png")
      : require("../../assets/img/light-logo-home.png");
  };

  const { signin, loading, isUserError, isPasswordError, isGenericError } =
    useSignin();
  const { isLoggedIn, loading: loginLoading } = useUser();

  useEffect(() => {
    if (isLoggedIn) toHome();
  }, [isLoggedIn]);

  const toHome = () => {
    navigation.navigate("Tab");
    navigation.reset({
      index: 0,
      routes: [{ name: "Tab" }],
    });
  };

  const submit = async (values: UserLogin) => {
    await signin(values, toHome);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: theme.colors.background }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      {loginLoading && <Loading />}
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
          initialValues={{ username: "", password: "" }}
          onSubmit={(values) => submit(values)}
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
                    touched={touched.username}
                    errors={
                      errors.username
                        ? errors.username
                        : isUserError
                        ? "Usuário não encontrado"
                        : errors.username
                    }
                    config={{
                      placeholder: "Digite seu usuário",
                      onChangeText: handleChange("username"),
                      onBlur: handleBlur("username"),
                      value: values.username,
                    }}
                  />
                </FormControl>

                <FormControl>
                  <InputPassword
                    label="Senha"
                    touched={touched.password}
                    errors={
                      errors.password
                        ? errors.password
                        : isPasswordError
                        ? "A senha está incorreta"
                        : isGenericError
                        ? "Ocorreu um erro no servidor, tente novamente mais tarde."
                        : errors.password
                    }
                    config={{
                      placeholder: "Digite sua senha",
                      onChangeText: handleChange("password"),
                      onBlur: handleBlur("password"),
                      value: values.password,
                    }}
                  />
                </FormControl>

                <Button
                  isLoading={loading}
                  isDisabled={!isValid}
                  marginTop={30}
                  onPress={() => handleSubmit()}
                >
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
