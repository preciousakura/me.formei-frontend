import { Dimensions } from "react-native";
import {
  InputCNPJ,
  InputDate,
  InputNumber,
  InputRadio,
  InputSelect,
  InputText,
} from "../../../components/layout/UI";
import { DateGroup } from "../styles";

export const inputData = [
  {
    name: "Situação",
    component: () => {
      return (
        <InputRadio
          orientation="vertical"
          label="Situação"
          values={["Sem resposta", "Deferido", "Indeferido"]}
          defaultValue="Sem resposta"
        />
      );
    },
  },
  {
    name: "Tipo de atividade",
    component: () => {
      return (
        <InputSelect
          config={{ placeholder: "Selecione o tipo da atividade" }}
          values={[{ label: "Ceará", value: "Ceará" }]}
          label="Tipo de atividade"
        />
      );
    },
  },
  {
    name: "Tipo de participação",
    component: () => {
      return (
        <InputSelect
          config={{ placeholder: "Selecione o tipo da participação" }}
          values={[{ label: "Ceará", value: "Ceará" }]}
          label="Tipo de participação"
        />
      );
    },
  },
  {
    name: "Título da atividade",
    component: () => {
      return (
        <InputText
          label="Título da atividade"
          config={{ placeholder: "Digite o título da atividade" }}
        />
      );
    },
  },
  {
    name: "Executada na UFC?",
    component: () => {
      return (
        <InputRadio
          label="Executada na UFC?"
          values={["Sim", "Não"]}
          defaultValue="Não"
        />
      );
    },
  },
  {
    name: "Nome da instituição",
    component: () => {
      return (
        <InputText
          label="Nome da instituição"
          config={{ placeholder: "Digite o nome da instituição" }}
        />
      );
    },
  },
  {
    name: "País da instituição",
    component: () => {
      return (
        <InputSelect
          config={{ placeholder: "Selecione o país da instituição" }}
          values={[{ label: "Ceará", value: "Ceará" }]}
          label="País da instituição"
        />
      );
    },
  },
  {
    name: "CNPJ da instituição",
    component: () => {
      return (
        <InputCNPJ
          label="CPNJ da instituição"
          config={{ placeholder: "Digite o CNPJ da instituição" }}
        />
      );
    },
  },
  {
    name: "Data",
    component: () => {
      return (
        <DateGroup>
          <InputDate
            config={{
              placeholder: "Selecione o ano",
              width: Dimensions.get("window").width / 2 - 60,
            }}
            label="Data de início"
          />
          <InputDate
            config={{
              placeholder: "Seleciona o período",
              width: Dimensions.get("window").width / 2 - 60,
            }}
            label="Data de fim"
          />
        </DateGroup>
      );
    },
  },

  {
    name: "Carga horária total",
    component: () => {
      return (
        <InputNumber
          label="Carga horária total"
          config={{ placeholder: "Digite a carga horária total" }}
        />
      );
    },
  },
];
