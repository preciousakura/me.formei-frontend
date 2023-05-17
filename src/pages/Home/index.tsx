import { View } from "react-native";
import { Container, Content, TopContent, UserInfo } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { H5, Subtitle } from "../../components/shared/text";
import { ProgressCourse } from "../../components/layout";

export function Home() {
  return (
    <Container
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <TopContent>
        <UserInfo>
          <MaterialCommunityIcons
            name="account-circle"
            size={60}
            color="#fff"
          />
          <View>
            <Subtitle align="left" color="#fff">
              Isabel Cristina
            </Subtitle>
            <H5 align="left">
              Curso:{" "}
              <H5 align="left" weight="regular">
                Ciência da Computação
              </H5>
            </H5>
            <H5 align="left">
              Ano de entrada:{" "}
              <H5 align="left" weight="regular">
                2020.1
              </H5>
            </H5>
          </View>
        </UserInfo>
      </TopContent>
      <Content>
      <ProgressCourse />
      </Content>
    </Container>
  );
}
