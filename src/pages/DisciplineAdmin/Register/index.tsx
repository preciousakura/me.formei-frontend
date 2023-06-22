
import { Formik } from "formik";
import { Button, HStack, VStack, View } from "native-base";
import { useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { useTheme } from "styled-components";
import * as yup from "yup";
import { Header, SelectMultiple } from "../../../components/layout";
import { CustomizedStatusBar } from "../../../components/layout/CustomizedStatusBar";
import {
  InputNumber,
  InputRadio,
  InputSelect,
  InputText,
} from "../../../components/layout/UI";
import { H5 } from "../../../components/shared/text";
import { BorderedContent } from "../styles";
import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function DisciplineAdminRegister() {
  const theme = useTheme();
  const [showInputPeriod, setShowInputPeriod] = useState(false);
  const navigation = useNavigation();

  let registerValidationSchema = yup.object().shape({
    name: yup.string().required("O nome da disciplina é obrigatório."),
    workload: yup.string().required("A carga horária é obrigatória."),
    menu: yup.string().required("A ementa é obrigatória."),
    bibliography: yup.string(),
  });

const handleOnChange = (value: any) => {
  if(value==="Optativa") {
    setShowInputPeriod(false);
  } else {
    setShowInputPeriod(true);
  }
  return {};
}

const handlePress = () => {
  navigation.goBack();
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
          bibliography: "",
          workload: "",
          menu: "",
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
              <InputSelect
                config={{ placeholder: "Selecione o curso", defaultValue: "Ciência da Computação" }}
                values={[
                  { label: "Ciência da Computação", value: "Ciência da Computação" },
                ]}
                label="Curso"
              />
              <InputNumber
                label="Carga horária"
                config={{ placeholder: "Digite a carga horária da disciplina" }}
              />
              <InputText
                label="Nome"
                touched={touched.name}
                errors={errors.name}
                config={{
                  placeholder: "Digite o nome da disciplina",
                  onChangeText: handleChange("name"),
                  onBlur: handleBlur("name"),
                  value: values.name,
                }}
              />
               <InputRadio
                label="Caráter"
                values={["Obrigatória", "Optativa"]}
                defaultValue="Optativa"
                onChange={handleOnChange}
              />
               {showInputPeriod && (
                <InputSelect
                  config={{ placeholder: "Selecione o período da disciplina" }}
                  values={[
                    { label: "Período 1", value: "Período 1" },
                    { label: "Período 2", value: "Período 2" },
                  ]}
                  label="Período"
                />
              )}
              <InputText
                label="Bibliografia"
                touched={touched.bibliography}
                errors={errors.bibliography}
                config={{
                  multiline: true,
                  placeholder: "Digite a bibliografia da disciplina",
                  onChangeText: handleChange("bibliography"),
                  onBlur: handleBlur("bibliography"),
                  value: values.bibliography,
                }}
              />
              <InputText
                label="Ementa"
                touched={touched.menu}
                errors={errors.menu}
                config={{
                  multiline: true,
                  placeholder: "Digite a ementa da disciplina",
                  onChangeText: handleChange("menu"),
                  onBlur: handleBlur("menu"),
                  value: values.menu,
                }}
              />
              <SelectMultiple
                data={[
                  {
                    id: 0,
                    name: "Aprendizado de Máquina",
                    cod: "CK0215",
                  },
                  {
                    id: 1,
                    name: "Processamento de Imagens",
                    cod: "CK0215",
                  },
                  {
                    id: 2,
                    name: "Teoria da Computação",
                    cod: "CK0215",
                  },
                  {
                    id: 3,
                    name: "Construção e Análise de Algoritmos",
                    cod: "CK0215",
                  },
                  {
                    id: 4,
                    name: "Circuitos Digitais",
                    cod: "CK0215",
                  },
                  {
                    id: 5,
                    name: "Programação",
                    cod: "CK0215",
                  },
                  {
                    id: 6,
                    name: "Engenharia de Software",
                    cod: "CK0215",
                  },
                  {
                    id: 7,
                    name: "Computação Gráfica",
                    cod: "CK0215",
                  },
                  {
                    id: 8,
                    name: "Lógica para Ciência da computação",
                    cod: "CK0215",
                  },
                  {
                    id: 9,
                    name: "Seminário em Computação",
                    cod: "CK0215",
                  },
                  {
                    id: 10,
                    name: "Informática e Sociedade",
                    cod: "CK0215",
                  },
                ]}
                label="Pré-requisitos"
                onChange={() => console.log()}
                placeholder="Selecione a disciplina"
                max={3}
              />
              <HStack space={3}>
                <Button flex={1} marginTop={30} mt="5">
                  <H5 color={theme.colors.white}>Adicionar</H5>
                </Button>
                <Button flex={1} variant="outline" marginTop={30} mt="5" onPress={handlePress}>
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
