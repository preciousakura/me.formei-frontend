import { Container } from "../styles";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { useState } from "react";
import { CustomizedStatusBar } from "../../../components/layout/CustomizedStatusBar";
import { Header, HourSection } from "../../../components/layout";
import { useTheme } from "../../../hooks/useTheme";
import { Icon, IconButton } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const renderScene = SceneMap({
  seg: () => {
    return <HourSection day={2} />;
  },
  ter: () => {
    return <HourSection day={3} />;
  },
  qua: () => {
    return <HourSection day={4} />;
  },
  qui: () => {
    return <HourSection day={5} />;
  },
  sex: () => {
    return <HourSection day={6} />;
  },
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

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "white" }}
      style={{ backgroundColor: theme.colors.primary[500] }}
      labelStyle={{ fontFamily: "Nunito-Bold" }}
    />
  );

  return (
    <Container>
      <CustomizedStatusBar backgroundColor={theme.colors.primary[500]} />
      <Header
        props={{
          justifyContent: "center",
          backgroundColor: theme.colors.primary[500],
        }}
        colorIcon={theme.colors.text}
        colorText={theme.colors.white}
        title="Horário"
        rightButton={() => (
          <IconButton
            icon={<Icon as={Ionicons} name="md-settings-outline" />}
            _icon={{
              size: 36,
              color: theme.colors.white,
            }}
            padding={0}
            borderRadius={30}
          />
        )}
      />
      <TabView
        style={{ backgroundColor: theme.colors.background, flexGrow: 1 }}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
      />
    </Container>
  );
}
