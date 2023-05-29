import { Button, HStack, VStack } from "native-base";
import { Container } from "../styles";
import { Header } from "../../../components/layout";
import { useTheme } from "styled-components";

import { FlatList, ListRenderItemInfo } from "react-native";
import { H5 } from "../../../components/shared/text";
import { inputData } from "./inputs";

export function AdditionalHoursRegister() {
  const theme = useTheme();

  function renderItem(
    itens: ListRenderItemInfo<{ name: string; component: () => JSX.Element }>
  ) {
    const { item } = itens;

    const Component = item.component;
    return <Component />;
  }

  const HeaderElement = () => {
    return (
      <Header
        isSpaced={false}
        backButton
        colorIcon={theme.colors.text}
        colorText={theme.colors.text}
        title="Adicionar atividade"
      />
    );
  };

  const FooterElement = () => {
    return (
      <HStack space={3}>
        <Button flex={1} marginTop={30} mt="5">
          <H5 color={theme.colors.white}>Adicionar</H5>
        </Button>
        <Button flex={1} variant="outline" marginTop={30} mt="5">
          <H5 color={theme.colors.text}>Cancelar</H5>
        </Button>
      </HStack>
    );
  };
  return (
    <Container>
      <FlatList
        data={inputData}
        renderItem={renderItem}
        keyExtractor={(item, i) => `${item.name}_${i}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={HeaderElement}
        ListFooterComponent={FooterElement}
      />
    </Container>
  );
}
