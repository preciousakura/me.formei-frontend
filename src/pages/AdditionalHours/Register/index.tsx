import { VStack, View } from "native-base";
import { BorderedContent, ScrollContent } from "../styles";
import { Header } from "../../../components/layout";
import { useTheme } from "styled-components";
import {
  InputCNPJ,
  InputDate,
  InputNumber,
  InputRadio,
  InputSelect,
  InputText,
} from "../../../components/layout/UI";

export function AdditionalHoursRegister() {
  const theme = useTheme();
  return (
    <ScrollContent
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={{ padding: 20 }}>
        <Header
          backButton
          colorIcon={theme.color.text}
          colorText={theme.color.text}
          title="Adicionar atividade"
        />
      </View>
      <BorderedContent>
        <VStack space={3} mt="5" paddingBottom={30}>
          <InputRadio
            label="Situação"
            values={["Sem resposta", "Deferido", "Indeferido"]}
            defaultValue="Sem resposta"
          />
          <InputSelect
            config={{ placeholder: "Selecione o tipo da atividade" }}
            values={[{ label: "Ceará", value: "Ceará" }]}
            label="Tipo de atividade"
          />
          <InputSelect
            config={{ placeholder: "Selecione o tipo da participação" }}
            values={[{ label: "Ceará", value: "Ceará" }]}
            label="Tipo de participação"
          />
          <InputText
            label="Título da atividade"
            config={{ placeholder: "Digite o título da atividade" }}
          />

          <InputRadio
            label="Executada na UFC?"
            values={["Sim", "Não"]}
            defaultValue="Não"
          />

          <InputText
            label="Nome da instituição"
            config={{ placeholder: "Digite o nome da instituição" }}
          />

          <InputSelect
            config={{ placeholder: "Selecione o país da instituição" }}
            values={[{ label: "Ceará", value: "Ceará" }]}
            label="País da instituição"
          />

          <InputCNPJ
            label="CPNJ da instituição"
            config={{ placeholder: "Digite o CNPJ da instituição" }}
          />

          <InputNumber
            label="Carga horária total"
            config={{ placeholder: "Digite a carga horária total" }}
          />
          <InputDate label="Carga horária total" />
        </VStack>
      </BorderedContent>
    </ScrollContent>
  );
}
