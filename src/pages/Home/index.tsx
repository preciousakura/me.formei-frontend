import { Container, Content, TopContent } from "./styles";
import {
  ProgressCourse,
  UserInfo,
  TodayClasses,
} from "../../components/layout";
import {
  ButtonCard,
  ButtonCardProps,
} from "../../components/layout/ButtonCard";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList } from "native-base";
import { View } from "react-native";

export function Home() {
  const options = [
    {
      name: "Horas complementares",
      icon: MaterialCommunityIcons,
      nameIcon: "timelapse",
      linkTo: "AdditionalHours",
    },
    {
      name: "Professores",
      icon: Feather,
      nameIcon: "book",
      linkTo: "Teacher",
    },
    {
      name: "Períodos",
      icon: Feather,
      nameIcon: "calendar",
      linkTo: "Periods",
    },
  ];

  function renderCard({ item }: { item: ButtonCardProps }) {
    return <ButtonCard {...item} />;
  }

  return (
    <Container
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <TopContent>
        <UserInfo />
      </TopContent>
      <Content>
        <ProgressCourse />
        <FlatList
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          keyExtractor={(item) => item.name}
          data={options}
          renderItem={renderCard}
        />
        <TodayClasses />
      </Content>
    </Container>
  );
}
