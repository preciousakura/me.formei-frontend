import { Container, Content } from "../styles";
import { useTheme } from "../../../hooks/useTheme";
import { CustomizedStatusBar } from "../../../components/layout/CustomizedStatusBar";
import {
  CreateButton,
  DisciplineCard,
  DisciplinesByPeriod,
  FilterSelect,
  Header,
  SearchInput,
} from "../../../components/layout";
import { FlatList, HStack, VStack, View } from "native-base";
import { ListRenderItemInfo, Platform } from "react-native";
import { DisciplineByPeriod } from "Discipline";

export function FormationPlan() {
  const { theme } = useTheme();

  const HeaderElement = () => {
    return (
      <VStack space={3} paddingBottom={4}>
        <Header
          isSpaced={false}
          backButton
          colorIcon={theme.colors.text}
          colorText={theme.colors.white}
        />
        <SearchInput title="hora complementar" />
        <HStack space={2}>
          <FilterSelect
            config={{
              placeholder: "Selecione um filtro",
              defaultValue: "Em andamento",
            }}
            values={[
              { label: "Em andamento", value: "Em andamento" },
              { label: "A Fazer", value: "A Fazer" },
              { label: "Concluídas", value: "Concluídas" },
            ]}
          />
          <CreateButton onPress={() => console.log()} />
        </HStack>
      </VStack>
    );
  };

  function renderCard(itens: ListRenderItemInfo<DisciplineByPeriod>) {
    const { item } = itens;

    return (
      <DisciplinesByPeriod
        data={item}
        Card={DisciplineCard}
        key={`${item.period}_${itens.index}`}
        {...item}
      />
    );
  }

  const data: DisciplineByPeriod[] = [
    {
      period: "PERÍODO ATUAL",
      disciplines: [
        {
          name: "Engenharia de Software",
          prerequisites: [],
          workload: 64,
          cod: "CB0534",
          isOptional: false,
        },
        {
          name: "Lógica para ciência da Computação",
          prerequisites: [],
          workload: 96,
          cod: "CB0534",
          isOptional: false,
        },
        {
          name: "Computação Gráfica II",
          prerequisites: [],
          workload: 64,
          cod: "CB0534",
          isOptional: true,
        },
        {
          name: "Aprendizagem de Máquina",
          prerequisites: [],
          workload: 64,
          cod: "CB0534",
          isOptional: true,
        },
      ],
    },
  ];

  return (
    <Container>
      <CustomizedStatusBar backgroundColor={theme.colors.background} />
      <Content>
        <FlatList
          contentContainerStyle={{
            paddingBottom: Platform.OS === "ios" ? 70 : 0,
          }}
          data={data}
          renderItem={renderCard}
          ListHeaderComponent={HeaderElement}
          keyExtractor={(item, i) => `${item.period}_${i}`}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        />
      </Content>
    </Container>
  );
}
