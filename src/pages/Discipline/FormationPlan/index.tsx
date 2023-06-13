import { Container, Content } from "../styles";
import { useTheme } from "../../../hooks/useTheme";
import { CustomizedStatusBar } from "../../../components/layout/CustomizedStatusBar";
import {
  CreateButton,
  FilterSelect,
  Header,
  SearchInput,
  SwipedDisciplinesByPeriod,
} from "../../../components/layout";
import { FlatList, HStack, VStack, View } from "native-base";
import { ListRenderItemInfo, Platform } from "react-native";
import { DisciplineByPeriod } from "Discipline";
import { useNavigation } from "@react-navigation/native";
import { DisciplineProp } from "../../../types/types";

export function FormationPlan() {
  const { theme } = useTheme();
  const navigation = useNavigation<DisciplineProp>();

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
          <CreateButton
            onPress={() => navigation.navigate("DisciplineRegister")}
          />
        </HStack>
      </VStack>
    );
  };

  function renderCard(itens: ListRenderItemInfo<DisciplineByPeriod>) {
    const { item } = itens;

    return (
      <SwipedDisciplinesByPeriod
        data={item}
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
          prerequisites: [
            {
              name: "Programação",
              prerequisites: [
                {
                  name: "Fundamentos de Programação",
                  prerequisites: [],
                  workload: 64,
                  cod: "CB0534",
                  isOptional: false,

                  bibliography: [],
                },
              ],
              workload: 64,
              cod: "CB0534",
              isOptional: false,

              bibliography: [],
            },
          ],
          workload: 64,
          cod: "CB0534",
          isOptional: false,
          menu: "1. Gerenciamento de projeto, 2. Estimação de custos, 3. Análise e especificação de requisitos, 4. Especificações formais, 5. Interface com o usuário, 6. Modelagem de dados, 7. Técnicas e modelagens para projeto e implementação: arquitetura de projeto, projeto estruturado, projeto orientado a objetos, 8. Gerenciamento de versões e configurações, 9. Verificação: testes, revisões e inspeções, 10. Validação e certificação de qualidade, 11. Manutenção, 12. Documentação.",
          bibliography: [
            "SOMMERVILLE, I. Engenharia de Software. 9. ed. São Paulo: Pearson Education, 2011. 568p. ISBN: 9788579361081",
            "PRESSMAN, Roger S. Engenharia de software: uma abordagem profissional. 7. ed. Porto Alegre: McGraw Hill, 2011. 771 p. ISBN: 9788563308337",
            "PÁDUA FILHO, W. Engenharia de Software: Fundamentos, Métodos e Padrões. 3. ed. Rio de Janeiro: LTC, 2009. 1248 p. ISBN 9788521616504.",
          ],
        },
        {
          name: "Lógica para ciência da Computação",
          prerequisites: [],
          workload: 96,
          cod: "CB0534",
          isOptional: false,
          bibliography: [],
        },
        {
          name: "Computação Gráfica II",
          prerequisites: [],
          workload: 64,
          cod: "CB0534",
          isOptional: true,
          bibliography: [],
        },
        {
          name: "Aprendizagem de Máquina",
          prerequisites: [],
          workload: 64,
          cod: "CB0534",
          isOptional: true,
          bibliography: [],
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
