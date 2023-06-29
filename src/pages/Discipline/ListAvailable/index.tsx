import { Container, Content } from "../styles";
import { useTheme } from "../../../hooks/useTheme";
import { CustomizedStatusBar } from "../../../components/layout/CustomizedStatusBar";
import {
  AdminContactCard,
  DisciplinesByPeriod,
  FilterSelect,
  Header,
  Loading,
  SearchInput,
} from "../../../components/layout";
import { FlatList, VStack, View } from "native-base";
import { ListRenderItemInfo, Platform } from "react-native";
import { Discipline } from "Discipline";
import { useDisciplines } from "../../../servicesHooks/useDisciplines";
import { H5 } from "../../../components/shared/text";
import { useState } from "react";

export function ListAvailable() {
  const { theme } = useTheme();

  const [termo, setTermo] = useState("");
  const [isOptional, setIsOptional] = useState(false);

  function renderCard(itens: ListRenderItemInfo<Discipline>) {
    const { item } = itens;

    return (
      <DisciplinesByPeriod
        data={item}
        key={`${item}_${itens.index}`}
        {...item}
      />
    );
  }

  const { data, loading } = useDisciplines();

  const filteredList =
    termo.length > 0
      ? data?.disciplines
          .map((d) => {
            return {
              ...d,
              disciplines: d.disciplines.filter(
                (dc) =>
                  dc.name.toLowerCase().includes(termo.toLowerCase()) ||
                  dc.cod.toLowerCase().includes(termo.toLowerCase())
              ),
            };
          })
          .filter((d) => d.disciplines.length > 0)
      : data?.disciplines;

  const filtered = filteredList
    ? filteredList.map((d) => {
        return {
          ...d,
          disciplines: d.disciplines.filter(
            (df) => df.isOptional === isOptional
          ),
        };
      })
    : [];

  return (
    <Container>
      {loading ? (
        <Loading opacity={false} />
      ) : (
        <>
          <CustomizedStatusBar backgroundColor={theme.colors.background} />
          <Content>
            <VStack space={3}>
              <Header
                isSpaced={false}
                backButton
                colorIcon={theme.colors.text}
                colorText={theme.colors.white}
              />
              <SearchInput
                flex={0}
                config={{ defaultValue: termo, onChangeText: setTermo }}
                onClear={setTermo}
                title="disciplina"
              />

              <FilterSelect
                flex={0}
                config={{
                  onValueChange: (value: string) => {
                    setIsOptional(value === "optativa");
                  },
                  placeholder: "Selecione um filtro",
                  defaultValue: "obrigatória",
                }}
                values={[
                  { label: "Optativa", value: "optativa" },
                  { label: "Obrigatória", value: "obrigatória" },
                ]}
              />
              <AdminContactCard />
            </VStack>

            {filtered.length > 0 ? (
              <FlatList
                contentContainerStyle={{
                  paddingBottom: Platform.OS === "ios" ? 350 : 0,
                }}
                data={filtered.filter((d) => d.disciplines.length > 0)}
                renderItem={renderCard}
                keyExtractor={(item, i) => `${item.period}_${i}`}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
              />
            ) : (
              <View justifyContent="center" alignItems="center" marginTop={20}>
                <H5>Nenhum resultado foi encontrado</H5>
              </View>
            )}
          </Content>
        </>
      )}
    </Container>
  );
}
