import { FlatList, ListRenderItemInfo, StatusBar } from "react-native";
import { Container } from "../styles";
import { useTheme } from "styled-components";
import { CreateButton, Header, SearchInput } from "../../../components/layout";
import { HStack, View } from "native-base";
import { AdditionalHoursCard } from "../../../components/layout/AdditionalHoursCard";
import { AdditionalHour } from "AdditionalHours";
import { useNavigation } from "@react-navigation/native";
import { AdditionalHoursProp } from "../../../types/types";

export function AdditionalHoursHome() {
  const theme = useTheme();
  const navigation = useNavigation<AdditionalHoursProp>();

  const data: AdditionalHour[] = [
    {
      situation: "Sem resposta",
      activity_type: "Iniciação à pesquisa",
      participation_type: "Membro da equipe",
      activity_title: "Bolsa no laboratório CRAB",
      atUfc: true,
      institution_name: "Universidade Federal do Ceará",
      institution_country: "Brasil",
      institution_cnpj: "07272636000131",
      date: {
        start_date: "25/02/2021",
        end_date: "29/09/2022",
      },
      amount_hours: 96,
    },
    {
      situation: "Indeferido",
      activity_type: "Iniciação à pesquisa",
      participation_type: "Membro da equipe",
      activity_title: "Curso de Manutenção e Aprendizagem de Máquina",
      atUfc: true,
      institution_name:
        "Universidade Federal do Ceará Ceará CearáCearáCeará Ceará Ceará",
      institution_country: "Brasil",
      institution_cnpj: "07272636000131",
      date: {
        start_date: "25/02/2021",
        end_date: "29/09/2022",
      },
      amount_hours: 321,
    },
    {
      situation: "Deferido",
      activity_type: "Iniciação à pesquisa",
      participation_type: "Membro da equipe",
      activity_title: "Estágio no Great",
      atUfc: true,
      institution_name: "Universidade Federal do Ceará",
      institution_country: "Brasil",
      institution_cnpj: "07272636000131",
      date: {
        start_date: "25/02/2021",
        end_date: "29/09/2022",
      },
      amount_hours: 64,
    },
  ];

  const HeaderElement = () => {
    return (
      <View>
        <Header
          backButton
          colorIcon={theme.colors.text}
          colorText={theme.colors.text}
          title="Horas Complementares"
        />
        <HStack space={2} paddingY={5}>
          <SearchInput title="hora complementar" />
          <CreateButton
            onPress={() => navigation.navigate("AdditionalHoursRegister")}
          />
        </HStack>
      </View>
    );
  };

  let rowRefs = new Map();

  function renderCard(itens: ListRenderItemInfo<AdditionalHour>) {
    const { item } = itens;

    const swipeOpen = () => {
      [...rowRefs.entries()].forEach(([key, ref]) => {
        if (key !== itens.index && ref) ref.close();
      });
    };

    const handleRight = () => {
      rowRefs.get(itens.index).close();
    };

    const handleLeft = () => {
      navigation.navigate("AdditionalHoursEdit", item)
      rowRefs.get(itens.index).close();
    };

    return (
      <AdditionalHoursCard
        data={item}
        handleRight={handleRight}
        handleLeft={handleLeft}
        onSwipeableWillOpen={swipeOpen}
        item_key={itens.index}
        rowRefs={rowRefs}
        key={`${item.activity_title}_${itens.index}`}
        onPress={() => navigation.navigate("AdditionalHoursDetails", item)}
        {...item}
      />
    );
  }

  return (
    <Container>
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle="dark-content"
      />
      <FlatList
        data={data}
        renderItem={renderCard}
        keyExtractor={(item) => item.activity_title}
        ListHeaderComponent={HeaderElement}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
    </Container>
  );
}
