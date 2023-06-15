import { VStack, View, Button, HStack } from "native-base";
import {
  BorderedContent,
  Container,
  DateGroup,
  ScrollContent,
} from "../styles";
import { Header } from "../../../components/layout";
import { useTheme } from "styled-components";
import {
  InputCNPJ,
  InputDate,
  InputNumber,
  InputRadio,
  InputSelect,
  InputText,
} from "../../../components/layout/UI";
import { Dimensions, KeyboardAvoidingView, Platform } from "react-native";
import { H5 } from "../../../components/shared/text";
import { CustomizedStatusBar } from "../../../components/layout/CustomizedStatusBar";
import { Formik } from "formik";
import * as yup from "yup";

export function AdditionalHoursRegister() {
  const theme = useTheme();
  const submit = (value: any) => {}

  let registerValidationSchema = yup.object().shape({
    situation: yup.string().required("alguma coisa é obrigatória."),
    activitieType: yup.string().required("O tipo de atividade de é obrigatório"),
    participationType: yup.string().required("O tipo de participação é obrigatório."),
    title: yup.string().required("O título é obrigatório."),
    atUFC: yup.string().required("A seleção é obrigatória."),
    institution: yup.string().required("A instituição é obrigatória."),
    country: yup.string().required("O pais é obrigatório."),
    cnpj: yup.string().required("O CNPJ é obrigatótio."),
    beginDate: yup.string().required("A data de início é obrigatória."),
    endDate: yup.string().required("A data de fim é obrigatória."),
    workload: yup.string().required("A carga horária total é obrigatória."),
  });

  return (
    <Container>
      <CustomizedStatusBar />
      <Formik
        initialValues={{
          situation: "",
          activitieType: "",
          participationType: "",
          title: "",
          atUFC: "",
          institution: "",
          country: "",
          cnpj: "",
          beginDate: "",
          endDate: "",
          workload: "",
        }}
        validateOnMount={true}
        onSubmit={(values) => submit(values)}
        validationSchema={registerValidationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (
        <KeyboardAvoidingView
          style={{ flex: 1, backgroundColor: theme.colors.background }}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <ScrollContent
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
          >
            <View style={{ padding: 20 }}>
              <Header
                isSpaced={false}
                backButton
                colorIcon={theme.colors.text}
                colorText={theme.colors.text}
                title="Adicionar Atividade"
              />
            </View>
            <BorderedContent>
              <VStack space={6} mt="5" paddingBottom={30}>
                <InputRadio
                  orientation="vertical"
                  label="Situação"
                  values={["Sem resposta", "Deferido", "Indeferido"]}
                  defaultValue="Sem resposta"
                />
                <InputSelect
                  config={{ 
                    placeholder: "Selecione o tipo da atividade",
                    onValueChange: handleChange("activitieType"),
                    selectedValue: values.activitieType,
                  }}
                  values={[{ label: "Iniciação à Pesquisa", value: "Iniciação à Pesquisa" }]}
                  label="Tipo de atividade"
                />
                <InputSelect
                  config={{ 
                    placeholder: "Selecione o tipo da participação",
                    onValueChange: handleChange("participationType"),
                    selectedValue: values.participationType,
                  }}
                  values={[
                    { label: "Membro da equipe", value: "Menbro da equipe" },
                    {label: "Estagiário", value: "Estagiário"}]}
                  label="Tipo de participação"
                />
                <InputText
                  label="Título da atividade"
                  touched = {touched.title}
                  errors = {errors.title}
                  config={{ 
                    placeholder: "Digite o título da atividade",
                    onChangeText: handleChange("title"),
                    onBlur: handleBlur("title"),
                    value: values.title, 
                  }}
                />

                <InputRadio
                  label="Executada na UFC?"
                  values={["Sim", "Não"]}
                  defaultValue="Não"
                />

                <InputText
                  label="Nome da instituição"
                  touched = {touched.institution}
                  errors = {errors.institution}
                  config={{ 
                    placeholder: "Digite o nome da instituição",
                    onChangeText: handleChange("institution"),
                    onBlur: handleBlur("institution"),
                    value: values.institution, 
                  }}
                />

                <InputSelect
                  config={{ 
                    placeholder: "Selecione o país da instituição", 
                    onValueChange: handleChange("country"),
                    selectedValue: values.country,
                }}
                  touched = {touched.country}
                  errors = {errors.country}
                  values={[{ label: "Brasil", value: "Brasil" }]}
                  label="País da instituição"
                />

                <InputCNPJ
                  label="CPNJ da instituição"
                  config={{ placeholder: "Digite o CNPJ da instituição" }}
                />

                <DateGroup>
                  <InputDate
                    config={{
                      placeholder: "DD/MM/AAAA",
                      width: Dimensions.get("window").width / 2 - 50,
                    }}
                    label="Data de início"
                  />

                  <InputDate
                    config={{
                      placeholder: "DD/MM/AAAA",
                      width: Dimensions.get("window").width / 2 - 50,
                    }}
                    label="Data de fim"
                  />
                </DateGroup>

                <InputNumber
                  label="Carga horária total"
                  touched = {touched.workload}
                  errors = {errors.workload}
                  config={{ placeholder: "Digite a carga horária total" }}
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
          </ScrollContent>
        </KeyboardAvoidingView>
        )}
      </Formik>
    </Container>
  );
}
