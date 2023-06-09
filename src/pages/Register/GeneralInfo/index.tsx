import { Container, ContentForm } from "../styles";
import { Header } from "../../../components/layout";
import { Button, VStack } from "native-base";
import { InputSelect } from "../../../components/layout/UI";
import { H5, Subtitle } from "../../../components/shared/text";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import {
  UserLoginNavigationProp,
  UserLoginNavigatorParamList,
} from "../../../types/types";
import { useTheme } from "styled-components";
import { CustomizedStatusBar } from "../../../components/layout/CustomizedStatusBar";
import * as yup from "yup";
import { Formik } from "formik";
import { useAuth } from "../../../hooks/useAuth";
import { Student } from "User";

export default function GeneralInfo() {
  const theme = useTheme();
  const navigation = useNavigation<UserLoginNavigationProp>();

  const { params } =
    useRoute<RouteProp<UserLoginNavigatorParamList, "GeneralInfo">>();

  let registerValidationSchema = yup.object().shape({
    state: yup.string().required("O estado obrigatório."),
    city: yup.string().required("A cidade é obrigatória."),
    university: yup.string().required("A universidade é obrigatória."),
    course: yup.string().required("O curso é obrigatório."),
    enrollmentSemester: yup
      .string()
      .required("O período de entrada é obrigatório."),
    enrollmentYear: yup.string().required("O ano de entrada é obrigatório."),
  });

  const { loading, postStudent, error } = useAuth();

  function submit(values: any) {
    const currentYear = new Date().getFullYear();
    const calculatedSemester =
      ((currentYear - Number(values.enrollmentYear)) * 12) / 6 + 1;

    const student: Student = {
      ...params,
      ...values,
      currentSemester: calculatedSemester,
      enrollmentYear: Number(values.enrollmentYear),
      enrollmentSemester: Number(values.enrollmentSemester),
    };

    postStudent(student);
  }

  return (
    <Container
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <CustomizedStatusBar backgroundColor={theme.colors.primary[500]} />
      <Header backButton />
      <Formik
        initialValues={{
          state: "",
          city: "",
          university: "",
          course: "",
          currentSemester: "",
          enrollmentSemester: "",
          enrollmentYear: "",
        }}
        validateOnMount={true}
        onSubmit={(values) => submit(values)}
        validationSchema={registerValidationSchema}
      >
        {({ handleChange, handleSubmit, values, touched, errors, isValid }) => (
          <ContentForm>
            <Subtitle align="center">Informações gerais</Subtitle>
            <VStack space={3} mt="5" paddingBottom={30}>
              <InputSelect
                config={{
                  placeholder: "Selecione seu estado",
                  onValueChange: handleChange("state"),
                  selectedValue: values.state,
                }}
                touched={touched.state}
                errors={errors.state}
                values={[{ label: "Ceará", value: "Ceará" }]}
                label="Estado"
              />

              <InputSelect
                config={{
                  placeholder: "Selecione seu município",
                  onValueChange: handleChange("city"),
                  selectedValue: values.city,
                }}
                touched={touched.city}
                errors={errors.city}
                values={[{ label: "Fortaleza", value: "Fortaleza" }]}
                label="Município"
              />

              <InputSelect
                config={{
                  placeholder: "Selecione sua univerdade",
                  onValueChange: handleChange("university"),
                  selectedValue: values.university,
                }}
                touched={touched.university}
                errors={errors.university}
                values={[
                  {
                    label: "Universidade Federal do Ceará",
                    value: "Universidade Federal do Ceará",
                  },
                ]}
                label="Universidade"
              />

              <InputSelect
                config={{
                  placeholder: "Selecione seu curso",
                  onValueChange: handleChange("course"),
                  selectedValue: values.course,
                }}
                touched={touched.course}
                errors={errors.course}
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
                  onValueChange: handleChange("enrollmentYear"),
                  selectedValue: values.enrollmentYear,
                }}
                touched={touched.enrollmentYear}
                errors={errors.enrollmentYear}
                values={[{ label: "2020", value: "2020" }]}
                label="Ano de entrada"
              />

              <InputSelect
                config={{
                  placeholder: "Seleciona o período",
                  onValueChange: handleChange("enrollmentSemester"),
                  selectedValue: values.enrollmentSemester,
                }}
                touched={touched.enrollmentSemester}
                errors={errors.enrollmentSemester}
                values={[{ label: "1", value: "1" }]}
                label="Período de entrada"
              />

              <Button
                isLoading={loading}
                disabled={!isValid}
                onPress={() => handleSubmit()}
                marginTop={30}
                mt="5"
              >
                <H5 color={theme.colors.white}>Criar</H5>
              </Button>
            </VStack>
          </ContentForm>
        )}
      </Formik>
    </Container>
  );
}
