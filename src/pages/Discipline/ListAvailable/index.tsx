import { Container, Content } from "../styles";
import { useTheme } from "../../../hooks/useTheme";
import { CustomizedStatusBar } from "../../../components/layout/CustomizedStatusBar";
import {
  AdminContactCard,
  DisciplineCard,
  DisciplinesByPeriod,
  FilterSelect,
  Header,
  SearchInput,
} from "../../../components/layout";
import { FlatList, VStack, View } from "native-base";
import { ListRenderItemInfo, Platform } from "react-native";
import { DisciplineByPeriod } from "Discipline";

export function ListAvailable() {
  const { theme } = useTheme();

  const HeaderElement = () => {
    return (
      <VStack space={3}>
        <Header
          isSpaced={false}
          backButton
          colorIcon={theme.colors.text}
          colorText={theme.colors.white}
        />
        <SearchInput title="hora complementar" />

        <FilterSelect
          config={{
            placeholder: "Selecione um filtro",
            defaultValue: "Obrigatória",
          }}
          values={[
            { label: "Optativa", value: "optativa" },
            { label: "Obrigatória", value: "Obrigatória" },
          ]}
        />
        <AdminContactCard />
      </VStack>
    );
  };

  function renderCard(itens: ListRenderItemInfo<DisciplineByPeriod>) {
    const { item } = itens;

    return (
      <DisciplinesByPeriod
        data={item}
        key={`${item.period}_${itens.index}`}
        {...item}
      />
    );
  }

  const data: DisciplineByPeriod[] = [
    {
      period: "1",
      disciplines: [
        {
          name: "Cálculo Diferencial e Integral I",
          prerequisites: [],
          workload: 96,
          cod: "CB0534",
          isOptional: false,
        },
        {
          name: "Seminário em Computação",
          prerequisites: [],
          workload: 32,
          cod: "CB0534",
          isOptional: false,
        },
        {
          name: "Matemática Discreta",
          prerequisites: [],
          workload: 96,
          cod: "CB0534",
          isOptional: false,
        },
        {
          name: "Fundamentos de Programação",
          prerequisites: [],
          workload: 64,
          cod: "CB0534",
          isOptional: false,
        },
      ],
    },
    {
      period: "2",
      disciplines: [
        {
          name: "Programação",
          prerequisites: [
            {
              name: "Fundamentos de Programação",
              prerequisites: [],
              workload: 64,
              cod: "CB0534",
              isOptional: false,
            },
          ],
          workload: 64,
          cod: "CB0534",
          isOptional: false,
        },
        {
          name: "Cálculo Diferencial e Integral II ",
          prerequisites: [
            {
              name: "Cálculo Diferencial e Integral I",
              prerequisites: [],
              workload: 96,
              cod: "CB0534",
              isOptional: false,
            },
          ],
          workload: 96,
          cod: "CB0535",
          isOptional: false,
        },
        {
          name: "Álgebra Linear",
          prerequisites: [],
          workload: 64,
          cod: "CB0534",
          isOptional: false,
        },
        {
          name: "Estrutura de Dados",
          prerequisites: [
            {
              name: "Matemática Discreta",
              prerequisites: [],
              workload: 96,
              cod: "CB0534",
              isOptional: false,
            },
            {
              name: "Fundamentos de Programação",
              prerequisites: [],
              workload: 64,
              cod: "CB0534",
              isOptional: false,
            },
          ],
          workload: 64,
          cod: "CK0209",
          isOptional: false,
        },
        {
          name: "Transmissão de Dados",
          prerequisites: [],
          workload: 64,
          cod: "CK0170",
          isOptional: false,
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
