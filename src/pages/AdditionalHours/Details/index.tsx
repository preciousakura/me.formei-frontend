import { RouteProp, useRoute } from "@react-navigation/native";
import { DetailContainer, DetailContent } from "../styles";
import { H5, Subtitle } from "../../../components/shared/text";
import { Header } from "../../../components/layout";
import { useTheme } from "styled-components";
import { Badge, Divider, HStack, Icon, VStack, View } from "native-base";
import { AdditionalHoursParamList } from "../../../types/types";
import { FontAwesome } from "@expo/vector-icons";
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
    <DetailContainer
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={{ padding: 20 }}>
        <Header
          backButton
          colorIcon={theme.color.text}
          colorText={theme.color.text}
          title="Detalhes da atividade"
        />
      </View>

      <DetailContent>
        <HStack paddingBottom={5} alignItems="center" space={3}>
          <Icon
            as={FontAwesome}
            name={
              params.situation === "Deferido"
                ? "check"
                : params.situation === "Indeferido"
                ? "remove"
                : "question"
            }
            size={8}
            color={
              params.situation === "Deferido"
                ? theme.color.primaryColor
                : params.situation === "Indeferido"
                ? theme.color.errorColor
                : theme.color.grayDark
            }
          />
          <Subtitle size={22}>{params.activity_title}</Subtitle>
        </HStack>

        <VStack marginBottom={5}>
          <HStack justifyContent="space-between">
            <HStack space={2} alignItems="center">
              <Icon
                as={FontAwesome}
                name={"calendar"}
                size={4}
                color={theme.color.primaryColor}
              />
              <H5 color={theme.color.primaryColor}>Inicio: </H5>
              <H5 color={theme.color.text}>{params.date.start_date}</H5>
            </HStack>
            <HStack space={2} alignItems="center">
              <Icon
                as={FontAwesome}
                name={"calendar"}
                size={4}
                color={theme.color.primaryColor}
              />
              <H5 color={theme.color.primaryColor}>Fim: </H5>
              <H5 color={theme.color.text}>{params.date.end_date}</H5>
            </HStack>
          </HStack>
        </VStack>
        <Divider marginBottom={5} />

        <HStack space={2} paddingBottom={4} alignItems="center">
          <H5 color={theme.color.primaryColor}>Situação: </H5>
          {situation_badges[params.situation]}
        </HStack>

        {column.map((c, i) => {
          return (
            <VStack key={i} paddingBottom={4}>
              <H5 color={theme.color.primaryColor}>{c.name}: </H5>
              <H5 color={theme.color.text}>{c.value}</H5>
            </VStack>
          );
        })}
      </DetailContent>
    </DetailContainer>
  );
}
