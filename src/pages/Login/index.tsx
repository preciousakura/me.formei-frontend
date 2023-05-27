import { Button, FormControl, VStack } from "native-base";
import { H5, Subtitle } from "../../components/shared/text";
import { Container, ContentForm, ContainerLogo } from "./styles";
import { StatusBar, Image } from "react-native";
import { InputPassword, InputText } from "../../components/layout/UI";
import { useNavigation } from "@react-navigation/native";
import { UserLoginNavigationProp } from "../../types/types";
import * as yup from "yup";
import { Formik } from "formik";
import { useTheme } from "styled-components";

export default function Login() {
  const theme = useTheme();
  const navigation = useNavigation<UserLoginNavigationProp>();

  let loginValidationSchema = yup.object().shape({
    user: yup.string().required("O usuário é obrigatório"),
    password: yup
      .string()
      .min(6, ({ min }) => `A senha deve conter pelo menos ${min} caracteres.`)
      .required("A senha é obrigatório"),
  });

  return (
    <Container
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <StatusBar
        
        barStyle="dark-content"
      />

      <ContainerLogo>
        <Image
          source={require("../../assets/img/logo-home.png")}
          resizeMode="contain"
          style={{
            height: "50%",
            bottom: "-50%",
          }}
        />
      </ContainerLogo>

      <Formik
        initialValues={{ user: "", password: "" }}
        onSubmit={(values) => navigation.navigate("Tab")}
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

              <Button
                marginTop={30}
                
                onPress={() => handleSubmit()}
              >
                <H5 color={theme.color.textButton}>Entrar</H5>
              </Button>
            </VStack>

            <H5 align="center" color={theme.color.text}>
              Ainda não tem uma conta?{" "}
              <H5
                onPress={() => navigation.navigate("AccountInfo")}
                color={theme.color.primaryColor}
              >
                Registre-se!
              </H5>
            </H5>
          </ContentForm>
        )}
      </Formik>
    </Container>
  );
}
