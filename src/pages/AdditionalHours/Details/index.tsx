import { RouteProp, useRoute } from "@react-navigation/native";
import { BorderedContent, Container } from "../styles";
import { H5, Subtitle } from "../../../components/shared/text";
import { Header } from "../../../components/layout";
import { useTheme } from "styled-components";
import {
  Badge,
  Divider,
  HStack,
  Icon,
  ScrollView,
  VStack,
  View,
} from "native-base";
import { AdditionalHoursParamList } from "../../../types/types";
import { FontAwesome } from "@expo/vector-icons";
import { CustomizedStatusBar } from "../../../components/layout/CustomizedStatusBar";
export function AdditionalHoursDetails() {
  const theme = useTheme();
  const { params } =
    useRoute<RouteProp<AdditionalHoursParamList, "AdditionalHoursDetails">>();

  const column = [
    { name: "Tipo de atividade", value: params.activity_type },
    { name: "Tipo de participação", value: params.participation_type },
    { name: "Executada na UFC?", value: params.atUfc ? "Sim" : "Não" },
    { name: "Nome da Instiuição", value: params.institution_name },
    { name: "País da Instituição", value: params.institution_country },
    { name: "CPNJ da Instituição", value: params.institution_cnpj },
    { name: "Carga horária total", value: `${params.amount_hours}h` },
  ];

  const situation_badges: Record<string, JSX.Element> = {
    "Sem resposta": <Badge>Sem Resposta</Badge>,
    Indeferido: <Badge colorScheme="danger">Indeferido</Badge>,
    Deferido: <Badge colorScheme="success">Deferido</Badge>,
  };

  return (
    <Container>
      <CustomizedStatusBar />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Header
          backButton
          colorIcon={theme.colors.text}
          colorText={theme.colors.text}
        />

        <BorderedContent>
          <Subtitle style={{ paddingBottom: 10 }} size={22}>
            {params.activity_title}
          </Subtitle>

          <VStack marginBottom={5}>
            <HStack justifyContent="space-between">
              <HStack space={2} alignItems="center">
                <Icon
                  as={FontAwesome}
                  name={"calendar"}
                  size={4}
                  color={theme.colors.text}
                />
                <H5 color={theme.colors.text}>Inicio:</H5>
                <H5 weight="regular" color={theme.colors.text}>
                  {params.date.start_date}
                </H5>
              </HStack>
              <HStack space={2} alignItems="center">
                <Icon
                  as={FontAwesome}
                  name={"calendar"}
                  size={4}
                  color={theme.colors.text}
                />
                <H5 color={theme.colors.text}>Fim:</H5>
                <H5 weight="regular" color={theme.colors.text}>
                  {params.date.end_date}
                </H5>
              </HStack>
            </HStack>
          </VStack>
          <Divider marginBottom={5} />

          <HStack space={2} paddingBottom={4} alignItems="center">
            <H5 color={theme.colors.text}>Situação: </H5>
            {situation_badges[params.situation]}
          </HStack>

          {column.map((c, i) => {
            return (
              <VStack key={i} paddingBottom={4}>
                <H5 color={theme.colors.text}>{c.name}: </H5>
                <H5 weight="regular" color={theme.colors.text}>
                  {c.value}
                </H5>
              </VStack>
            );
          })}
        </BorderedContent>
      </ScrollView>
    </Container>
  );
}
