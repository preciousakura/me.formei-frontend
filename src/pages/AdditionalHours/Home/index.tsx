import { FlatList, ListRenderItemInfo, StatusBar } from "react-native";
import { Container } from "../styles";
import { useTheme } from "styled-components";
import { Header, SearchInput } from "../../../components/layout";
import { View } from "native-base";
import { AdditionalHoursCard } from "../../../components/layout/AdditionalHoursCard";
import { AdditionalHour } from "AdditionalHours";

export function AdditionalHoursHome() {
  const theme = useTheme();
  const data = [
    {
      title: "Monitoria de Compiladores",
      hour: 64,
      linkTo: "",
      isValid: false,
    },
    { title: "Líder de Turma", hour: 24, linkTo: "", isValid: true },
    { title: "Estágio Insight", hour: 96, linkTo: "", isValid: true },
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

    const handleLeft = () => {
      alert("Left coisado");
      rowRefs.get(itens.index).close();
    };

    const handleRight = () => {
      alert("Right coisado");
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
        key={`${item.title}_${itens.index}`}
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
        keyExtractor={(item) => item.title}
        ListHeaderComponent={HeaderElement}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
    </Container>
  );
}
