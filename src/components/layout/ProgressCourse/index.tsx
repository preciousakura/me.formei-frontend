import { View } from "react-native";
import { H5, Subtitle, Title } from "../../shared/text";
import { Container } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ProgressBar } from "../ProgressBar";

export function ProgressCourse() {
  const progressByType = [
    { name: "Disciplinas", value: 0.6, color: "#277BC0", parcial: 1119, total: 3008 },
    { name: "Horas complementares", value: 0.12, color: "#8FC6F2", parcial: 24, total: 192 },
  ];

  return (
    <Container>
      <H5 size={12} align="left" color="#277BC0">
        Progresso
      </H5>
      <View
        style={{
          flexDirection: "row",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <Title align="left" color="#2C3333" size={30}>
          72%
        </Title>
        <Subtitle align="left" color="#2C3333" size={14}>
          Carga Horária: 1400/3200h
        </Subtitle>
      </View>

      <ProgressBar data={progressByType} legend />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Subtitle align="right" color="#2C3333" size={14}>
          Acessar progresso detalhado
        </Subtitle>
        <MaterialCommunityIcons
          name="chevron-right"
          size={25}
          color="#2C3333"
        />
      </View>
    </Container>
  );
}
