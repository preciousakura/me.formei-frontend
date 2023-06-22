
import { useState } from "react";
import { VStack, View, Button, HStack } from "native-base";
import { BorderedContent } from "../styles";
import { Container } from "./styles";
import { Header, SelectMultiple } from "../../../components/layout";
import { useTheme } from "styled-components";
import {
  InputSelect,
  InputNumber,
  InputText,
} from "../../../components/layout/UI";
import { KeyboardAvoidingView, Platform } from "react-native";
import { H5 } from "../../../components/shared/text";
import { CustomizedStatusBar } from "../../../components/layout/CustomizedStatusBar";
import * as yup from "yup";
import { Formik } from "formik";

export function AdminRegister() {
  const theme = useTheme();
  const [isOptional, setIsOptional] = useState(true);

  let registerValidationSchema = yup.object().shape({
    name: yup.string().required("O nome é obrigatório."),
    lastName: yup.string().required("O sobrenome é obrigatório."),
    email: yup.string().required("O email é obrigatório."),
    userName: yup.string().required("O userName é obrigatório."), 
    password: yup.string().required("O senha é obrigatória."), 
  });


  const handleValueChange = (e : any) => {
    if (e === "Obrigatória") {
      setIsOptional(false)
    } else { 
    setIsOptional(true)
  }
  return (<></>);
}


return (
  <Container>
    <CustomizedStatusBar />
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: theme.colors.background }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={{ padding: 20 }}>
        <Header
          isSpaced={false}
          backButton
          colorIcon={theme.colors.text}
          colorText={theme.colors.text}
          title="Adicionar Disciplina"
        />
      </View>
      <Formik
        initialValues={{
          name: "",
          lastName: "",
          userName: "",
          email: "",
          password: "",
        }}
        validateOnMount={true}
        // onSubmit={(values) => navigation.navigate("GeneralInfo", values)}
        onSubmit={(value) => { }}
        validationSchema={registerValidationSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
          isValid,
        }) => (
          <BorderedContent>
            <VStack space={6} mt="5" paddingBottom={30}>
              <InputText
                label="Nome"
                touched={touched.name}
                errors={errors.name}
                config={{
                  placeholder: "Digite a carga horária da disciplina",
                  onChangeText: handleChange("name"),
                  onBlur: handleBlur("name"),
                  value: values.name,
                }}
              />
               <InputText
                label="Sobrenome"
                touched={touched.lastName}
                errors={errors.lastName}
                config={{
                  placeholder: "Digite a carga horária da disciplina",
                  onChangeText: handleChange("lastName"),
                  onBlur: handleBlur("lastName"),
                  value: values.lastName,
                }}
              />
              <InputText
                label="Username"
                touched={touched.userName}
                errors={errors.userName}
                config={{
                  placeholder: "Digite a carga horária da disciplina",
                  onChangeText: handleChange("userName"),
                  onBlur: handleBlur("userName"),
                  value: values.userName,
                }}
              />
              <InputText
                label="email"
                touched={touched.email}
                errors={errors.email}
                config={{
                  placeholder: "Digite a carga horária da disciplina",
                  onChangeText: handleChange("email"),
                  onBlur: handleBlur("email"),
                  value: values.email,
                }}
              />
              <InputText
                label="Senha"
                touched={touched.password}
                errors={errors.password}
                config={{
                  placeholder: "Digite a carga horária da disciplina",
                  onChangeText: handleChange("password"),
                  onBlur: handleBlur("password"),
                  value: values.password,
                }}
              />
              <HStack space={3}>
                <Button flex={1} marginTop={30} mt="5">
                  <H5 color={theme.colors.white}>Adicionar</H5>
                </Button>
                <Button flex={1} variant="outline" marginTop={30} mt="5">
                  <H5 color={theme.colors.text}>Cancelar</H5>
                </Button>
              </HStack>
            </VStack>
          </BorderedContent>
        )}
      </Formik>
    </KeyboardAvoidingView>
  </Container>
);
}
