import { FlatList, ListRenderItemInfo, StatusBar } from "react-native";
import { Container } from "../styles";
import { useTheme } from "styled-components";
import { Header, SearchInput } from "../../../components/layout";
import { View } from "native-base";
import { AdditionalHoursCard } from "../../../components/layout/AdditionalHoursCard";
import { AdditionalHour } from "AdditionalHours";

export function AdditionalHoursHome() {
  const theme = useTheme();
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
      amount_hours: 24,
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
          colorIcon={theme.color.text}
          colorText={theme.color.text}
          title="Horas Complementares"
        />
        <SearchInput title="hora complementar" />
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
      alert("Right coisado");
      rowRefs.get(itens.index).close();
    };

    const handleLeft = () => {
      alert("Left coisado");
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
        {...item}
      />
    );
  }

  return (
    <Container>
      <StatusBar
        backgroundColor={theme.color.background}
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
