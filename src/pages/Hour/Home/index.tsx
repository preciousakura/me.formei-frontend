import { View } from "react-native";
import { Container } from "../styles";
import { TabView, SceneMap } from "react-native-tab-view";
import { useState } from "react";
import { CustomizedStatusBar } from "../../../components/layout/CustomizedStatusBar";
import { Header } from "../../../components/layout";
import { useTheme } from "../../../hooks/useTheme";

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#ff4081" }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

const renderScene = SceneMap({
  seg: FirstRoute,
  ter: SecondRoute,
  qua: SecondRoute,
  qui: SecondRoute,
  sex: SecondRoute,
});

export function HourHome() {
  const { theme } = useTheme();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "seg", title: "SEG" },
    { key: "ter", title: "TER" },
    { key: "qua", title: "QUA" },
    { key: "qui", title: "QUI" },
    { key: "sex", title: "SEX" },
  ]);

  return (
    <Container>
      <CustomizedStatusBar backgroundColor={theme.colors.primary[500]} />
      <Header
        props={{
          justifyContent: "center",
          backgroundColor: theme.colors.primary[500],
        }}
        colorIcon={theme.colors.text}
        colorText={theme.colors.text}
        title="Horário"
      />
      <TabView
        style={{ backgroundColor: theme.colors.primary[500] }}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
      />
    </Container>
  );
}
